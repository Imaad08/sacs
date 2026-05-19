import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
