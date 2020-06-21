[TOC]

### vue 双向绑定原理  

+ Vue是采用数据劫持配合发布者-订阅者模式，通过Object.defineProperty()来劫持各个属性的getter和setter 在数据发生变化的时候，发布消息给依赖收集器，去通知观察者，做出对应的回调函数去更新视图。 

+ 具体就是： MVVM作为绑定的入口，整合Observe,Compil和Watcher三者，通过Observe来监听model的变化 通过Compil来解析编译模版指令，最终利用Watcher搭起Observe和Compil之前的通信桥梁 从而达到数据变化 => 更新视图，视图交互变化(input) => 数据model变更的双向绑定效果。

### $nextTick **是做什么的**  

+ 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

### $set 的使用

+ 由于 Vue 会在初始化实例时进行双向数据绑定，使用Object.defineProperty()对属性遍历添加 getter/setter 方法，所以**属性必须在 data 对象上存在**时才能进行上述过程 ，这样才能让它是响应的。如果要给对象添加新的属性，此时新属性没有进行过上述过程，不是响应式的，所以会出想数据变化，页面不变的情况。此时需要用到$set。

### 组件传值 

+ 父子组件（props）子父组件（$emit）兄弟组件（eventbus、vuex）

### v-if 和 v-show 的区别

+ v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏

+ v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果

### v-for循环时为什么要加key

+ vue的dom渲染是虚拟dom，数据发生变化时，diff算法会只比较更改的部分，如果数据项的顺序被改变，Vue将不是移动DOM元素来匹配数据项的改变，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。举例说明：有一个列表我们现在在中间插入了一个元素，diff算法会默认复用之前的列表并在最后追加一个，如果列表存在选中一类的状态则会随着复用出现绑定错误的情况而不是跟着原元素，key的作用就可以给他一个标识，让状态跟着数据渲染。（这一块是我自己的一个大概理解，表述不太清楚，具体的可以去查一下文档，本文就不具体描述此问题了。）

###  如何让CSS只在当前组件中起作用

+ answer：将当前组件的<style>修改为<style scoped>

### vue 中常用的指令 

+ answer：v-bind、v-if、v-on、v-model(value,input)

### element ui 使用情况      bug（抖动）

### watcher 和 computed 的区别和使用

+ computer有依赖收集的功能，而且会缓存计算的结果
+ watcher 是对一个属性的监控，从而触发属性变化后的一系列动作

### 组件中的 `data`为什么是一个函数? 

+ 组件可以被创建多次，为了避勉组件间变量污染，如果是个对象，则可以会被修改。

### 性能优化

1. webpack打包文件体积过大？（最终打包为一个js文件）
   1. 异步加载模块 
   2. 提取第三库 
   3. 代码压缩 
   4. 去除不必要的插件
2. 如何优化webpack构建的性能
   1. 减少代码体积 
      1. 使用CommonsChunksPlugin 提取多个chunk之间的通用模块，减少总体代码体积 	 
      2. 把部分依赖转移到CDN上，避免每次编译过程都由Webpack处理 	 
      3. 对一些组件库采用按需加载，避免无用的代码
   2. 减少目录检索范围
      + 在使用loader的时候，通过制定exclude和include选项，减少loader遍历的目录范围，从而加快webpack编译速度
   3. 减少检索路经：resolve.alias可以配置webpack模块解析的别名，对于比较深的解析路经，可以对其配置alias
3. Vue的SPA 如何优化加载速度
   + 1.减少入口文件体积 2.静态资源本地缓存 3.开启Gzip压缩 4.使用SSR,nuxt.js

### Object.defineProperty的缺点：

+ 只能劫持对象的属性，我们需要对每个对象的每个属性进行遍历，无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应

### webpack 中plugin和loader的区别是什么？

对于loader，它就是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss或A.less转变为B.css，单纯的文件转换过程

plugin是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务。

### plugins - 插件

- UglifyJsPlugin
- HotModuleReplacementPlugin
- NoEmitOnErrorsPlugin
- HtmlWebPackPlugin
- ExtractTextPlugin
- PreloadWebpackPlugin

### 项目中常用loader

- babel-loader、awesome-typescript-loader js*/ts编译，
- css-loader、postcss-loader、sass-loader、less-loader、style-loader 等css样式处理
- file-loader、url-loader、html-loader等图片/svg/html等的处理

### `$route`和`$router`的区别

+ $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
+ $router是“路由实例”对象包括了路由的跳转方法，钩子函数等。

### router 传值

1. query 当于get请求，页面跳转的时候，可以在地址栏看到请求参数
2. params相当于post请求，参数不会再地址栏中显示

### 父子组件传值的方式

