### Vue-router 原理

> SPA(single page application):单一页面应用程序，只有一个完整的页面；它在加载页面时，不会加载整个页面，而是只更新某个指定的容器中内容。**单页面应用(SPA)的核心之一是: 更新视图而不重新请求页面**;vue-router在实现单页面前端路由时，提供了两种方式：Hash模式和History模式；根据mode参数来决定采用哪一种方式。

1. ### Hash模式：

   **vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，当 URL 改变时，页面不会重新加载。** hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也就是说**hash 出现在 URL 中，但不会被包含在 http 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面**；同时每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置；所以说**Hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据。hash 模式的原理是 onhashchange 事件(监测hash值变化)，可以在 window 对象上监听这个事件**。

2. ### History模式：

   由于hash模式会在url中自带#，如果不想要很丑的 hash，我们可以用路由的 history 模式，只需要在配置路由规则时，加入"mode: 'history'",**这种模式充分利用了html5 history interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求**。

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

### vue-router 跳转方式

1. 通过使用`<router-link></router-link>`标签实现跳转

2. this.$router.push() 跳转

   > (1)params跳转
   >
   > this.$router.push({path:"/", params:{id:1}})
   >
   > ​             //跳转路径   //跳转参数
   >
   > （2）query跳转
   >
   > this.$router.push({path:"/", query:{id:1}})
   >
   > ​             //跳转路径   //跳转参数

3. 返回上一页，不存在历史记录

   > this.$router.replace({
   >
   > ​	path:"/123"
   >
   > })



## $router.push和$router.replace的区别：
```vue
<button @click="goToMenu" class="btn btn-success">Let's order！</button>
.....
<script>
  export default{
    methods:{
      goToMenu(){
        this.$router.go(-1)//跳转到上一次浏览的页面
        this.$router.replace('/menu')//指定跳转的地址
        this.$router.replace({name:'menuLink'})//指定跳转路由的名字下
        this.$router.push('/menu')//通过push进行跳转
        this.$router.push({name:'menuLink'})//通过push进行跳转路由的名字下
      }
    }
  }
</script>
```
+ 使用push方法的跳转会向 history 栈添加一个新的记录，当我们点击浏览器的返回按钮时可以看到之前的页面。
+ 使用replace方法不会向 history 添加新记录，而是替换掉当前的 history 记录，即当replace跳转到的网页后，‘后退’按钮不能查看之前的页面。