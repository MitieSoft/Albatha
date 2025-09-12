import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";

export const metadata: Metadata = {
  title: "Albatha  Real Estate - Premium Properties in Dubai",
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
        <LanguageProvider>
          <AccessibilityProvider>
            {children}
          </AccessibilityProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
