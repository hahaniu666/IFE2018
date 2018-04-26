# TASK_2学习笔记

#### 1.首先 用npm init  初始化创建package.json （一直按回车即可）

#### 2.然后安装webpack和webpack-cli

    如果是webpack 4.0版本以下则不用安装webpack-cli
    
```$xslt
    npm install --save-dev webpack          //  --save-dev  等同于 -D
    npm install --save-dev webpack-cli      //  --save      等同于 -S
```

#### 3.创建webpack.config.js文件
    
```$xslt
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

```
#### 4.目录结构

```$xslt
--dist                      //npm run start 自动生成
--node_modules              //npm i  生成包文件夹
--src
---san
----san.js                  //自己创建的js文件
---index.js                 // 打包入口文件
--.babelrc                  //解析成2015
--package.json              
--package-lock.json         //由package.json自动生成
--webpack.config.js         webpack配置文件

```    

# 执行代码

#### 1.首先进入TASK_2文件夹
#### 2.执行
    
    npm i 

#### 3.然后执行以下代码打包

    npm run start
    
#### 4.打开page.html即可



