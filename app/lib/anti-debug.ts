// Anti-debugging and inspection protection
export function initAntiDebugProtection() {
  if (typeof window === 'undefined') return;

  // Detect DevTools opening
  const devtools = {
    open: false,
    orientation: null as string | null
  };

  const threshold = 160;

  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        console.clear();
        console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cThis is a browser feature intended for developers.', 'color: red; font-size: 16px;');
        
        // Log security event
        if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).logSecurityEvent) {
          ((window as unknown as Record<string, unknown>).logSecurityEvent as (event: string, data: Record<string, unknown>) => void)('DEVTOOLS_ACCESS_ATTEMPT', {
            timestamp: Date.now(),
            userAgent: navigator.userAgent
          });
        }
      }
    } else {
      devtools.open = false;
    }
  }, 500);

  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 's')
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Console warning
  console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
  console.log('%cThis is a browser feature intended for developers.', 'color: red; font-size: 16px;');
  console.log('%cIf someone told you to copy-paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your account.', 'color: red; font-size: 16px;');
}

// Source code protection
export function protectSourceCode() {
  if (typeof window === 'undefined') return;

  // Disable view source
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
  });

  // Disable save page
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
  });

  // Disable print
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
      return false;
    }
  });
}

// Dynamic code execution to make static analysis harder
export function createDynamicValidator() {
  const randomFunctionName = 'validate' + Math.random().toString(36).substring(7);
  const randomVariableName = 'data' + Math.random().toString(36).substring(7);
  
  const validatorCode = `
    function ${randomFunctionName}(${randomVariableName}) {
      return ${randomVariableName} && 
             typeof ${randomVariableName} === 'object' && 
             ${randomVariableName}.csrfToken && 
             ${randomVariableName}.csrfToken.length === 64;
    }
  `;
  
  return validatorCode;
}
