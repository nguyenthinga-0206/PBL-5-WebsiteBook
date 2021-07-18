module.exports = {
  webpack5: false,
  env: {
    HOST: process.env.HOST,
    CMS: process.env.CMS,
  },
  async rewrites() {
    const configs = [
      {
        source: "/upload/:type/:size/:name*",
        destination: process.env.CMS + "/upload/:type/:size/:name*",
      },
      {
        source: "/upload/:type/:name*",
        destination: process.env.CMS + "/upload/:type/:name*",
      },
      {
        source: "/admin/:path*",
        destination: process.env.CMS + "/admin/:path*",
      },
      {
        source: "/__webpack_hmr",
        destination: process.env.CMS + "/__webpack_hmr",
      },
    ];
    console.log(configs);
    return configs;
  },
};
