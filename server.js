var http = require('http')
var path = require('path')
var express = require('express')

var app = express()

app.use(require('morgan')('combined', {
  skip: function (req, res) {
    return res.statusCode < 400
  }
}))

// webpack setting
var webpack = require('webpack')
var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config')
var compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname) + '/index.html')
})

if (require.main === module) {
  var server = http.createServer(app)
  server.listen(process.env.PORT || 3000, function () {
    console.log('Listening on %j', server.address())
  })
}
