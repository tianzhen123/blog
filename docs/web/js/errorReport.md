# 前端错误上报

## 一、代码执行错误

### 1、try-catch

​	缺点：

1. 使用`try... catch` 包裹，影响代码可读性。

2. 无法处理语法错误

   ```javascript
   try {
     var error = 'error'；   // 中文输入法的；
   } catch(e) {
     console.log('我感知不到错误');
     console.log(e);
   }
   ```

3. 无法处理异步中的错误

   ```javascript
   try {
     setTimeout(() => {
       error        // 异步错误
     })
   } catch(e) {
     console.log('我感知不到错误');
     console.log(e);
   }
   ```

### 2、window.onerror

​	window.onerror要强那么一丢丢。无论是异步还是非异步错误，onerror 都能捕获到运行时错误。

```javascript
/**
 * @param {String}  errorMessage   错误信息
 * @param {String}  scriptURI      出错的文件
 * @param {Long}    lineNumber     出错代码的行号
 * @param {Long}    columnNumber   出错代码的列号
 * @param {Object}  errorObj       错误的详细信息，Anything
 */
window.onerror = function(errorMessage, 
scriptURI, 
lineNumber,
columnNumber,
errorObj) { 
    // code..
}
```

​	window.onerror 的缺点：

1. 监听不到资源加载的报错
2. onerror 事件处理函数只能声明一次，不会重复执行多个回调

### 3、window.addEventListener('error')

window.addEventListener 可以监听到资源加载报错，也可以注册多个事件处理函数。

```javascript
var fn = window.onerror = function() {   // 只能监听到js执行的错误，无法监听资源加载的错误
  console.log(arguments);
};
window.addEventListener("error", fn, true);    // 可以监听到js执行的错误，和资源加载的错误
window.addEventListener("error", fn);
```

为捕获状态时（第三个参数为true）能捕获到js执行错误，也能捕获带有src的标签元素的加载错误。

为冒泡状态时（第三个参数为false）能捕获到js执行错误，不能捕获带有src的标签元素的加载错误。

### 4、promise 中的异常

promise 的报错比较娇贵，`try ……catch`, `window.onerror`, `widow.addEventlistener` 都无法监听到promise 的报错。

`promise` 中的报错顺序是：

1. 如果有catch 等捕获函数，则走catch 捕获函数。catch 捕获函数如果没有抛出新的异常，则下一个then将会认为没有什么报错，every thing is so good , 会继续执行。
2. 如果没有catch 等捕获函数，我们需要注册 `window.addEventListener('unhandledrejection')` 来处理。

## 如何收集 badjs

- 通过 `errorEvent` 或者 `window.onerror`
- 特殊情况下可以考虑使用 `try...catch`

### badjs 上报

- 在 url 上拼接 error.stack 的信息
- 用 img 等方式发送数据，注意长度

### badjs 分析

- 通过栈信息，人工回溯代码
- 通过 UA 简单判断环境和用户身份
- 对于 Script error 信息，得不到太多有用的价值，分析的时候可以跳过。但是要想办法在上报的时候把它"解构"

### 常见的导致 Script error 的场景

- 跨域脚本，并且未设置 crossorigin 里发生异常
- jsonp，未设置 crossorigin，其对于的 script 生成的 js 脚本里发生异常
- iOS 下的 跨域脚本 异步代码 内发生异常
- iOS 下 native 主动执行 js 代码发生异常

### 关于异步代码需要注意的点

- ios 下的跨域**异步**代码无法解析 Script error
- try catch 无法抓到**异步**代码的错误
- jsonp 大多是**同步**代码

