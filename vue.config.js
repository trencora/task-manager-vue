const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://spring',
        changeOrigin: true,
        secure: false
      },
    },
  },
  transpileDependencies: true
})
