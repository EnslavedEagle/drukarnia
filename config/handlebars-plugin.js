const paths = require('./paths');
const handlebars = require('handlebars-webpack-plugin');

module.exports = new handlebars({
  entry: paths.src('views/*.hbs'),
  output: paths.dist('[name].html'),
  partials: [
    paths.src('views/**/*.hbs')
  ],
  data: paths.src('index.json')
});
