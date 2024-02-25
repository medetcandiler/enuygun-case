/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: false
};


export default nextConfig;
