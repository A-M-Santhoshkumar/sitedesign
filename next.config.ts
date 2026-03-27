import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Removed output: "export" — Vercel handles this natively
  images: {
    // unoptimized: true  ← no longer needed, Vercel optimizes images
  },
};

export default nextConfig;