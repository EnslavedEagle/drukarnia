const path = require('path');

module.exports = {
  src: (dest = '') => path.join(process.cwd(), 'src', dest),
  dist: (dest = '') => path.join(process.cwd(), 'dist', dest),
  node_modules: (dest = '') => path.join(process.cwd(), 'node_modules', dest)
};
