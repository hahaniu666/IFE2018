const pkg = require("./package.json");
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const ExtractTextPlugin = require("extract-text-webpack-plugin");   4.0弃用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
const Uglify = require('uglifyjs-webpack-plugin');

const args = require('yargs').argv;
//
// parameters
const env = args.env && args.env.env ? args.env.env.toUpperCase() : "DEV";
const isProd = "PROD" == env;
const outputPath = args.env && args.env.out ? args.env.out : "build";

const base = __dirname;

console.log('env', env);

const appName = 'app';


// 4.0 弃用

// const vendorCssPlugin = new ExtractTextPlugin({
//     filename: isProd ? '[name].[hash].css' : '[name].css'
// });
// const appCssPlugin = new ExtractTextPlugin({
//     filename: isProd ? '[name].[hash].scss.css' : '[name].scss.css'
// });
//
// new MiniCssExtractPlugin({
//     // Options similar to the same options in webpackOptions.output
//     // both options are optional
//     filename: "[name].css",
//     chunkFilename: "[id].css"
// })
// new MiniCssExtractPlugin({
//     filename: "[name].css",
// }),


const vendorCssPlugin = new MiniCssExtractPlugin({
    // filename: isProd ? '[name].[hash].css' : '[name].css'
    filename: isProd ? '[name].[hash].css' : '[name].css',
});
// const appCssPlugin = new MiniCssExtractPlugin({
//     filename: isProd ? '[name].[hash].scss.css' : '[name].scss.css'
// });

// 自定义entry 入口配置
const entry = {

    "index": [
        "./src/app/index.js"
    ],
    // vendor: ['lodash'],
    "vendor": [
        'babel-polyfill',
        "swiper",
        "lodash"
    ]
};

//entry必须是个字符串，所以用下面转换一下
Object.assign(entry);

console.log('entry', entry);


const plugins = [

    //分析

    /*
    * 让你知道
    * 哪些东西在你的包里
    * 哪些模块组成包的大小
    * 找到错误的模块
    * 优化
    * */
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: 'report.json'
    }),
    // new BellOnBundlerErrorPlugin(),    //4.0弃用
    new webpack.BannerPlugin("copyright @ hahaniu666"), // 在生成的js文件中加入 /*! copyright @ hahaniu666 */
    //自定义插件
    new webpack.DefinePlugin({
        __ENV__: JSON.stringify(env),
        __APP__: JSON.stringify(pkg.name),
        __VERSION__: JSON.stringify(pkg.version)
    }),
    vendorCssPlugin,
    // new MiniCssExtractPlugin({
    //     filename: "[name].css",
    // }),

    // appCssPlugin,
    new HtmlWebpackPlugin({
        template: './src/app/index.html',
        filename: '../index.html',
        chunks: ['vendor', 'index'],
        favicon: 'favicon.ico',
        appName: appName,
        hash: !isProd,
        minify: {
            html5: true,
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: true,
            minifyCSS: true
        },
    }),

];


if (isProd) {
    plugins.push(
        //{
        //             compress: {
        //                 warnings: false
        //             },
        //             mangle: {
        //                 except: ['$super', '$', 'exports', 'require']
        //             },
        //             output: {
        //                 comments: false
        //             }
        //         }
        new Uglify(),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}


//配置默认config
const config = {
    target: "web",
    //mode有三种，参考： https://webpack.js.org/concepts/mode/
    mode: 'none',
    resolve: {
        modules: [
            'node_modules',
        ]
    },
    //entry入口
    entry: entry,
    //代码输出
    // output: {
    //     //路径
    //     path: path.resolve(__dirname, 'dist'),
    //     //名字
    //     filename: '[name].js',
    // },
    plugins: plugins,

    //  参考：https://news.aotu.io/a/5a7b53d3d50eee0042c20c0c?utm_medium=lite02_web&utm_source=aotu_io
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
    output: {
        path: path.resolve(base, `${outputPath}/${pkg.name}`),
        filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        chunkFilename: isProd ? '[name].[chunkhash].chunk.js' : '[name].chunk.js',
        crossOriginLoading: "anonymous",
        sourceMapFilename: isProd ? "[id].[hash].[file].map" : '[file].map',
        publicPath: `./${pkg.name}/`
    },
    //处理san
    module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                // test 表示测试什么文件类型
                test: /\.css$/,
                // 使用 'style-loader','css-loader'
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,    //参考 ：https://www.npmjs.com/package/mini-css-extract-plugin
            //         "style-loader",                 // creates style nodes from JS strings
            //         "css-loader",                   // translates CSS into CommonJS
            //         "sass-loader"                   // compiles Sass to CSS
            //         // {
            //         //     loader: "style-loader" // creates style nodes from JS strings
            //         // }, {
            //         //     loader: "css-loader" // translates CSS into CommonJS
            //         // }, {
            //         //     loader: "sass-loader" // compiles Sass to CSS
            //         // }
            //     ]
            // }
        ]
    },

    //加入source-map，方便调试
    devtool: "#source-map",
};

module.exports = config;
