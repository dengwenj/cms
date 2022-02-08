module.exports = {
  lintOnSave: false,
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
