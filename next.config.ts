import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS to ./out, which the
// GitHub workflow uploads to Bluehost over FTP. Redirects can't run in a static
// export, so they live in public/.htaccess instead.
const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  output: "export",
  trailingSlash: true, // /about -> about/index.html, so Apache serves it without rewrites
  images: {
    unoptimized: true, // no image optimiser on a static host
  },
};

export default nextConfig;
