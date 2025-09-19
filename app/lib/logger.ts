// Simple logger that works in both server and client environments
class SimpleLogger {
  private isServer: boolean;

  constructor() {
    this.isServer = typeof window === 'undefined';
  }

  private formatMessage(level: string, message: string, meta?: Record<string, unknown>): string {
    const timestamp = new Date().toISOString();
    const metaStr = meta ? ` ${JSON.stringify(meta)}` : '';
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${metaStr}`;
  }

  private log(level: string, message: string, meta?: Record<string, unknown>): void {
    const formattedMessage = this.formatMessage(level, message, meta);
    
    if (this.isServer) {
      // Server-side logging
      console.log(formattedMessage);
    } else {
      // Client-side logging
      console.log(formattedMessage);
    }
  }

  error(message: string, meta?: Record<string, unknown>): void {
    this.log('error', message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this.log('warn', message, meta);
  }

  info(message: string, meta?: Record<string, unknown>): void {
    this.log('info', message, meta);
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    this.log('debug', message, meta);
  }

  security(message: string, meta?: Record<string, unknown>): void {
    this.log('security', message, meta);
  }

  http(message: string, meta?: Record<string, unknown>): void {
    this.log('http', message, meta);
  }
}

// Create logger instance
const logger = new SimpleLogger();

// Security logging function
export function logSecurityEvent(event: string, details: Record<string, unknown>, ip?: string) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    event,
    ip: ip || 'unknown',
    details,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
    severity: getSeverityLevel(event)
  };
  
  logger.security(`[SECURITY] ${JSON.stringify(logEntry)}`);
  
  // In production, send to security monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to your security monitoring service
    // Example: sendToSecurityService(logEntry);
  }
}

// Determine severity level based on event type
function getSeverityLevel(event: string): 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' {
  const criticalEvents = [
    'XSS_ATTEMPT',
    'SQL_INJECTION_ATTEMPT',
    'COMMAND_INJECTION_ATTEMPT',
    'DIRECTORY_TRAVERSAL_ATTEMPT'
  ];
  
  const highEvents = [
    'RATE_LIMIT_EXCEEDED',
    'SUSPICIOUS_CONTENT_DETECTED',
    'RAPID_CLICKS_DETECTED',
    'SUSPICIOUS_FORM_SUBMISSION'
  ];
  
  const mediumEvents = [
    'VALIDATION_FAILED',
    'SUSPICIOUS_CONSOLE_ERROR',
    'DEVTOOLS_ACCESS_ATTEMPT'
  ];
  
  if (criticalEvents.includes(event)) return 'CRITICAL';
  if (highEvents.includes(event)) return 'HIGH';
  if (mediumEvents.includes(event)) return 'MEDIUM';
  return 'LOW';
}

// General logging functions
export const logError = (message: string, error?: Error) => {
  const errorMeta = error ? {
    name: error.name,
    message: error.message,
    stack: error.stack,
    ...(error.cause ? { cause: error.cause } : {})
  } : undefined;
  logger.error(message, errorMeta);
};

export const logWarn = (message: string, meta?: Record<string, unknown>) => {
  logger.warn(message, meta);
};

export const logInfo = (message: string, meta?: Record<string, unknown>) => {
  logger.info(message, meta);
};

export const logDebug = (message: string, meta?: Record<string, unknown>) => {
  logger.debug(message, meta);
};

export const logHttp = (message: string, meta?: Record<string, unknown>) => {
  logger.http(message, meta);
};

export default logger;
