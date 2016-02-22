const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const PATHS = {
  src: './src',
  dist: './dist',
  mainAppEntry: './src/index',
};

const sassLoaderString = 'sass-loader?indentedSyntax=sass&includePaths[]=';

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  sassLoaderString + path.resolve(__dirname, PATHS.src),
];

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'bootstrap-loader',
    PATHS.mainAppEntry,
  ],
  output: {
    path: path.join(__dirname, PATHS.dist),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot',
         'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-runtime'],
        exclude: /node_modules/,
        include: __dirname,
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
  sassLoader: {
    includePaths: [path.resolve(__dirname, './sass')],
  },
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
