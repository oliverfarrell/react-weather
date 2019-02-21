const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { HashedModuleIdsPlugin } = require("webpack");

module.exports = require("./webpack.base")({
  mode: "production",

  entry: [require.resolve("react-app-polyfill/ie11"), "./src/app.js"],

  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    new HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20
    }),

    new CopyPlugin([{ from: "src/_redirects", to: "" }])
  ],

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader", "image-webpack-loader"]
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true
      })
    ],
    nodeEnv: "production",
    sideEffects: true,
    concatenateModules: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        main: {
          chunks: "all",
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },

  devtool: false
});
