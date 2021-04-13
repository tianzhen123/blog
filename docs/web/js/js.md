[TOC]


## js 数据类型    

+ 基本类型 string、number、boolean、null、undefined、symbol
+ 引用类型 Object、Array、RegExp、Date、Function
+ 类型判断 `Object.prototype.toString.call()`

## [从输入URL到浏览器显示页面发生了什么](https://mp.weixin.qq.com/s/DLq_GIkdnuOayThfi3jI0A)

1. 首先，在浏览器地址中输入url 
2. 浏览器先查看**浏览器缓存**-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作 
3. 浏览器向DNS（Domain Name System）服务器请求解析该URL中的域名对应的IP地址 
4. 解析出IP地址后，根据该IP地址和默认端口80，和服务器建立TCP连接 
5. 浏览器发送HTTP请求，该请求报文作为TCP三次握手的第三个报文的数据发送给服务器 
6. 服务器对浏览器请求做出响应，并把对应的html文本发送给浏览器 
7. 释放TCP连接 
8. 浏览器将该html文本并显示内容

## es6 新特性

let ，展开运算符，箭头函数，数组的解构赋值、对象的解构赋值

## promise

三种状态：

- pending，异步任务正在进行。
- resolved (也可以叫fulfilled)，异步任务执行成功。
- rejected，异步任务执行失败。

API：

+ Promise.resolve(value)
+ Promise.reject
+ Promise.prototype.then
+ Promise.prototype.catch
+ Promise.race
+ Promise.all

## foreach 如何跳出循环  

因为forEach()无法通过正常流程终止，所以可以通过抛出异常的方式实现终止　　

## ie 适配    

+ babel-polyfill **在index.html 加入以下代码（非必须）**

  ```javascript
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  ```

  

## 防抖和节流

+ 节流是一定时间内，回调函数只执行一次。

  ```js
  function throttle(fn,delay){
      let valid = true
      return function() {
         if(!valid){
             //休息时间
             return false 
         }
         // 工作时间，执行函数并且在间隔期内把状态位设为无效
          valid = false
          setTimeout(() => {
              fn()
              valid = true;
          }, delay)
      }
  }
  ```

+ 防抖是一定时间内，回调函数只执行一次，但期间若有事件触发，则重新计时。

  ```js
  function debounce(fn,delay){
      let timer = null //借助闭包
      return function() {
          if(timer){
              clearTimeout(timer) 
          }
          timer = setTimeout(fn,delay) // 简化写法
      }
  }
  ```

​	如果遇到的是连续不停的事件，则应该选择节流，因为不停触发的事件会让防抖只会执行一次回调函数

## 几种判断数据类型的优缺点

1. typeof   

   + 优点：能够快速区分基本数据类型

     ```javascript
     typeof(123) // number
     ```

     

   + 缺点：不能将Object、Array和Null区分，都返回object

2. instanceof    

   + 优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象 ([] instanceof Array)
   + 缺点：Number，Boolean，String基本数据类型不能判断

3. Object.prototype.toString.call()

   + 优点：精准判断数据类型 
   + 缺点：写法繁琐不容易记，推荐进行封装后使用

## export 和 export default 的区别(es6)

  1. export default 在一个模块里只能有一个，但是export可以有多个
  2. export default 向外暴露的成员，可以用任意的变量来接收
  3. export 向外暴露的成员，需要用{}来接收（按需导出），可以用 as 的方式来起别名，可以同时导出多个

## 阻止冒泡事件和默认事件

+ 当需要停止冒泡行为时，可以使用

  ```javascript
  function stopBubble(e) { 
  //如果提供了事件对象，则这是一个非IE浏览器 
  if ( e && e.stopPropagation ) 
      //因此它支持W3C的stopPropagation()方法 
      e.stopPropagation(); 
  else
      //否则，我们需要使用IE的方式来取消事件冒泡 
      window.event.cancelBubble = true; 
  }
  ```

+ 当需要阻止默认行为时，可以使用

  ```javascript
  //阻止浏览器的默认行为 
  function stopDefault( e ) { 
      //阻止默认浏览器动作(W3C) 
      if ( e && e.preventDefault ) 
          e.preventDefault(); 
      else
        //IE中阻止函数器默认动作的方式 
          window.event.returnValue = false; 
      return false; 
  }
  ```

## 作用域：分为 **全局作用域** 和 **函数作用域**

