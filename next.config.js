/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
