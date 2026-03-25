import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ required for static export — Next.js image optimization needs a server
  },
};

export default nextConfig;