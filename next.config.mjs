
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/next-test",
  assetPrefix: "/next-test/",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export default nextConfig;


