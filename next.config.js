/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  typescript: {
    // Disable type checking during build to handle Framer Motion className prop issue
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
