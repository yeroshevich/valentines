import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental:{
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true,
        webpackMemoryOptimizations: true,
        nextScriptWorkers: true,
    },
};

export default nextConfig;
