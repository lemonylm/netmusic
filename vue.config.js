<<<<<<< HEAD
module.exports = {
  lintOnSave: false,

  devServer: {
    // port: 8080,
    // open: true,
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
=======

    module.exports = {
      lintOnSave: false,
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
        configureWebpack: {
          // provide the app's title in webpack's name field, so that
          // it can be accessed in index.html to inject the correct title.
          resolve: {
            alias: {
              components: "@/components",
            pages: "@/pages",
            store: "@/store",
            }
          }
        },
    };
    
>>>>>>> yunlixing
