const webpack = require('webpack');
const os = require('os');
const paths = require('./config/paths');
const babel = require('./config/babel-module');
const sass = require('./config/sass');
const handlebars = require('./config/handlebars-plugin');
const copy = require('./config/copy-plugin');

const app = paths.src('app.js');
const styles = paths.src('sass/style.sass');

const webpackConfig = {
  entry: {
    app: ['babel-polyfill', app, styles],
  },
  output: {
    filename: 'bundle.js',
    path: paths.dist(),
  },
  module: {
    rules: [
      babel,
      sass.module
    ]
  },
  plugins: [
    handlebars,
    copy,
    sass.plugin,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}

module.exports = webpackConfig;