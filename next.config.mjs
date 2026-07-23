/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/panganibanfv.github.io' : '',
  images: {
    unoptimized: true, // Required for static export (GitHub Pages)
  },
};

export default nextConfig;
