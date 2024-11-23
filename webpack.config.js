const path = require("path");

module.exports = {
  entry: "./src/index.jsx", // Entry point for your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "index.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules directory
        use: ["babel-loader"], // Use Babel loader for transpiling
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
    open: true,
  },
};
