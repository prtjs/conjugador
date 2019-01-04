"use strict";

const path = require("path");
const {UglifyJsPlugin} = require("webpack").optimize;
const {BannerPlugin} = require("webpack");
const join = array => array.join("\n");
const year = (new Date()).getFullYear();
const pkg = require("./package");
const version = pkg.version;
const license = pkg.license;
const author = pkg.author;

module.exports = {
  entry: {
    "conjugador": "./src/index.js",
    "conjugador.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "conjugar",
    libraryTarget: "umd"
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/
    }),
    new BannerPlugin(join([
      `Conjugador.js v${version}`,
      `(c) 2016-${year} ${author}`,
      `License: ${license}`
    ]))
  ]
};
