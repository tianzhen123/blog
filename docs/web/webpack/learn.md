## amd(运行在浏览器端)

+ 需要引入 require.js

## common.js(运行在 node 环境)

+ Import 和 module.exports



# webpack

#### 默认配置文件的名字 webpack.config.js

#### css 抽离插件 mini-css-extract-plugin

#### webpack-dev-middleware webpack 中间件,可以在 node 中启动 webpack 服务,用在开发时的跨域上 

#### tree-shaking 打包的时候自动把没用的代码删除

#### **mini-css-extract-plugin** 抽离写在 html 中的 css

#### **file-loader** 

+ 可以用来帮助webpack打包处理一系列的图片文件；比如：**.png** 、 **.jpg 、.jepg**等格式的图片；
+ 使用file-loader打包的图片会给每张图片都生成一个随机的hash值作为图片的名字；

#### url-loader

+ 把图片文件转成 base64 的文件

#### 报错信息提示：

1. `devtool:source-map`
   + 增加映射文件，可以帮助我们调试源码，会单独生产 sourcemap 文件，出错了会标识到当前报错的行和列
2. `devtool:eval-source-map`
   + 不会产生单独的文件，但可以显示报错的列和行
3. `devtool:cheap-module-souce-map`
   + 不会产生列，是一个单独的映射文件
4. `devtool:cheap-eval-source-map`
   + 不会生成文件，集成在打包后的文件中，不会产生列

#### webpack3 和 webpack4 的区别

1. webpack4 增加了 model 的配置（只有两种值development | production）
2. CommonChunksPlugin已经从webpack4中移除。可使用optimization.splitChunks进行模块划分（提取公用代码）。
3. webpack4使用MiniCssExtractPlugin取代ExtractTextWebpackPlugin。
   .代码分割。
4. 使用动态import，而不是用system.import或者require.ensure
5. vue-loader。使用vue-loader插件为.vue文件中的各部分使用相对应的loader，比如css-loader
6. UglifyJsPlugin：现在也不需要使用这个plugin了，只需要使用optimization.minimize为true就行，production mode下面自动为true

## 常用的 loader 及其作用：

- style-loader：将CSS添加到DOM的内联样式标签style里
- css-loader：允许将CSS文件通过require的方式引入，并返回CSS代码
- less-loader：处理less
- sass-loader：处理sass
- postcss-loader：用postcss来处理CSS
- file-loader：分发文件到output目录并返回相对路径
- url-loader 和 file-loader 类似，但是当文件小于设定的limit时可以返回一个Data Url
- html-minify-loader：压缩HTML文件
- babel-loader：把ES6文件转换成ES5文件

## 常用插件

+ HtmlWebpackPlugin 是依据一个简单的模板，帮助生成最终的 Html5 文件，这个文件中自动引用了打包后的 JS 文件。每次编译都在文件名中插入一个不同的哈希值。
+ `CopyWebpackPlugin` : 在 webpack 中拷贝文件和文件夹，一般用于将不需要打包的静态文件 copy 到我们最终打包的文件目录下

## Webpack 打包优化

1. DllPlugin  动态链接库