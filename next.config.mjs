/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/NewGolestan-React" : "",
  images: { unoptimized: true },
  env: {
    BASE_PATH: isProd ? "/NewGolestan-React" : "",
  },
};

export default nextConfig;