1. props

  2. refs
  3. 子元素$children

### Vue 项目可以进行哪些优化？（加分项）

1. 代码层面的优化

   v-if 和 v-show 区分使用场景

   computed 和 watch  区分使用场景

   v-for 遍历必须为 item 添加 key，且避免同时使用 v-if

   长列表性能优化

   事件的销毁

   图片资源懒加载

   路由懒加载

   第三方插件的按需引入

   优化无限列表性能

   服务端渲染 SSR or 预渲染

2. Webpack 层面的优化

   Webpack 对图片进行压缩

   减少 ES6 转为 ES5 的冗余代码

   提取公共代码

   模板预编译

   提取组件的 CSS

   优化 SourceMap

   构建结果输出分析

   Vue 项目的编译优化

3. 基础的 Web 技术的优化

   开启 gzip 压缩

   浏览器缓存

   CDN 的使用

   使用 Chrome Performance 查找性能瓶颈

### vue-router守卫

> 1. 导航守卫 router.beforeEach 全局前置守卫
>
>    + to: Route: 即将要进入的目标（路由对象）
>
>    + from: Route: 当前导航正要离开的路由
>
>    + next: Function: 一定要调用该方法来 resolve 这个钩子。（一定要用这个函数才能去到下一个路由，如果不用就拦截） 执行效果依赖 next 方法的调用参数。
>
>    * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
>
>    * next(false): 取消进入路由，url地址重置为from路由地址(也就是将要离开的路由地址)。
>
> 2. 路由独享的守卫 你可以在路由配置上直接定义 beforeEnter 守卫
>
>    ```javascript
>    const router = new VueRouter({
>      routes: [
>        {
>          path: '/foo',
>          component: Foo,
>          beforeEnter: (to, from, next) => {
>            // ...
>          }
>        }
>      ]
>    })
>    ```
>
>    
>
> 3. 组件内的守卫 你可以在路由组件内直接定义以下路由导航守卫
>
>    ```javascript
>    const Foo = {
>      template: `...`,
>      beforeRouteEnter (to, from, next) {
>        // 在渲染该组件的对应路由被 confirm 前调用
>        // 不！能！获取组件实例 `this`
>        // 因为当守卫执行前，组件实例还没被创建
>      },
>      beforeRouteUpdate (to, from, next) {
>        // 在当前路由改变，但是该组件被复用时调用
>        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
>        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
>        // 可以访问组件实例 `this`
>      },
>      beforeRouteLeave (to, from, next) {
>        // 导航离开该组件的对应路由时调用，我们用它来禁止用户离开
>        // 可以访问组件实例 `this`
>        // 比如还未保存草稿，或者在用户离开前，
>        将setInterval销毁，防止离开之后，定时器还在调用。
>      }
>    }
>    ```
>
>    

### vue render函数返回的是虚拟 dom

+ render 中的 h 其实就是 createElement

### vue diff 算法

1. diff 算法是虚拟 dom 技术的必然产物：通过新旧虚拟 dom的比较，将发生变化的地方更新在真实 dom 上；另外，也需要 diff高效的执行过程，从而降低时间复杂度 O(n)

2. vue2.x中为了降低 watcher粒度，每个组件只有 watcher 与之对应，只有引入 diff 才能精确找到发生变化的地方。
3. vue中 diff 的执行时刻是组件实例执行其更新函数时，它会对比上一次渲染结果 oldVnode和新的渲染结果 newVnode，此过程称为 patch
4. diff 过程遵循深度优先、同层比较的策略；两节点会根据它们是否拥有子节点或文本节点做不同操作；比较两个子节点是算法的重点，首先假设首尾节点可能相同做了 4 次对比尝试，如果没有找到相同节点，才会按照通用的遍历查找的方式，查找结束再按照情况处理剩余的节点；借助 key通常可以非常精确的找到相同点，因此整个 patch 过程非常高效。

### vue 组件化

1. 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用；
2. 组件化开发能大幅提高应用开发效率、测试性、复用性等；
3. 组件使用按分类有：页面组件、业务组件、通用组件；
4. vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于VueComponent，扩展于Vue；
5. vue中常见组件化技术有：属性prop，自定义事件，插槽等，它们主要用于组件通信、扩展等；
6. 合理的划分组件，有助于提升应用性能；
7. 组件应该是高内聚、低耦合的；
8. 遵循单向数据流的原则。

### 前端错误收集（vue）

Vue提供了一个全局配置errorHandler，用于收集Vue运行时发生的错误。

用法：

```javascript
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  //`err`是js错误栈信息，可以获取到具体的js报错位置。
  //`vm` vue实例
  //`info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
```

