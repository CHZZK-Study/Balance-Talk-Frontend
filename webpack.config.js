const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  name: 'example',
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
