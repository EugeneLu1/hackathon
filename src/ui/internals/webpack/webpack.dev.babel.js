/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = require('./webpack.base.babel')({
  mode: 'development',

  // Add hot reloading in development
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/bootstrap.ts'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      templateContent: templateContent(),
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],
  tsLoaders: [
    { loader: 'babel-loader' }, // using babel after typescript transpiles to target es6
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true, // fork-ts-checker-webpack-plugin is used for type checking
        logLevel: 'info',
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer],
        }),
      },
    },
  ],
  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});

function templateContent() {
  let html = fs
    .readFileSync(path.resolve(process.cwd(), 'app/index.html'))
    .toString();
  const config = JSON.parse(
    fs
      .readFileSync(path.resolve(process.cwd(), 'app/env/config.json'))
      .toString(),
  );
  html = html
    .replace(/{uilibrary_base_url}/g, config.uilibrary.base_url)
    .replace(/{uilibrary_version}/g, config.uilibrary.version);
  const index = cheerio.load(html);

  return index.html();
}
