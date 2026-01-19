import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
