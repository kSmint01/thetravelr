import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // generates static out/ for S3 / Amplify
  trailingSlash: true, // required for S3 static hosting
  images: {
    unoptimized: true, // static export can't use Next.js image server; Unsplash CDN handles quality
  },
};

export default nextConfig;
