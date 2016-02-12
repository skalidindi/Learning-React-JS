module.exports = {
  context: __dirname,
  target: 'web',
  entry: {
     javascript: './src/app.jsx',
     html: './index.html',
  },

  output: {
    path: __dirname + '/dist',
    pathInfo: true,
   //  publicPath: '/js/',
    filename: 'app.js',
    css: 'style.css'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {test: /\.png$/, loader: 'url?mimetype=image/png'},
      {test: /\.gif$/, loader: 'url?mimetype=image/gif'},
      {test: /\.jpe?g$/, loader: 'url?mimetype=image/jpeg'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9]|svg)?$/, loader: 'url?limit=10000'},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file'}
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.json', '.js', '.css']
  }
}
