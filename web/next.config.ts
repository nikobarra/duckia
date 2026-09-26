import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ebook", destination: "/libro", permanent: true },
      { source: "/ebook/:path*", destination: "/libro", permanent: true },
    ];
  },
};

export default nextConfig;
