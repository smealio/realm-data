/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/realm-data/',
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
