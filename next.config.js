/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['components', 'pages'],
  },
  images: {
    domains: [
      'drive.google.com',
      'icpc.uclaacm.com',
      'i.ibb.co',
      'cdn.discordapp.com',
    ],
  },
};

module.exports = nextConfig;