1. 全局作用域：代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。
  2. 函数作用域：在固定的代码片段才能被访问
  3. 作用域链：**一般情况下，变量取值到 创建 这个变量 的函数的作用域中取值。** **但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。**

## call、bind、apply 区别

* bind与apply、call最大的区别就是：bind不会立即调用，其他两个会立即调用
* apply与call的区别是apply第二个是参数组，但是在确定的参数下，还是最好用call，call的效果会更高，但是在函数的延展性上使用apply更好

## 事件循环(Event Loop)

首先，整体的script(作为第一个宏任务)开始执行的时候，会把所有代码分为`同步任务`、`异步任务`两部分

同步任务会直接进入主线程依次执行

异步任务会再分为宏任务和微任务

宏任务进入到Event Table中，并在里面注册回调函数，每当指定的事件完成时，Event Table会将这个函数移到Event Queue中

微任务也会进入到另一个Event Table中，并在里面注册回调函数，每当指定的事件完成时，Event Table会将这个函数移到Event Queue中

当主线程内的任务执行完毕，主线程为空时，会检查微任务的Event Queue，如果有任务，就全部执行，如果没有就执行下一个宏任务

上述过程会不断重复，这就是Event Loop，比较完整的事件循环

## 面向对象

### 类的本质

+ 类的本质其实是 function（函数）
+ 类其实是构造函数的另外一种写法

### 类的继承（es6）

+ super关键字

  子类在构造函数中使用 super，必须放到this 前面

  ```javascript
  class Person {
      constructor(pName){
          this.pName = pName
      }
      sayP(){
          console.log(this.pName)
      }
  }
  
  class Student extends Person {
      constructor(sName){
          super(sName) // 必须放在 this 赋值的前面
          this.sName = sName
      }
      say(){
          console.log(this.sName)
      }
  }
  
  let stu = new Student('小明')
  stu.sayP()
  ```

### 类的使用注意事项

+ 类没有变量提升，所以需要先定义类，再实例化对象
+ 类里面共有的属性和方法，必须加 this使用
+ 类里面 this 的只想问题

## 继承（es5）

1. 原型链集成

2. 借用构造函数继承

   ```javascript
   function SuperType() {
   	this.colors = ["red", "blue", "green"];
   }
   
   function SubType() {
   	//继承SuperType
   	SuperType.call(this);
   }
   
   var instance1 = new SubType();
   instance1.colors.push("black");
   alert(instance1.colors); //"red,blue,green,black"
   var instance2 = new SubType();
   alert(instance2.colors); //"red,blue,green" 
   ```

   > 存在的问题就是，所有的类型都只能使用构造函数模式（因为超类型的原型中定义的方法对于子类型不可见），因此方法都在构造函数中定义，函数复用就无从谈起了

3. 组合继承

   ```javascript
   function SuperType(name) {
   	this.name = name;
   	this.colors = ["red", "blue", "green"];
   }
   
   SuperType.prototype.sayName = function() {
   	alert(this.name);
   }
   
   function SubType(name, age) {
   	// 继承属性
   	SuperType.call(this, name);
   	this.age = age;
   }
   
   // 继承方法
   SubType.prototype = new SuperType();
   SubType.prototype.constructor = SubType;
   SubType.prototype.sayAge = function() {
   	alert(this.age);
   };
   
   var instance1 = new SubType("Nicholas", 29);
   instance1.colors.push("black");
   alert(instance1.colors); //"red,blue,green,black"
   instance1.sayName(); //"Nicholas";
   instance1.sayAge(); //29
   var instance2 = new SubType("Greg", 27);
   alert(instance2.colors); //"red,blue,green"
   instance2.sayName(); //"Greg";
   instance2.sayAge(); //27 
   ```

   > 因为在子类型中借调构造函数(SuperType.call(this))时，会在自己的所有实例中执行一遍SuperType中的代码，由于每个实例this都是不同的，因此SuperType中定义的属性会在每个实例中有一份副本，也就避免了原型链继承中，原型属性共享的问题（覆盖了原型属性）。

```javascript
function Father(){
    this.name = "xiaoming";
}
Father.prototype.say=function(){
    console.log(this.age);
    
}
function Son(){
    Father.call(this)
}
Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;

var per = new Son();
per.age = 12
per.say();
var per2 = new Son();
per2.say();
```



### 插入元素

