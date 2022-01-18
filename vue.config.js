module.exports = {
  devServer: {
    host: 'mr'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/2022-vue/' : '/'
}