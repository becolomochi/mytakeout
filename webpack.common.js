const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
              // url: true,
              sourceMap: true,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
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
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/img/', // 出力先
              publicPath: '../img/', // CSSで記述されるファイル階層
            }
          }
        ]
      },
      {
        // test: /\.(eot|wof|woff|woff2|ttf)$/,
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/fonts/', // 出力先
              publicPath: '../fonts/', // CSSで記述されるファイル階層
            }
          },
        ]
      }
    ]
  }
};
