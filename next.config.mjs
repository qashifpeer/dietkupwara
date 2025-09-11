/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    // loader: "default",
    // path: "/",
    domains: [
      "cdn.sanity.io",
      "maps.googleapis.com"
    ],
    unoptimized: false,  
  },
};

export default nextConfig;
