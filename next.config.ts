import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Optimizaciones de performance
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,

  // Compilación moderna (no legacy polyfills)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },

  // Optimización de fuentes
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
