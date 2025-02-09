/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  reactStrictMode: true,
  distDir : "dist",
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/Electro-Web/' : '',
  basePath: isProd ? '/Electro-Web' : '',
  output: 'export'

};

export default nextConfig;
