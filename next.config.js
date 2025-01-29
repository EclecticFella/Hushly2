
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  basePath: "/Hushly", // Ensure this matches your repo name
  images: {
    unoptimized: true, // Disables Next.js image optimization for GitHub Pages compatibility
  },
  trailingSlash: true, // Ensures proper linking on GitHub Pages
};

module.exports = nextConfig;
