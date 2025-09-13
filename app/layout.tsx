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
