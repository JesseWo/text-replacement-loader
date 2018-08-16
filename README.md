<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

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
const appShell = process.env.APP_SHELL;
...

{
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {},
              },
              //必须放在 `use` 数组的最后一个元素
              {
                loader: require.resolve('text-replacement-loader'),
                options: {
                  test: /\$APP_SHELL\$/g,
                  replacement: appShell?'vip/':''
                }
              }
            ]
          },
```
比如我首先定义了环境变量 `process.env.APP_SHELL=vip` , 
那么在js中
```
import IconPlus from '../assets/img/$APP_SHELL$icon.png';
```
经过 `text-replacement-loader` 就会转换为
```
import IconPlus from '../assets/img/vip/icon.png';
```
由此可以间接实现“动态导入”的功能。

#### 这可以解决什么问题呢？
有这么个需求，你开发的H5 app有两种版本，这两种版本共享同一套代码，只是外表（配色，图片等）有些不一样，比如免费版和收费版的区分。<br/>
那么首先想到的是用环境变量做区分，但是有个问题: 在js或者css中如果不同的app版本需要引用不同的图片，那么就需要在js或者css中根据环境变量进行逻辑判断，但是在js中是不支持动态导入的（import前面不能加逻辑代码），即便是你把所有各个版本要用的图片都导入，然后在 `<img src={}>` 引用前再进行逻辑判断，但是不够优雅；在css中没法写逻辑代码，虽然可以通过sass实现，但还是引入了过多繁杂的逻辑判断，不够优雅！<br/>
那么通过此 `loader` 就可以在编译期间实现对图片路径的修改。

## Options

### `test`

Type: `RegExp` or `String`<br/>
Default: `undefined`

正则表达式或者字符串

### `replacement`

Type: `String`<br/>
Default: `undefined`

将要替换的值

## License

#### [MIT](./LICENSE)

