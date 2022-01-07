const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/content-api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            secure: false
        })
    );
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://localhost:8180',
            changeOrigin: false,
            secure: false
        })
    );
};
