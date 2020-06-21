# node

- 服务端渲染和客户端渲染的区别
  + 客户端渲染不利于 seo 引擎优化
  + 服务端渲染是可以被爬虫爬取到的,客户端异步渲染是很难被爬虫爬取到
- require 会优先从缓存中读取

### 1. 代码自动重启

使用第三方工具来 nodemon 来实现

`nodemon` 是一个基于 node.js开发的第三方命令工具

```shel
npm install --global nodemon
```

使用方法：

```shel
nodemon app.js
```



### 2. 静态服务

使用方法

```javascript
app.use(express.static('public'))
```



### 3. Express 

3.1 在 Express 中获取 get 请求的参数

```javascript
res.query
```

3.2 在Express 中获取post 请求体数据（参数）

这里我们需要借助第三方包`body-parser`

安装：

```she
npm i --save body-parser
```

配置：

```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// 可以通过 req.body 获取请求的参数
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

### 4. 模板引擎art-template

安装：

```she
npm install --save art-template
npm install --save express-art-template
```

配置：

```javascript
app.engine('html', require('express-art-template'));
```



### 5. 模块化

+ 在 node 环境中对 javascript进行了特殊模块化的支持 commonJS
+ JavaScript 天生不支持模块化
+ 在浏览器中也可以进行模块化编程
  * script 标签来加载，但必须考虑加载顺序的问题
  * Require.js   第三方库 AMD
  * Sea.js           第三方库 CMD

### 6. Node中的`__dirname`  和` __filename`

+ `__dirname`是当前文件所在目录的绝对路径
+ `__filename` 是获取到当前文件的绝对路径地址