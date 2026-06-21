import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      { source: '/aksh', destination: '/routely', permanent: true },
      { source: '/aksh/demo', destination: '/routely/demo', permanent: true },
      { source: '/aksh/press', destination: '/routely', permanent: false },
    ];
  },
};

export default nextConfig;
