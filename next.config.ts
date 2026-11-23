import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/individuals", destination: "/candidates", permanent: true },
      { source: "/features", destination: "/job-board", permanent: true },
    ];
  },
};

export default nextConfig;
