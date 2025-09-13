// Security configuration constants
export const SECURITY_CONFIG = {
  // Rate limiting
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100, // Max requests per window
    CONTACT_FORM_LIMIT: 5, // Max contact form submissions per window
    NEWSLETTER_LIMIT: 3, // Max newsletter subscriptions per window
  },
  
  // Input validation
  VALIDATION: {
    MAX_NAME_LENGTH: 50,
    MAX_EMAIL_LENGTH: 100,
    MAX_PHONE_LENGTH: 20,
    MAX_SUBJECT_LENGTH: 100,
    MAX_MESSAGE_LENGTH: 1000,
    MIN_MESSAGE_LENGTH: 10,
  },
  
  // Security patterns
  PATTERNS: {
    XSS: [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /vbscript:/i,
      /data:text\/html/i,
    ],
    SQL_INJECTION: [
      /union\s+select/i,
      /drop\s+table/i,
      /insert\s+into/i,
      /delete\s+from/i,
      /update\s+set/i,
      /alter\s+table/i,
      /create\s+table/i,
      /exec\s*\(/i,
      /execute\s*\(/i,
    ],
    COMMAND_INJECTION: [
      /system\s*\(/i,
      /exec\s*\(/i,
      /eval\s*\(/i,
      /shell_exec/i,
      /passthru/i,
      /proc_open/i,
      /popen/i,
    ],
    DIRECTORY_TRAVERSAL: [
      /\.\.\//,
      /\.\.\\/,
      /%2e%2e%2f/i,
      /%2e%2e%5c/i,
    ],
  },
  
  // Security headers
  HEADERS: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-DNS-Prefetch-Control': 'off',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  },
  
  // CSP (Content Security Policy)
  CSP: {
    'default-src': "'self'",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'img-src': "'self' data: https: blob:",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self' https://www.google-analytics.com",
    'frame-src': "'self' https://www.google.com",
    'object-src': "'none'",
    'base-uri': "'self'",
    'form-action': "'self'",
    'frame-ancestors': "'none'",
    'upgrade-insecure-requests': '',
  },
  
  // Monitoring
  MONITORING: {
    ENABLE_CLICK_MONITORING: true,
    ENABLE_FORM_MONITORING: true,
    ENABLE_ERROR_MONITORING: true,
    ENABLE_NAVIGATION_MONITORING: true,
    ENABLE_KEYBOARD_MONITORING: true,
    MAX_CLICKS_PER_SECOND: 10,
  },
  
  // Logging
  LOGGING: {
    ENABLE_SECURITY_LOGS: true,
    LOG_LEVEL: 'INFO', // DEBUG, INFO, WARN, ERROR
    MAX_LOG_ENTRIES: 1000,
  },
} as const;

// Security event types
export type SecurityEventType = 
  | 'PAGE_LOAD'
  | 'FORM_SUBMISSION'
  | 'RATE_LIMIT_EXCEEDED'
  | 'VALIDATION_FAILED'
  | 'SUSPICIOUS_CONTENT_DETECTED'
  | 'XSS_ATTEMPT'
  | 'SQL_INJECTION_ATTEMPT'
  | 'COMMAND_INJECTION_ATTEMPT'
  | 'DIRECTORY_TRAVERSAL_ATTEMPT'
  | 'RAPID_CLICKS_DETECTED'
  | 'SUSPICIOUS_FORM_SUBMISSION'
  | 'SUSPICIOUS_CONSOLE_ERROR'
  | 'UNSAVED_CHANGES_NAVIGATION'
  | 'DEVTOOLS_ACCESS_ATTEMPT'
  | 'CONTACT_FORM_SUBMITTED'
  | 'NEWSLETTER_SUBSCRIBED'
  | 'NEWSLETTER_RATE_LIMIT_EXCEEDED'
  | 'NEWSLETTER_VALIDATION_FAILED'
  | 'NEWSLETTER_SUSPICIOUS_CONTENT_DETECTED'
  | 'NEWSLETTER_DUPLICATE_SUBSCRIPTION'
  | 'CONTACT_FORM_ERROR'
  | 'NEWSLETTER_ERROR';

// Security event interface
export interface SecurityEvent {
  type: SecurityEventType;
  timestamp: string;
  ip?: string;
  userAgent?: string;
  details: Record<string, unknown>;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
