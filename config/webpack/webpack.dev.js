const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = require("./webpack.base")({
  mode: "development",

  devServer: {
    contentBase: path.resolve(process.cwd(), "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  entry: ["./src/app.js"],

  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html"
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false // show a warning when there is a circular dependency
    })
  ],

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ["file-loader"]
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: "eval-source-map",

  performance: {
    hints: false
  }
});
