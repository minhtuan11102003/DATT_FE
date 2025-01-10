const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app:any) {
  app.use(
    '/api/products',
    createProxyMiddleware({
      target: process.env.NEXT_PUBLIC_API_URL,
      changeOrigin: true,
      pathRewrite: { '^/api/products': '/product' },
    })
  );
};
