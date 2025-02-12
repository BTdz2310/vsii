import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnphoto.dantri.com.vn',
      },
    ],
  },
};

export default nextConfig;
