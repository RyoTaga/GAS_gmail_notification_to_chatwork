const path = require('path');

module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.join(__dirname, './src/'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
};
