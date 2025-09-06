/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    // loader: "default",
    // path: "/",
    domains: ["cdn.sanity.io"],
    unoptimized: false,  
  },
};

export default nextConfig;
