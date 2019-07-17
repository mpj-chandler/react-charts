"use strict";
exports.__esModule = true;
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config");
var compiler = webpack(config);
var devServerOptions = {
    compress: true,
    port: 9000,
    hot: true
};
var server = new WebpackDevServer(compiler, devServerOptions);
server.listen(9000);
