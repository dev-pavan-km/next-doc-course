import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerPlugin = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzerPlugin(nextConfig);
