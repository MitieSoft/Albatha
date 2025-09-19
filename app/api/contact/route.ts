import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, sanitizeInput, logSecurityEvent, getSecurityHeaders, getCSRFTokenFromBody } from '../../lib/security';
import { contactFormRateLimiter } from '../../lib/rate-limiter';
import { validateCSRFRequest, csrfMiddleware } from '../../lib/csrf-middleware';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';

  try {
    // Rate limiting
    const isAllowed = await contactFormRateLimiter.isAllowed(ip);
    if (!isAllowed) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { ip, userAgent }, ip);
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
    
    // Sanitize all string inputs
    const sanitizedBody = {
      firstName: sanitizeInput(body.firstName || ''),
      lastName: sanitizeInput(body.lastName || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      subject: sanitizeInput(body.subject || ''),
      message: sanitizeInput(body.message || '')
    };

    // Validate input
    const validation = contactFormSchema.safeParse(sanitizedBody);
    if (!validation.success) {
      logSecurityEvent('VALIDATION_FAILED', { 
        ip, 
        userAgent, 
        errors: validation.error.errors,
        input: sanitizedBody 
      }, ip);
      
      return NextResponse.json(
        { 
          error: 'Invalid input data',
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

    const allText = Object.values(data).join(' ');
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(allText));
    
    if (hasSuspiciousContent) {
      logSecurityEvent('SUSPICIOUS_CONTENT_DETECTED', { 
        ip, 
        userAgent, 
        content: allText 
      }, ip);
      
      return NextResponse.json(
        { error: 'Suspicious content detected' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // Process the contact form submission
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Log successful submission
    logSecurityEvent('CONTACT_FORM_SUBMITTED', {
      submissionId,
      ip,
      userAgent,
      processingTime: Date.now() - startTime,
      subject: data.subject
    }, ip);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon.',
        submissionId 
      },
      { 
        status: 200, 
        headers: getSecurityHeaders() 
      }
    );

  } catch (error) {
    logSecurityEvent('CONTACT_FORM_ERROR', { 
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
