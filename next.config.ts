import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "scontent.cdninstagram.com" },
      { hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
