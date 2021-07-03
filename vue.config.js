module.exports = {
  lintOnSave: false,

  devServer: {
<<<<<<< HEAD
    port: 8081,
=======
    port: 8080,
>>>>>>> 1271a81f0f3f0ce9a430ed5c34c17d8d86577a47
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
