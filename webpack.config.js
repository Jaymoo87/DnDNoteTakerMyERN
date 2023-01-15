const path = require("path");
const nodeExternals = require("webpack-node-externals");

const clientConfig = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/client/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /|.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          context: path.resolve(__dirname, "./src/client"),
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public/js"),
  },
};

const serverConfig = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/server/server.ts",
  module: {
    rules: [
      {
        test: /|.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          context: path.resolve(__dirname, "./src/server"),
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};

module.exports = [serverConfig, clientConfig];
