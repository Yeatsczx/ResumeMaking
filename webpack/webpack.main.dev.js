const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

function isDev() {
  return process.env.NODE_ENV === 'development'; // Node的全局 process 对象
}

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'cheap-module-source-map',
  mode: isDev() ? 'development' : 'production',
};
module.exports = webpackMerge.merge(baseConfig, mainConfig);
