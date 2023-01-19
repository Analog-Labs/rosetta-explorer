/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  publicRuntimeConfig: {
    NETWORKS: process.env.NEXT_PUBLIC_NETWORKS,
    INDEXERS: process.env.NEXT_PUBLIC_INDEXERS
  },
}
