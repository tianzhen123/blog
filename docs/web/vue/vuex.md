[总结](https://juejin.im/post/5dba91e4518825647e4ef18b)

### Vuex主要包括以下几个核心模块：

      	1. State：定义了应用的状态数据
      	2. Getter：在 store 中定义“getter”（可以认为是 store 的计算属性），就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
      	3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数（commit）
      	4. Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作（dispatch）
      	5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中

### mutation(修改状态同步修改) 通过 commit 提交数据

+ 只能同步修改数据

### action 可以提交异步请求，通过 dispatch 提交数据



### vuex 里的数据也借助了 vue 实例，进行数据的劫持

### Vuex持久化插件(vuex-persistedstate)解决刷新数据消失的问题

vuex优势：相比sessionStorage，存储数据更安全，sessionStorage可以在控制台被看到。

vuex劣势：在F5刷新页面后，vuex会重新更新state，所以，存储的数据会丢失。

vuex可以进行全局的状态管理，但刷新后刷新后数据会消失，这是我们不愿意看到的。怎么解决呢，我们可以结合本地存储做到数据持久化，也可以通过插件-vuex-persistedstate。