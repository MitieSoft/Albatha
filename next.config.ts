import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable source map obfuscation in production
  productionBrowserSourceMaps: false,
  
  // Webpack configuration for code protection
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Obfuscate JavaScript in production
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        ...config.optimization.minimizer,
        // Add terser plugin for better obfuscation
        new (require('terser-webpack-plugin'))({
          terserOptions: {
            mangle: {
              reserved: ['logSecurityEvent', 'validateCSRFToken']
            },
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log', 'console.info', 'console.debug']
            }
          }
        })
      ];
    }
    return config;
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-src 'self' https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      }
    ];
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  serverExternalPackages: ['bcryptjs', 'jsonwebtoken']
};

export default nextConfig;
