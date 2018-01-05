const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: ['last 2 versions', 'safari >= 8']
      }
    }
  ]
];
const plugins = [
  require('babel-plugin-transform-object-rest-spread')
];

module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: presets,
      plugins: plugins
    }
  }
};
