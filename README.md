# mytakeout

- Node.js v12.16.2
- webpack
- Express 4（Heroku デプロイ/ローカルで表示）

## webpack

JSとSCSSはwebpackでコンパイル・圧縮するようにしてあります。

- 初回のみ、必要なパッケージをインストール `$ npm install`
- 毎回 `$ npx webpack --config webpack.dev.js` で起動
- ファイルを修正

## ローカルでサーバー起動

サーバー起動するには、

- `$ node server.js`

## デプロイ用

- `$ npx webpack --config webpack.prod.js`
