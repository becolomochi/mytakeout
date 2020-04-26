// 使っていない

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const packageImporter = require('node-sass-package-importer');

// 'production' か 'development'
const MODE = 'development';

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development';

module.exports = {
  watch: true,
  mode: MODE,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/`,
    filename: 'public/js/main.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/css/style.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: false,
              // sourceMap: enabledSourceMap,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              // sourceMap: enabledSourceMap,
              plugins: [
                require('autoprefixer')({
                  grid: true
                }),
                require('cssnano')({
                  preset: 'default',
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              // sourceMap: enabledSourceMap
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     outputPath: 'img',
      //     name: '[name].[ext]'
      //   }
      // },
      {
        // test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        test: /\.(eot|wof|woff|woff2|ttf)$/,
        loader: 'url-loader'
      }
    ]
  }
};
