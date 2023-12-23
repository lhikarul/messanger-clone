/** @type {import('next').NextConfig} */
const nextConfig = {
  swcPlugins: [["next-super-json-plugin", {}]],
  images: {
    domains: [
      "res.cloundinary.com",
      "avatars.githubusercontent.com",
      "lhs.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
