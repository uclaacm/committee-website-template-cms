/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['components', 'pages'],
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'drive.google.com',
      'teachla.uclaacm.com'
    ]
  }
};

module.exports = nextConfig;
