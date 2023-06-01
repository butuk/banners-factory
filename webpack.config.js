let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require('path');

let configuration = {
  entry: "./src/scripts.js",
  plugins: [new MiniCssExtractPlugin({filename: "styles.css"})],

  module: {
    rules: [

      // SCSS
      /*{
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },*/

      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      /*
            // Typescript
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },

            // Images
           {
              test: /\.(png|jpe?g|gif)$/i,
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
      */

    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts.js"
  },
};

module.exports = (env, options) => {

  let isProd = options.mode === 'production';

  if (isProd) {
    configuration.devtool = false;
    configuration.watch = false;
  } else {
    configuration.devtool = "eval-source-map";
    configuration.watch = true;
  }

  return configuration;
}
