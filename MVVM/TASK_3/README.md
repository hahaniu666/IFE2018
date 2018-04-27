# webpack 3  ---> 4.x

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