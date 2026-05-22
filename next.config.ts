import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
