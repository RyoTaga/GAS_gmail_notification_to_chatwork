const path = require('path');
const Dotenv = require('dotenv-webpack');

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
  plugins: [
    new Dotenv({
      path: './.env',
    }),
  ],
  devtool: 'source-map',
};
