const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },
  entry: {
    src: "./src/index.js",
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
      {
        test: /\.(s)?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "/" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jp(e)?g|png|svg|gif$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
      {
        test: /\.woff(2)?|ttf|eot|otf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "assets/css/style.css" }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/img", to: "assets/img" }],
    }),
  ],
};
