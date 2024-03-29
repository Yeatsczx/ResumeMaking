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
  cache: {
    type: 'filesystem',
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
  devServer: {
    compress: true, // 启用压缩
    host: 'localhost',
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'], // 在html文件中引入entry入口中的index中的内容，如果不设置会默认将所有chunks引入，在多入口时会出现问题
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../app/renderer/windowPages/setting/index.html'),
    //   filename: path.resolve(__dirname, '../dist/setting.html'),
    //   chunks: ['setting'],
    // }),
  ],
  mode: 'development',
};
module.exports = webpackMerge.merge(baseConfig, devConfig);
