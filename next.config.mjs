/** @type {import('next').NextConfig} */
const base = process.env.NEXT_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath: base,
  images: { unoptimized: true },
  env: {
    BASE_PATH: base,
  },
};

export default nextConfig;
