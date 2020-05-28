const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const templateIndex = {
  entry: './src/js/app.js',
  jsName: 'js/bundle.js',
  index: 'index.html',
  htmlName: 'index.html',
  template: './src/index.html'
}
const templateAuth = {
  entry: './src/js/main.js',
  jsName: 'js/bundle2.js',
  index: 'auth.html',
  htmlName: 'auth.html',
  template: './src/auth.html'
}

module.exports = {
  entry: templateAuth.entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: templateAuth.jsName
  },
  devServer: {
    contentBase: './dist',
    index: templateAuth.index
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: templateAuth.htmlName,
      template: templateAuth.template
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader' 
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}