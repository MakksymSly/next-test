
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/todo-app-veel",
  assetPrefix: "/todo-app-veel/",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY || "https://jsonplaceholder.typicode.com/todos",
  },
};

export default nextConfig;


