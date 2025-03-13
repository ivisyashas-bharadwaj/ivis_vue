const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://chat.ivislabs.in/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        onProxyReq: function(proxyReq) {
          // Remove double slashes in the path
          proxyReq.path = proxyReq.path.replace('//', '/');
        },
        onError: (err) => {
          console.log('Proxy error:', err);
        },
        secure: false // Add this if you're having SSL certificate issues
      }
    }
  }
})
