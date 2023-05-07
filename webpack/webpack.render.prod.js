const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
    // setting: path.resolve(__dirname, '../app/renderer/windowPages/setting/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(jpg|png|jpeg|gif|svg)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
              },
            },
            generator: {
              filename: 'images/[name]_[hash].[ext]',
            },
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]__[hash:base64:5]',
                  },
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
        ],
      },
    ],
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'], // 在html文件中引入entry入口中的index中的内容，如果不设置会默认将所有chunks引入，在多入口时会出现问题
    }),
  ],
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: 'all', // 对所有模块都进行分割
    },
  },
  mode: 'production',
};
module.exports = webpackMerge.merge(baseConfig, devConfig);
