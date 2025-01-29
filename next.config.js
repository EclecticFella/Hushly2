/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/Hushly2", // Matches your repository name
  images: {
    unoptimized: true, // Disables Next.js image optimization for compatibility
  },
  trailingSlash: true, // Ensures proper linking
};

module.exports = nextConfig;
