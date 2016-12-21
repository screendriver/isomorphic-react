const path = require('path');

module.exports = {
  entry: ['core-js', 'isomorphic-fetch', './src/client/index'],
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }]
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  devtool: 'inline-source-map'
}
