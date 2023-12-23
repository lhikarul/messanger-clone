/** @type {import('next').NextConfig} */
const nextConfig = {
  swcPlugins: [["next-super-json-plugin", {}]],
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lhs.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
