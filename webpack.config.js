const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssModulesValues = require("postcss-modules-values");
const autoprefixer = require("autoprefixer");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: `source-map`,
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
  },
  resolveLoader: {
    modules: ["node_modules", path.join(__dirname, "/node_modules")],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      data: path.resolve(__dirname, "data"),
      "styled-components": path.resolve(
        __dirname,
        "node_modules",
        "styled-components"
      ),
    },
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: "postcss",
              plugins: () => [
                postcssFlexbugsFixes,
                autoprefixer({
                  flexbox: "no-2009",
                }),
                postcssModulesValues,
              ],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    new ErrorOverlayPlugin(),
  ],
};
