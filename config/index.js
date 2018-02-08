module.exports = {
    dev: {
        env: 'development',
        publicPath: '/',
        host: 'localhost',
        port: '8080',
        assetsSubDirectory: 'static',
        devtoolType: 'cheap-module-eval-source-map',
        proxyTable: {}
    },
    build: {
        env: 'production',
        publicPath: './',
        assetsPath: 'static',
        assetsSubDirectory: 'static',
        devtoolType: 'source-map',
        productionGzip: true,
        productionGzipExtensions: ['js', 'css']
    }
}