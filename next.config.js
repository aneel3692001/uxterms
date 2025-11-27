/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Default to static export
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: '/uxterms',
  assetPrefix: '/uxterms',
}

module.exports = nextConfig
