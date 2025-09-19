import { NextRequest } from 'next/server';
import { getSessionIdFromRequest, getCSRFTokenFromBody, validateCSRFTokenWithSession } from './security';
import { createSession, refreshCSRFToken, getSession } from './session';

// CSRF middleware for API routes
export function csrfMiddleware(request: NextRequest) {
  const sessionId = getSessionIdFromRequest(request);
  
  // If no session exists, create one
  if (!sessionId) {
    const { sessionId: newSessionId, csrfToken } = createSession();
    return { sessionId: newSessionId, csrfToken, isNewSession: true };
  }
  
  // Refresh CSRF token for existing session
  const newCsrfToken = refreshCSRFToken(sessionId);
  if (newCsrfToken) {
    return { sessionId, csrfToken: newCsrfToken, isNewSession: false };
  }
  
  // Session expired, create new one
  const { sessionId: newSessionId, csrfToken } = createSession();
  return { sessionId: newSessionId, csrfToken, isNewSession: true };
}

// Validate CSRF token for API requests
export async function validateCSRFRequest(request: NextRequest): Promise<{ valid: boolean; error?: string }> {
  const sessionId = getSessionIdFromRequest(request);
  
  if (!sessionId) {
    return { valid: false, error: 'No session found' };
  }
  
  // For GET requests, just check if session exists
  if (request.method === 'GET') {
    return { valid: true };
  }
  
  // For POST/PUT/DELETE requests, validate CSRF token
  try {
    const body = await request.json();
    const csrfToken = getCSRFTokenFromBody(body);
    
    if (!csrfToken) {
      return { valid: false, error: 'CSRF token missing from request body' };
    }
    
    if (!validateCSRFTokenWithSession(sessionId, csrfToken)) {
      return { valid: false, error: 'Invalid CSRF token' };
    }
    
    return { valid: true };
  } catch {
    return { valid: false, error: 'Invalid request body' };
  }
}

// Helper to get CSRF token for frontend
export function getCSRFTokenForFrontend(sessionId: string): string | null {
  const session = getSession(sessionId);
  return session?.csrfToken || null;
}
