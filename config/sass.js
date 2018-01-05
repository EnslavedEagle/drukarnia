const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    test: /\.sass$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader?-url',
      use: [
        {
          loader: 'css-loader?-url'
        },
        {
          loader: 'sass-loader?-url',
          options: {
            includePaths: [
              path.resolve('node_modules/@drazik/@normalize.scss/')
            ]
          }
        }]
    })
  },
  plugin: new ExtractTextPlugin({
    filename: 'style.css',
    disable: false,
    allChunks: true
  })
};
