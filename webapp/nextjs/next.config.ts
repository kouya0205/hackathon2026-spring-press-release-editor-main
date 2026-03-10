import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  allowedDevOrigins: [
    "http://57.181.32.189:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://prtimes.pullup.run",
  ],
  async rewrites() {
    return [
      {
        source: "/api-backend/:path*",
        destination: "http://127.0.0.1:8080/:path*",
      },
    ];
  },
};

export default nextConfig;