const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// let nodeModules = path.resolve(__dirname, 'node_modules');
const PATHS = {
  dist: '/dist',
};

const config = {
  context: __dirname,
  target: 'web',
  entry: {
    app: './src/app.jsx',
    vendors: ['react', 'bootstrap-loader'],
  },

  output: {
    path: __dirname + PATHS.dist,
    pathInfo: true,
    filename: '[name].js',
    css: 'style.css',
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: './src/app.jsx',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot',
         'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-runtime'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.png$/,
        loader: 'url?mimetype=image/png',
      },
      {
        test: /\.gif$/,
        loader: 'url?mimetype=image/gif',
      },
      {
        test: /\.jpe?g$/,
        loader: 'url?mimetype=image/jpeg',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9]|svg)?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery!expose?jquery',
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
  cache: true,
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    }),
    new webpack.NoErrorsPlugin(),
   //  new webpack.optimize.UglifyJsPlugin({
   //      compress: {
   //          warnings: false
   //      },
   //  })
  ],
  resolve: {
    extensions: ['', '.jsx', '.json', '.js', '.css'],
  },
};

module.exports = config;
