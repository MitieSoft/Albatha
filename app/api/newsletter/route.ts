import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema, sanitizeInput, logSecurityEvent, getSecurityHeaders, getCSRFTokenFromBody } from '../../lib/security';
import { newsletterRateLimiter } from '../../lib/rate-limiter';
import { validateCSRFRequest, csrfMiddleware } from '../../lib/csrf-middleware';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';

  try {
    // Rate limiting
    const isAllowed = await newsletterRateLimiter.isAllowed(ip);
    if (!isAllowed) {
      logSecurityEvent('NEWSLETTER_RATE_LIMIT_EXCEEDED', { ip, userAgent }, ip);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: getSecurityHeaders() }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Validate CSRF token using proper session-based validation
    const csrfValidation = await validateCSRFRequest(request);
    if (!csrfValidation.valid) {
      logSecurityEvent('CSRF_TOKEN_INVALID', { 
        ip, 
        userAgent, 
        error: csrfValidation.error
      }, ip);
      return NextResponse.json(
        { error: csrfValidation.error || 'CSRF validation failed' },
        { status: 403, headers: getSecurityHeaders() }
      );
    }
    
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
