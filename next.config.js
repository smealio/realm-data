/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = withPlugins([
  [optimizedImages,{

  }],
  {
  reactStrictMode: true,
  assetPrefix: '/realm-data/',
  eslint: {
    ignoreDuringBuilds: true,
  }
}
])

module.exports = nextConfig
