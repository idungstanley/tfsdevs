import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com' 
      },
      {
        protocol: 'https',
        hostname: 'tfsdstorageaccount.blob.core.windows.net' 
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com' 
      },
      {
        protocol: 'https',
        hostname: 'site.aace.org' 
      },
    ]
  }
};

export default nextConfig;
