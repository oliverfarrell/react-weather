const path = require("path");
const webpack = require("webpack");

module.exports = options => ({
  mode: options.mode,

  entry: options.entry,

  output: Object.assign(
    {
      path: path.resolve(process.cwd(), "dist"),
      publicPath: "/"
    },
    options.output
  ),

  optimization: options.optimization,

  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]),

  devtool: options.devtool,

  performance: options.performance || {},

  devServer: options.devServer,

  module: {
    rules: options.module.rules.concat([
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"]
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ])
  },

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(process.cwd(), "src/components"),
      containers: path.resolve(process.cwd(), "src/containers"),
      utils: path.resolve(process.cwd(), "src/utils"),
      assets: path.resolve(process.cwd(), "src/assets")
    },
    modules: [path.resolve(process.cwd(), "node_modules"), path.resolve(process.cwd(), "src")]
  }
});
