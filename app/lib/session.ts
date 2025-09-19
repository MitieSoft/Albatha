// Simple in-memory session store for CSRF tokens
// In production, this should be replaced with Redis or database storage
class SessionStore {
  private sessions: Map<string, { csrfToken: string; expires: number }> = new Map();
  private readonly SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  generateSessionId(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  createSession(): { sessionId: string; csrfToken: string } {
    const sessionId = this.generateSessionId();
    const csrfToken = this.generateCSRFToken();
    const expires = Date.now() + this.SESSION_DURATION;

    this.sessions.set(sessionId, { csrfToken, expires });
    return { sessionId, csrfToken };
  }

  getSession(sessionId: string): { csrfToken: string } | null {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    if (Date.now() > session.expires) {
      this.sessions.delete(sessionId);
      return null;
    }

    return { csrfToken: session.csrfToken };
  }

  validateCSRFToken(sessionId: string, token: string): boolean {
    const session = this.getSession(sessionId);
    if (!session) return false;
    return session.csrfToken === token;
  }

  refreshSession(sessionId: string): string | null {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    if (Date.now() > session.expires) {
      this.sessions.delete(sessionId);
      return null;
    }

    // Generate new CSRF token for the session
    const newCsrfToken = this.generateCSRFToken();
    session.csrfToken = newCsrfToken;
    session.expires = Date.now() + this.SESSION_DURATION;

    return newCsrfToken;
  }

  cleanup(): void {
    const now = Date.now();
    for (const [sessionId, session] of this.sessions.entries()) {
      if (now > session.expires) {
        this.sessions.delete(sessionId);
      }
    }
  }
}

// Global session store instance
export const sessionStore = new SessionStore();

// Cleanup expired sessions every hour
setInterval(() => {
  sessionStore.cleanup();
}, 60 * 60 * 1000);

// Session management functions
export function createSession(): { sessionId: string; csrfToken: string } {
  return sessionStore.createSession();
}

export function getSession(sessionId: string): { csrfToken: string } | null {
  return sessionStore.getSession(sessionId);
}

export function validateCSRFToken(sessionId: string, token: string): boolean {
  return sessionStore.validateCSRFToken(sessionId, token);
}

export function refreshCSRFToken(sessionId: string): string | null {
  return sessionStore.refreshSession(sessionId);
}
