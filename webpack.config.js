var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(css|less|sass)$/,
      loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
      test: /\.(ttf|eot|woff|woff2|otf|svg)/,
      loader: 'file-loader?name=./font/[name].[ext]'
    }, {
      test: /\.json$/,
      loader: 'file-loader?name=./json/[name].json'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
    }]
  }
}
