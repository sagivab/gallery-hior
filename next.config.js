/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextBundleAnalyzer = require("@next/bundle-analyzer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com",
    ],
    minimumCacheTTL: 60,
  },
};

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
