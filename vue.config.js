module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changOrigin: true
      }

    }
  },
  configureWebpack: {
    // 给路径取别名
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        router: '@/router',
        pages: '@/pages',
        store: '@/store',
        api: '@/api',
        utils: '@/utils',
      },
    },
  },
}
