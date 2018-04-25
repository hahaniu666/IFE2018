const pkg = require("./package.json");
const webpack = require('webpack');
const path = require('path');


// 自定义entry 入口配置
const entry = {

    "index": [
        "./src/index.js"
    ],
    // "vendor": [
    //     "san"
    // ]
};

//entry必须是个字符串，所以用下面转换一下
Object.assign(entry);

console.log('entry', entry);


//配置默认config
const config = {
    //mode有三种，参考： https://webpack.js.org/concepts/mode/
    mode: 'none',
    //entry入口
    entry: entry,
    //代码输出
    output: {
        //路径
        path: path.resolve(__dirname, 'dist'),
        //名字
        filename: '[name].js',
    },
    //处理san
    module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
        ]
    },
    //加入source-map，方便调试
    devtool: "#source-map",
};

module.exports = config;
