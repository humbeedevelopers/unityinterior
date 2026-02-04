/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/your-repo-name",
  assetPrefix: "/your-repo-name/",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },

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
