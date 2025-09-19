import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import SecurityMonitor from "./components/SecurityMonitor";

export const metadata: Metadata = {
  title: "Albatha  Real Estate - We Build Properties You Want To Call Home",
  description: "Discover premium real estate developments by Albatha  in Dubai. From luxury apartments to commercial spaces, experience world-class living and investment opportunities.",
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize anti-debug protection immediately
              (function() {
                // Define functions inline
                function initAntiDebugProtection() {
                  if (typeof window === 'undefined') return;

                  // Detect DevTools opening
                  const devtools = {
                    open: false,
                    orientation: null
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
                        if (typeof window !== 'undefined' && window.logSecurityEvent) {
                          window.logSecurityEvent('DEVTOOLS_ACCESS_ATTEMPT', {
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
                  console.log('%cIf someone told you to copy-paste something here to enable a feature or "hack" someone\\'s account, it is a scam and will give them access to your account.', 'color: red; font-size: 16px;');
                }

                function protectSourceCode() {
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
                
                // Initialize protection
                initAntiDebugProtection();
                protectSourceCode();
                
                // Additional protection
                window.addEventListener('load', function() {
                  // Disable common developer shortcuts
                  document.addEventListener('keydown', function(e) {
                    if (e.key === 'F12' || 
                        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                        (e.ctrlKey && e.key === 'u')) {
                      e.preventDefault();
                      return false;
                    }
                  });
                  
                  // Disable right-click
                  document.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    return false;
                  });
                });
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <SecurityMonitor>
          <LanguageProvider>
            <AccessibilityProvider>
              {children}
            </AccessibilityProvider>
          </LanguageProvider>
        </SecurityMonitor>
      </body>
    </html>
  );
}
