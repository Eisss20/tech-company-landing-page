/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: false, // ปิดการทำงานของ Fast Refresh
  },
};

export default nextConfig;
