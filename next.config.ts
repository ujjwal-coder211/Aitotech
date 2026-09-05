import type { NextConfig } from 'next';

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
      { source: '/aksh', destination: '/routely', permanent: true },
      { source: '/aksh/demo', destination: '/routely/demo', permanent: true },
      { source: '/aksh/press', destination: '/routely', permanent: false },
    ];
  },
};

export default nextConfig;
