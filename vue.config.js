module.exports = {
  lintOnSave: false,

  devServer: {
    host: 'p22'
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/2022-vue/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
