const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'https://localhost:8443',
            changeOrigin: true,
        })
    );
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://localhost:8180',
            changeOrigin: true,
        })
    );
};
