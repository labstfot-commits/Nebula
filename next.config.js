/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: '/Nebula',

  // Performance optimizations
  swcMinify: true,
  compress: true,

  // Image optimization - disabled for static export
  images: {
    unoptimized: true,
  },

  // Bundle analyzer (optional, install @next/bundle-analyzer if needed)
  // experimental: {
  //   bundleAnalyzer: {
  //     enabled: process.env.ANALYZE === 'true'
  //   }
  // },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all'
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    }

    // SVG optimization
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig


