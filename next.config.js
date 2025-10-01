/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ✅ новый способ для GitHub Pages
  basePath: '/Nebula', // ✅ нужно для Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


