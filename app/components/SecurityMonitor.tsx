'use client';
import { useEffect } from 'react';
import { logSecurityEvent } from '../lib/security';

interface SecurityMonitorProps {
  children: React.ReactNode;
}

export default function SecurityMonitor({ children }: SecurityMonitorProps) {
  useEffect(() => {
    // Monitor for suspicious activities
    const handleSecurityEvents = () => {
      // Monitor for rapid clicks (potential bot activity)
      let clickCount = 0;
      let lastClickTime = 0;
      
      const handleClick = (e: MouseEvent) => {
        const now = Date.now();
        if (now - lastClickTime < 100) { // Less than 100ms between clicks
          clickCount++;
          if (clickCount > 10) {
            logSecurityEvent('RAPID_CLICKS_DETECTED', {
              clickCount,
              target: (e.target as Element)?.tagName || 'unknown',
              timestamp: now
            });
          }
        } else {
          clickCount = 1;
        }
        lastClickTime = now;
      };

      // Monitor for suspicious form submissions
      const handleSubmit = (e: SubmitEvent) => {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Check for suspicious patterns in form data
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
          logSecurityEvent('SUSPICIOUS_FORM_SUBMISSION', {
            formAction: form.action,
            formMethod: form.method,
            data: data,
            timestamp: Date.now()
          });
        }
      };

      // Monitor for console errors (potential XSS attempts)
      const handleError = (e: ErrorEvent) => {
        if (e.message && (
          e.message.includes('script') ||
          e.message.includes('eval') ||
          e.message.includes('Function') ||
          e.message.includes('setTimeout') ||
          e.message.includes('setInterval')
        )) {
          logSecurityEvent('SUSPICIOUS_CONSOLE_ERROR', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno,
            timestamp: Date.now()
          });
        }
      };

      // Monitor for suspicious navigation
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        // Check if user is trying to navigate away with unsaved changes
        const forms = document.querySelectorAll('form');
        let hasUnsavedChanges = false;
        
        forms.forEach(form => {
          const inputs = form.querySelectorAll('input, textarea, select');
          inputs.forEach(input => {
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement) {
              if (input.value && input.value.trim() !== '') {
                hasUnsavedChanges = true;
              }
            }
          });
        });

        if (hasUnsavedChanges) {
          logSecurityEvent('UNSAVED_CHANGES_NAVIGATION', {
            timestamp: Date.now(),
            url: window.location.href
          });
        }
      };

      // Monitor for suspicious keyboard events
      const handleKeyDown = (e: KeyboardEvent) => {
        // Monitor for Ctrl+Shift+I (DevTools), F12, etc.
        if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
            e.key === 'F12' ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C')) {
          logSecurityEvent('DEVTOOLS_ACCESS_ATTEMPT', {
            key: e.key,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            timestamp: Date.now()
          });
        }
      };

      // Add event listeners
      document.addEventListener('click', handleClick);
      document.addEventListener('submit', handleSubmit);
      window.addEventListener('error', handleError);
      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('keydown', handleKeyDown);

      // Cleanup function
      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('submit', handleSubmit);
        window.removeEventListener('error', handleError);
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    const cleanup = handleSecurityEvents();

    // Log page load
    logSecurityEvent('PAGE_LOAD', {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now()
    });

    return cleanup;
  }, []);

  return <>{children}</>;
}
