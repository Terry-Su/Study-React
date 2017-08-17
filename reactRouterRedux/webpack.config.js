var webpack = require('webpack')
var path = require('path')
var express = require('express')
var open = require('open')
var NODE_ENV = process.env.NODE_ENV
var PORT = process.env.PORT

var plugins = [];
if (NODE_ENV === 'PROD') {
  plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'));
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}


module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js.*/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react']
            }
          }
        ]
      }, {
        test: /\.css?/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.scss?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: plugins
}

// server
var app = express()
app.use(express.static(__dirname))
app.listen(PORT)
open('http://localhost:' + PORT)
