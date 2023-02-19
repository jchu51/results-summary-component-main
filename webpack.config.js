const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const prod = process.env.NODE_ENV === "production";

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Convert files < 8kb to base64 strings
              fallback: "file-loader", // Fallback to file-loader for larger files
              name: "[name].[ext]", // Name of the output file
              outputPath: "assets/fonts", // Output directory for fonts
            },
          },
        ],
      },
    ],
  },
  devtool: prod ? undefined : "source-map",
  devServer: {
    static: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
