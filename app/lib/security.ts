import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Input validation schemas
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'First name contains invalid characters'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'Last name contains invalid characters'),
  email: z.string()
    .email('Invalid email format')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .regex(/^[\+]?[0-9\s\-\(\)]{10,20}$/, 'Invalid phone number format')
    .max(20, 'Phone number must be less than 20 characters'),
  subject: z.string()
    .min(1, 'Subject is required')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

export const newsletterSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .max(100, 'Email must be less than 100 characters')
});

// Input sanitization functions
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  // Remove null bytes and control characters
  let sanitized = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  // Remove excessive whitespace
  sanitized = sanitized.replace(/\s+/g, ' ');
  
  return sanitized;
}

export function sanitizeHTML(html: string): string {
  if (typeof html !== 'string') return '';
  
  try {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'br', 'p'],
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true
    });
  } catch (error) {
    console.error('HTML sanitization error:', error);
    return '';
  }
}

// XSS protection
export function escapeHTML(str: string): string {
  if (typeof str !== 'string') return '';
  
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// CSRF token generation
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Validate CSRF token
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) return false;
  return token === sessionToken;
}

// Rate limiting helper
export class RateLimiter {
  private store: Map<string, { count: number; resetTime: number }> = new Map();
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 15 * 60 * 1000, maxRequests: number = 100) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  isAllowed(key: string): boolean {
    const now = Date.now();
    const current = this.store.get(key);

    if (current) {
      if (now < current.resetTime) {
        if (current.count >= this.maxRequests) {
          return false;
        }
        current.count++;
      } else {
        this.store.set(key, { count: 1, resetTime: now + this.windowMs });
      }
    } else {
      this.store.set(key, { count: 1, resetTime: now + this.windowMs });
    }

    return true;
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, value] of this.store.entries()) {
      if (now > value.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// Security headers helper
export function getSecurityHeaders() {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-DNS-Prefetch-Control': 'off',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com",
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ')
  };
}

// Input validation helper
export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): { success: boolean; data?: T; errors?: string[] } {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
      return { success: false, errors };
    }
    return { success: false, errors: ['Validation failed'] };
  }
}

// Security logging
export function logSecurityEvent(event: string, details: Record<string, unknown>, ip?: string) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    event,
    ip: ip || 'unknown',
    details,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
  };
  
  console.log(`[SECURITY] ${JSON.stringify(logEntry)}`);
  
  // In production, send to security monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to your security monitoring service
    // Example: sendToSecurityService(logEntry);
  }
}
