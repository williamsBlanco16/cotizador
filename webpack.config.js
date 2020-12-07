const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const babelRule = {
  test: /\.js$/,
  exclude: [path.resolve(__dirname,'node_modules')],
  use:{
    loader: "babel-loader",
    options: {
      presets:["@babel/preset-env","@babel/preset-react"],
    }
  }
}

module.exports = {
  module: {
    rules:[babelRule]
  },
  plugins:[new HtmlWebpackPlugin({template:'./src/index.html'})],
  devtool: 'source-map'
}