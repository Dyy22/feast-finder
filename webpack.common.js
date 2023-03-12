import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import path from 'path';
import CONFIG from './src/scripts/global/config.js';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: new RegExp(CONFIG.BASE_URL),
          handler: 'NetworkFirst',
          options: {
            cacheName: CONFIG.API_CACHE_NAME,
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 24 * 60 * 60,
            },
            cacheableResponse: {statuses: [0, 200]},
          },
        },
      ],
    }),
  ],
};
