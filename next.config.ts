import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "final-project-server-peach-mhf.vercel.app",
      },
    ],
  },
};

export default nextConfig;
