/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['components', 'pages'],
  },
  images: {
    domains: ['drive.google.com', 'icpc.uclaacm.com', 'i.ibb.co'],
  },
};

module.exports = nextConfig;
