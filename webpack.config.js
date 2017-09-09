const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}

module.exports = {
  entry: getEntrySources(['./src/index.js']),
  output: {
    filename: 'public/[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
