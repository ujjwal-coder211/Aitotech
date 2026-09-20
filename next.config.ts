import type { NextConfig } from 'next';

const SALESCONNECT_API = 'https://outreachapp-production-b5e8.up.railway.app';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          /**
           * Deliberately narrow: these directives harden clickjacking, base-tag
           * and form-exfiltration without constraining scripts or styles, which
           * would need a nonce pass across every route first.
           */
          {
            key: 'Content-Security-Policy',
            value: [
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // SalesConnect's policies are served by the app itself, so they always
      // describe what the live app does. These are the addresses to give Meta,
      // Google Play and the App Store.
      { source: '/salesconnect/privacy', destination: `${SALESCONNECT_API}/legal/privacy`, permanent: false },
      { source: '/salesconnect/terms', destination: `${SALESCONNECT_API}/legal/terms`, permanent: false },
      { source: '/salesconnect/data-deletion', destination: `${SALESCONNECT_API}/legal/data-deletion`, permanent: false },
      // The old draft policy said the app was still in development.
      { source: '/products/outreach/privacy', destination: `${SALESCONNECT_API}/legal/privacy`, permanent: false },
    ];
  },
};

export default nextConfig;
