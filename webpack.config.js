const path = require('path');

module.exports = {
    entry: './www/src/index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname),
      filename: './www/bundle/bundle.js',
    },
    watch: true,
    watchOptions:{
      aggregateTimeout: 600,
      ignored: '**/node_modules'
    }
  };