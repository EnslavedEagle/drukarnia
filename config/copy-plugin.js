const paths = require('./paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
  { from: 'src/**.ico', to: paths.dist(), flatten: true },
  { from: 'src/robots.txt', to: paths.dist(), flatten: true },
  { from: 'src/img/**', to: paths.dist('img'), flatten: true },
  { from: 'src/fonts/**', to: paths.dist('fonts'), flatten: true },
]);