'use strict';

const path = require('path');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const { BannerPlugin } = require('webpack');
const { version, license, author } = require('./package');

const banner = `Conjugador.js v${version} | ${license} (c) 2016-${(new Date()).getFullYear()} by ${author}`;

module.exports = {
  entry: {
    'conjugador': './src/index.js',
    'conjugador.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'conjugar',
    libraryTarget: 'umd',

    // Para resolver um problema com o Webpack 4 (webpack#6522).
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new UglifyjsPlugin({
      include: /\.min\.js$/,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new BannerPlugin(banner)
  ]
};
