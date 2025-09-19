// In-memory rate limiter for development and Edge Runtime compatibility
class MemoryRateLimiter {
  private store: Map<string, { count: number; resetTime: number }> = new Map();
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 15 * 60 * 1000, maxRequests: number = 100) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  async isAllowed(key: string): Promise<boolean> {
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

  async cleanup(): Promise<void> {
    const now = Date.now();
    for (const [key, value] of this.store.entries()) {
      if (now > value.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// Factory function to create rate limiter (always uses memory for Edge Runtime compatibility)
export function createRateLimiter(windowMs: number = 15 * 60 * 1000, maxRequests: number = 100) {
  return new MemoryRateLimiter(windowMs, maxRequests);
}

// Rate limiter instances for different endpoints
export const contactFormRateLimiter = createRateLimiter(15 * 60 * 1000, 5); // 5 requests per 15 minutes
export const newsletterRateLimiter = createRateLimiter(15 * 60 * 1000, 3); // 3 requests per 15 minutes
export const generalRateLimiter = createRateLimiter(15 * 60 * 1000, 100); // 100 requests per 15 minutes

// Cleanup function to be called periodically
export async function cleanupRateLimiters() {
  await Promise.all([
    contactFormRateLimiter.cleanup(),
    newsletterRateLimiter.cleanup(),
    generalRateLimiter.cleanup()
  ]);
}
