<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![chat][chat]][chat-url]

# text-replacement-loader

A text replacement loader module for webpack

## Requirements

This module requires a minimum of Node v6.9.0 and works with Webpack v3 and Webpack v4.

## Getting Started

install:
```shell
npm i https://github.com/JesseWo/text-replacement-loader.git --save-dev
```

use in webpack.config.js
```javascript
{
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {},
              },
              //必须放在`use` 数组的最后
              {
                loader: require.resolve('text-replacement-loader'),
                options: {
                  test: /\$VEST\$/g,
                  replacement: 'vest/'
                }
              }
            ]
          },
```


## Options

### `test`

Type: `RegExp` or `String`
Default: `undefined`

正则表达式或者字符串

### `replacement`

Type: `String`
Default: `undefined`

将要替换的值

## License

#### [MIT](./LICENSE)

