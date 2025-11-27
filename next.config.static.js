/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/uxterms', // Required for GitHub Pages subpath
  trailingSlash: true,
}

module.exports = nextConfig
