const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/test_server",
    createProxyMiddleware({
      target: "http://backend:2888",
      changeOrigin: true,
    })
  );
};
