const webpack = require('webpack');
const lintFormatter = require('eslint-friendly-formatter');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const PATHS = {
  src: './src',
  dist: './dist',
  mainAppEntry: './src/app.jsx',
};

const sassLoaderString = 'sass-loader?indentedSyntax=sass&includePaths[]=';

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  sassLoaderString + path.resolve(__dirname, PATHS.src),
];

const config = {
  context: __dirname,
  target: 'web',
  entry: {
    app: PATHS.mainAppEntry,
    vendors: ['react', 'bootstrap-loader'],
  },

  output: {
    path: path.join(__dirname, PATHS.dist),
    pathInfo: true,
    filename: '[name].js',
  },

  module: {
    preLoaders: [
      // {
      //   test: /\.jsx?$/,
      //   loaders: ['eslint-loader'],
      //   exclude: /node_modules/,
      // },
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
        loader: ExtractTextPlugin.extract('style-loader',
        sassLoaders.join('!')),
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
  eslint: {
    // community formatter
    formatter: lintFormatter,
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './sass')],
  },
  cache: true,
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
   //  new webpack.optimize.UglifyJsPlugin({
   //      compress: {
   //          warnings: false
   //      },
   //  })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
  ],
  resolve: {
    extensions: ['', '.jsx', '.json', '.js', '.css', '.scss'],
  },
};

module.exports = config;
