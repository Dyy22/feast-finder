import path from 'path';
import common from './webpack.common.js';
import {merge} from 'webpack-merge';
import {fileURLToPath} from 'url';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
