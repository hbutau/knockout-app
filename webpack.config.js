const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
  entry: {
      index: './src/index.js',
  },
    plugins: [
    new MiniCssExtractPlugin({
        filename: 'bundle.css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Development',
        template: 'src/index.html'
    }),
  ],
    devtool: 'inline-source-map',
    devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
    },
};
