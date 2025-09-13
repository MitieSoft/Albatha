import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Security middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  const pathname = request.nextUrl.pathname;

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

  // HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  // Rate limiting
  const rateLimitKey = `${ip}-${pathname}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100; // Max requests per window

  const current = rateLimitStore.get(rateLimitKey);
  
  if (current) {
    if (now < current.resetTime) {
      if (current.count >= maxRequests) {
        return new NextResponse('Too Many Requests', { status: 429 });
      }
      current.count++;
    } else {
      rateLimitStore.set(rateLimitKey, { count: 1, resetTime: now + windowMs });
    }
  } else {
    rateLimitStore.set(rateLimitKey, { count: 1, resetTime: now + windowMs });
  }

  // Clean up old entries periodically
  if (Math.random() < 0.01) { // 1% chance
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  // Block suspicious user agents
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /php/i
  ];

  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));
  if (isSuspicious && !userAgent.includes('Googlebot') && !userAgent.includes('Bingbot')) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Block common attack patterns
  const attackPatterns = [
    /\.\.\//, // Directory traversal
    /<script/i, // XSS attempts
    /javascript:/i, // JavaScript injection
    /on\w+\s*=/i, // Event handler injection
    /union\s+select/i, // SQL injection
    /drop\s+table/i, // SQL injection
    /insert\s+into/i, // SQL injection
    /delete\s+from/i, // SQL injection
    /exec\s*\(/i, // Command injection
    /eval\s*\(/i, // Code injection
    /system\s*\(/i, // System command injection
  ];

  const url = request.nextUrl.toString();
  const hasAttackPattern = attackPatterns.some(pattern => pattern.test(url));
  
  if (hasAttackPattern) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  // Security logging
  console.log(`[SECURITY] ${ip} - ${userAgent} - ${pathname} - ${new Date().toISOString()}`);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
