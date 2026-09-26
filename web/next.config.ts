import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Previews already cached by WhatsApp and other apps point to the old image path.
      { source: "/ebook/assets/og-libro.jpg", destination: "/libro/og-libro.jpg", permanent: true },
      { source: "/ebook", destination: "/libro", permanent: true },
      { source: "/ebook/:path*", destination: "/libro", permanent: true },
    ];
  },
};

export default nextConfig;