+ insertAdjackentHTML() 支持追加字符串元素
+ appentChild 不支持追加字符串元素，只能先createElement

### 构造函数（new 原理）

* 在 new 的时候会执行的四件事

  1. 在内存中创建一个新的空对象

  2. 让 this 指向这个新对象
  3. 执行构造函数，给新对象添加属性和方法
  4. 返回这个新对象（构造函数中不要return）

* 构造函数的成员分为**实例成员**和**静态成员**

  1. 实例成员：就是构造函数里面通过 this 添加的成员

  2. 静态成员：在构造函数身上添加的成员（静态函数只能通过构造函数来访问）

     ```javascript
     // es5 通过构造函数来实现类和对象
     function Star(name){
         this.name = name // 实例成员
       //	this.sing = function(){
        //   console.log('唱歌')
       //  }
     }
     Star.prototype.sing = function(){ // 在原型上添加对象
       console.log('唱歌')
     }
     let ldh = new Star('刘德华')
     console.log(ldh.name) // 实例成员通过对象访问
     Star.age = 20 // 静态成员
     console.log(Star.age) // 静态成员通过构造函数访问
     ```

* 构造函数的原型 prototype 

  + 原型：原型是一个对象，也称prototype为原型对象
  + 原型的作用：共享方法

* `__proto__`是对象自动添加的一个对象，它指向构造函数的原型对象 prototype

  <img src="https://raw.githubusercontent.com/tianzhen123/blog/master/docs/assets/3.png" alt="image-20200226154459348" style="zoom:50%;" />

