import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { generalRateLimiter } from './app/lib/rate-limiter';

// Security middleware
export async function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  const pathname = request.nextUrl.pathname;

  // HTTPS Enforcement - Redirect HTTP to HTTPS
  if (request.nextUrl.protocol === 'http:') {
    const httpsUrl = new URL(request.url);
    httpsUrl.protocol = 'https:';
    return NextResponse.redirect(httpsUrl, 301);
  }

  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

  // HSTS header for HTTPS (2 years as requested)
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  // Rate limiting
  const rateLimitKey = `${ip}-${pathname}`;
  const isAllowed = await generalRateLimiter.isAllowed(rateLimitKey);
  
  if (!isAllowed) {
    return new NextResponse('Too Many Requests', { status: 429 });
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
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|images|public).*)',
  ],
};
