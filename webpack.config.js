var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var merge = require('webpack-merge');

var webpackCommon = {
  entry: {
    'app': './app/index',
    'app-start': './app/components/todo-app-start',
    'app-filter': './app/components/todo-filter-state'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader?presets[]=es2015'
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-template-loader'
        }
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public'),
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([{
      from: './app/assets/index.html',
      to: './index.html'
    }]),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          preprocessors: {
              './app/*.js' : ['webpack'],
              './app/**/*.js' : ['webpack']
          }
       }
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, './node_modules'),
      path.join(__dirname, './app')
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, './node_modules')
    ]
  }
};
module.exports = webpackCommon;
