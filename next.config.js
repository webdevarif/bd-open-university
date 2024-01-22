/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'opentv.nvs.la',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'mapproject.nvs.la',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
