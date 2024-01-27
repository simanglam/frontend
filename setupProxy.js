import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://si.goodmeet.asia/api',
          changeOrigin: true,
        })
      );
}

module.exports = function(app) {
    app.use(
        '/socket.io',
        createProxyMiddleware({
          target: 'https://si.goodmeet.asia/socket.io',
          changeOrigin: true,
        })
      );
}