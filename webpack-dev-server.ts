import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './webpack.config';

const compiler = webpack(config as webpack.Configuration);
const devServerOptions: WebpackDevServer.Configuration = {
    compress: true,
    port: 9000,
    hot: true
};

const server = new WebpackDevServer(compiler, devServerOptions);
server.listen(9000);
