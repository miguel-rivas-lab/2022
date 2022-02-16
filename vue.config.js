module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'p22'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/2022-vue/' : '/'
}