/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Default to static export
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: isProd ? '/uxterms' : undefined,
  assetPrefix: isProd ? '/uxterms' : undefined,
}

module.exports = nextConfig
