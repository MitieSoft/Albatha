import { NextRequest, NextResponse } from 'next/server';
BiquadFilterNodeimport { newsletterSchema, sanitizeInput, logSecurityEvent, getSecurityHeaders } from '../../lib/security';

// Rate limiter instance
const rateLimiter = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';

  try {
    // Rate limiting
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 3; // Max 3 newsletter subscriptions per window

    const current = rateLimiter.get(ip);
    if (current) {
      if (now < current.resetTime) {
        if (current.count >= maxRequests) {
          logSecurityEvent('NEWSLETTER_RATE_LIMIT_EXCEEDED', { ip, userAgent }, ip);
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429, headers: getSecurityHeaders() }
          );
        }
        current.count++;
      } else {
        rateLimiter.set(ip, { count: 1, resetTime: now + windowMs });
      }
    } else {
      rateLimiter.set(ip, { count: 1, resetTime: now + windowMs });
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Sanitize input
    const sanitizedEmail = sanitizeInput(body.email || '');

    // Validate input
    const validation = newsletterSchema.safeParse({ email: sanitizedEmail });
    if (!validation.success) {
      logSecurityEvent('NEWSLETTER_VALIDATION_FAILED', { 
        ip, 
        userAgent, 
        errors: validation.error.errors,
        email: sanitizedEmail 
      }, ip);
      
      return NextResponse.json(
        { 
          error: 'Invalid email address',
          details: validation.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    const { data } = validation;

    // Additional security checks
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /union\s+select/i,
      /drop\s+table/i,
      /insert\s+into/i,
      /delete\s+from/i,
      /exec\s*\(/i,
      /eval\s*\(/i,
      /system\s*\(/i,
    ];

    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(data.email));
    
    if (hasSuspiciousContent) {
      logSecurityEvent('NEWSLETTER_SUSPICIOUS_CONTENT_DETECTED', { 
        ip, 
        userAgent, 
        email: data.email 
      }, ip);
      
      return NextResponse.json(
        { error: 'Suspicious content detected' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // Check for duplicate subscriptions (in production, check database)
    // For now, we'll simulate a check
    const isDuplicate = false; // In production, check against database

    if (isDuplicate) {
      logSecurityEvent('NEWSLETTER_DUPLICATE_SUBSCRIPTION', { 
        ip, 
        userAgent, 
        email: data.email 
      }, ip);
      
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409, headers: getSecurityHeaders() }
      );
    }

    // Process the newsletter subscription
    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Add to mailing list
    
    const subscriptionId = `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Log successful subscription
    logSecurityEvent('NEWSLETTER_SUBSCRIBED', {
      subscriptionId,
      ip,
      userAgent,
      processingTime: Date.now() - startTime,
      email: data.email
    }, ip);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!',
        subscriptionId 
      },
      { 
        status: 200, 
        headers: getSecurityHeaders() 
      }
    );

  } catch (error) {
    logSecurityEvent('NEWSLETTER_ERROR', { 
      ip, 
      userAgent, 
      error: error instanceof Error ? error.message : 'Unknown error',
      processingTime: Date.now() - startTime
    }, ip);

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: getSecurityHeaders() }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: getSecurityHeaders() }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: getSecurityHeaders() }
  );
}
