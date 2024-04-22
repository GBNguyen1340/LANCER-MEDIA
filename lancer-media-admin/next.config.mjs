/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lancermedia.vn',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
