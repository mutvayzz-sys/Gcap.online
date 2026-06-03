import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5e9r2bdnqbomlbee.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
