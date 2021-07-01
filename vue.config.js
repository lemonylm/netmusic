module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      port: 8080,
      open: true,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          pathRewrite: { "^/api": "" },
        },
      },
    },
    resolve: {
      alias: {
        components: "@/components",
        pages: "@/pages",
        store: "@/store",
      },
    },
  },
};
