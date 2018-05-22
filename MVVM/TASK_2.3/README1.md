# webpack 3  ---> 4.x

> 查看webpack 安装版本  npm info webpack 

# 以下两个插件没怎么看懂 (与https://www.npmjs.com/package/mini-css-extract-plugin有关)

* [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
* [dedupe-parent-css-from-chunks-webpack-plugin](https://github.com/egorvoronov/dedupe-parent-css-from-chunks-webpack-plugin)

* [插件提取css 参考： https://github.com/webpack/webpack/issues/7023]
* [webpack4.x以下插件介绍(https://segmentfault.com/a/1190000008847145)
* [npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)
#### 参考：https://blog.csdn.net/qq_16559905/article/details/79404173
### 弃用的插件

    extract-text-webpack-plugin   --->>>  MiniCssExtractPlugin
    bell-on-bundler-error-plugin
    CommonsChunkPlugin  ---->>>>
    
            //参考 ：https://news.aotu.io/a/5a7b53d3d50eee0042c20c0c?utm_medium=lite02_web&utm_source=aotu_io
            optimization: {
                    minimize: isProd ? true : false,
                    splitChunks: {
                        chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
                        minSize: 0,                // 最小尺寸，默认0
                        minChunks: 1,              // 最小 chunk ，默认1
                        maxAsyncRequests: 1,       // 最大异步请求数， 默认1
                        maxInitialRequests: 1,    // 最大初始化请求书，默认1
                        name: () => {
                        },              // 名称，此选项课接收 function
                        cacheGroups: {                 // 这里开始设置缓存的 chunks
                            priority: "0",                // 缓存组优先级 false | object |
                            vendor: {                   // key 为entry中定义的 入口名称
                                chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                                test: /lodash/,     // 正则规则验证，如果符合就提取 chunk
                                name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
                                minSize: 0,
                                minChunks: 1,
                                enforce: true,
                                maxAsyncRequests: 1,       // 最大异步请求数， 默认1
                                maxInitialRequests: 1,    // 最大初始化请求书，默认1
                                reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
                            }
                        }
                    }
                },
    
    UglifyJsPlugin  ---->>>>  uglifyjs-webpack-plugin
    
    
# sass-loader打包出来的css是放在head下面的 style <style>....</style>中，，所以如果用sass文件时，一定要在最外层加一个不一样的.sa-home{...},, .sa-tar{...},来区分不同的样式

* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

* [webpack官方](https://webpack.js.org/) 

* [webpack中文](https://www.webpackjs.com/)
* [Webpack 4 Tutorial: from 0 Conf to Production Mode](https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_extracting_CSS_to_a_file)
