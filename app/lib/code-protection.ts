// Additional code protection measures
export function addCodeProtection() {
  if (typeof window === 'undefined') return;

  // Disable common developer tools
  const devtools = {
    open: false,
    orientation: null as string | null
  };

  const threshold = 160;

  // Check for DevTools
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        // Clear console and show warning
        console.clear();
        console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cThis is a browser feature intended for developers.', 'color: red; font-size: 16px;');
        
        // Redirect or show warning
        document.body.innerHTML = `
          <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            z-index: 9999;
          ">
            <h1 style="color: red; font-size: 48px; margin-bottom: 20px;">ACCESS DENIED</h1>
            <p style="font-size: 24px; text-align: center; max-width: 600px;">
              Developer tools are not allowed on this website.
              Please close the developer tools to continue.
            </p>
          </div>
        `;
      }
    } else {
      devtools.open = false;
    }
  }, 500);

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable drag
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable copy
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable cut
  document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable paste
  document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable print
  window.addEventListener('beforeprint', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable save
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
  });
}

// Obfuscate sensitive data
export function obfuscateData(data: unknown): unknown {
  if (typeof data === 'string') {
    return btoa(data).split('').reverse().join('');
  }
  if (typeof data === 'object' && data !== null) {
    const obfuscated: Record<string, unknown> = {};
    for (const key in data as Record<string, unknown>) {
      obfuscated[btoa(key)] = obfuscateData((data as Record<string, unknown>)[key]);
    }
    return obfuscated;
  }
  return data;
}

// Deobfuscate data
export function deobfuscateData(data: unknown): unknown {
  if (typeof data === 'string') {
    return atob(data.split('').reverse().join(''));
  }
  if (typeof data === 'object' && data !== null) {
    const deobfuscated: Record<string, unknown> = {};
    for (const key in data as Record<string, unknown>) {
      deobfuscated[atob(key)] = deobfuscateData((data as Record<string, unknown>)[key]);
    }
    return deobfuscated;
  }
  return data;
}
