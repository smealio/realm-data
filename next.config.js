/** @type {import('next').NextConfig} */
const withNextOptimizedImages = require('next-optimized-images');

const nextConfig = withNextOptimizedImages([{
  reactStrictMode: true,
  assetPrefix: '/realm-data/',
  eslint: {
    ignoreDuringBuilds: true,
  }
}
])

module.exports = nextConfig
