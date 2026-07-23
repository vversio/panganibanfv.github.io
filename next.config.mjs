/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/panganibanfv.github.io',
  images: {
    unoptimized: true, // Required for static export (GitHub Pages)
  },
};

export default nextConfig;
