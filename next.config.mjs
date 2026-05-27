/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "websiteadmin.unityinteriors.com",

      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "websiteadmin.unityinteriors.com",
  //     },
  //   ],
  // },
  // output: "export",
  // async redirects() {
  //   return [
  //     {
  //       source: "/services",
  //       destination: "/services/interior-design", // choose default
  //       permanent: true, // 301 redirect (SEO friendly)
  //     },
  //   ];
  // },


};

export default nextConfig;