* 构造函数的 constructor

  + constructor主要用来记录到底引用的哪个构造函数，它可以让原型对象重新指向原来的构造函数

    ```javascript
    ldh.__proto__.contructor === Star.prototype.constructor // true
    ```

  + 构造函数、实例、原型对象之间的关系

    <img src="https://raw.githubusercontent.com/tianzhen123/blog/master/docs/assets/1.png" alt="关系" style="zoom:50%;" />

  + 原型链

    ![原型链](https://raw.githubusercontent.com/tianzhen123/blog/master/docs/assets/2.png)



### Object.defineProperty() 定义对象中新的属性或修改属性

```javascript
// obj:要修改的对象
// key:添加或修改的属性
// newValue:新的值
// writable:是否允许重写
Object.defineProperty(obj,key,{
  value:newValue，
  writable: true/false,
  enumerable: true, // 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false
  configurable: true, // 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
}) 
```

### Object.keys() 获取对象的所有属性名，返回值是数组



### 改变 this 指向的方法

thisArg 是 this 指向

+ call：fun.call( thisArg, arg1, arg2 )
+ apply：fun.apply( thisArg, [argsArray] )
+ bind：fun.bind(thisArg, arg1, arg2) // bind 不会调用函数，返回值是修改后的新函数

### 严格模式` 'use strict'`

```javascript
 // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
```

注意：严格模式只在 ie10以上的版本才会支持，旧版本会忽略

+ **变量：**
  + 不能使用未定义的变量
  + 不能删除已经定义的变量（ delete num；）

+ **this 指向问题**
  + 严格模式下全局作用域中函数中的 this 是 undefined
  + 如果构造函数不用 new 来调用，this会报错
  + 定时器里的 this 指向的还是 window

+ 函数中不能有重名的参数 

## 闭包

+ 父函数将子函数作为返回值，再将子函数赋值给一个变量，所以子函数会存在于内存中，而子函数依赖于父函数存在，所以父函数也会存在于内存中，也就不会被垃圾回收机制回收。

+ 定义：**闭包 ** 是指有权访问另一个函数作用域中的变量的函数

+ 作用：延伸了变量的作用范围

+ 使用：防抖和节流；把变量隐藏起来，不让外面拿到和修改

  ```javascript
  var arr = [1,2,3,4,5]
  for(var i=0;i<arr.length;i++){
        (function(i){
           setTimeout(function() {
              console.log(i);
            }, 1000);
         })(i)
  }
  ```

## 递归函数

+ 用递归计算 n 的阶乘	

  ```javascript
  function con(n) {
              if (n === 1) {
                  return 1;
              }
              return n * con(n - 1)
  }
  console.log(con(4));
  ```

## 拷贝

+ 浅拷贝

  + es6 浅拷贝方法：Object.assign(target,...sources)

+ 深拷贝

  1. 用for…in实现遍历和复制

  ```javascript
  function deepClone(obj) {
    var target = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'object') {
          target[key] = deepClone(obj[key]);
        } else {
          target[key] = obj[key];
        }
      }
    }
    return target;
  }
  ```

  2. JSON 的方式实现

  ```javascript
  function deepClone2(obj) {
    var _obj = JSON.stringify(obj),
    var objClone = JSON.parse(_obj);
    return objClone;
  }
  ```

  3. 利用数组的Array.prototype.forEach进copy

     

## let 和 const,var

+ let 声明的变量具有块级作用域，切可以改变
+ let 没有变量提升，let 不可以重复定义，let 是块级作用域
+ const 声明的变量具有块级作用域，常量声明后不能更改值，引用数据类型声明可以改变。（声明时必须赋值）

## 箭头函数中的 this

+ 箭头函数不绑定 this，箭头函数中的 this 指向函数定义位置的上下文this

  ```javascript
  var a = 100;
  var obj={
    a:5,
    say:()=>{
      console.log(this.a)
    }
  }
  obj.say() // 100 因为 obj 是个对象，不能产生作用域，所以 say 中的 this 指向 window
  // 作用域分为全局作用域和函数作用域
  ```

## CommonJS与ES6 Modules规范的区别

- CommonJS模块是运行时加载，ES6 Modules是编译时输出接口
- CommonJS输出是值的拷贝；ES6 Modules输出的是值的引用，被输出模块的内部的改变会影响引用的改变
- CommonJs导入的模块路径可以是一个表达式，因为它使用的是`require()`方法；而ES6 Modules只能是字符串
- CommonJS `this`指向当前模块，ES6 Modules `this`指向`undefined`
- 且ES6 Modules中没有这些顶层变量：`arguments`、`require`、`module`、`exports`、`__filename`、`__dirname`

## foreach

+ **当数组中元素是值类型，forEach绝对不会改变数组；当是引用类型，则可以改变数组**

+ 不支持链式操作

  

## script标签的额 async 和 defer

```javascript
<script src="xxx"  async /> //表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或等待加载其他脚本。只对外部脚本文件有效。
<script src="xxx"  defer /> //表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。IE7 及更早版本对嵌入脚本也支持这个属性。
```

2. 深拷贝的所有方法
3. vuex 不同 modules 之间如何修改值
4. 移动屏幕适配的所有方式
5. diff 算法是会遍历所有节点吗
6. 数据类型判断

## cordova

架构包括三部分：

1. web app：html+js+css+config.xml
2. webview
3. cordova plugins：camera、media、storage

+ js与native的通讯方式：iframe的形式，**通过后台启一个页面进行拦截取iframe的变更拿到js的方法给oc实现通信，iframe是依赖jssdk.js文件的，需要sdk文件作为桥梁实现通信目的。**内部实现则是通过 UIWebview＃stringByEvaluatingJavaScriptFromString的返回值 取得CommandQueue里面的参数转换成JSON数据。

## js sdk 通讯方式

+ js-sdk优化，也就是oc和js通信的一个方式。一般jssdk有三种方式实现，第一种就是常见的scheme的方式，就是我们在h5页面里面定义一些特殊的链接，拿到这个scheme之后原生拦截。然后把需要的回调函数和参数进行拦截，但这样有个问题，url一般是256个字符，有长度的限制不能无限的传递。

  **第二种是iframe的形式，通过后台启一个页面进行拦截取iframe的变更拿到js的方法给oc实现通信，iframe是依赖jssdk.js文件的，需要sdk文件作为桥梁实现通信目的。**内部实现则是通过 UIWebview＃stringByEvaluatingJavaScriptFromString的返回值 取得CommandQueue里面的参数转换成JSON数据。

  第三种是webkit的方式，他是一种直接调用的方式，无需依赖任何的sdk文件。

## 纯函数

> 相同的输入，总是会的到相同的输出，并且在执行过程中没有任何副作用。

**执行过程中没有任何副作用**。

这里我们要搞清楚什么是副作用，这里的副作用指的是函数在执行过程中产生了**外部可观察变化**。

1. 发起HTTP请求
2. 操作DOM
3. 修改外部数据
4. console.log()打印数据
5. 调用Date.now()或者Math.random()

## 前端轮子：https://www.zhihu.com/question/29380608

