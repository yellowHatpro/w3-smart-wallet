/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**",
    }]
  },
  reactStrictMode: true,
  basePath: "",
};

module.exports = nextConfig;
