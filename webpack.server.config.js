const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'server.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react']
        }
      }
    ]
  }
};
