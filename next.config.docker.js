/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Standalone for Docker deployment
  images: {
    domains: [],
  },
}

module.exports = nextConfig
