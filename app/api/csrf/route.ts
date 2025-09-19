import { NextRequest, NextResponse } from 'next/server';
import { getSecurityHeaders, getSessionIdFromRequest } from '../../lib/security';
import { csrfMiddleware, getCSRFTokenForFrontend } from '../../lib/csrf-middleware';

export async function GET(request: NextRequest) {
  try {
    // Apply CSRF middleware to get/create session and token
    const { sessionId, csrfToken, isNewSession } = csrfMiddleware(request);
    
    // Create response with session cookie if new session
    const response = NextResponse.json(
      { 
        csrfToken,
        sessionId: isNewSession ? sessionId : undefined, // Only return sessionId for new sessions
        message: isNewSession ? 'New session created' : 'Token refreshed'
      },
      { 
        status: 200, 
        headers: {
          ...getSecurityHeaders(),
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );
    
    // Set session cookie if new session
    if (isNewSession) {
      response.cookies.set('session-id', sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/'
      });
    }
    
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

// Only allow GET requests
export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: getSecurityHeaders() }
  );
}
