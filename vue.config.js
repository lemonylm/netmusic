module.exports = {
  lintOnSave: false,

  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": ""
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        pages: "@/pages",
        store: "@/store",
      },
    },
  },
};