module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './app',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devServer: {
    contentBase: './app',
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
}
