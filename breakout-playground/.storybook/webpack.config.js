const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src/scss'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};