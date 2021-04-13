### vue3.0 六大亮点

1. performance 性能比vue2.x 快1-2倍
2. Tree shaking support：按需编辑，体积更小
3. 组合类API（类似React Hooks）
4. 支持TS
5. 暴露自定义渲染API
6. Fragement，Telport，Supspense：更先进的组件

### Vue3.0变快的原因

1. vue2中的虚拟dom是进行全量的对比，vue3新增了静态标记(PatchFlag)，在创建虚拟Dom的时候会根据Dom中的内容是否发生变化，添加静态标记，再进行对比的时候只对比有标记的dom
2. hoistStatic 静态提升
   + vue2中无论元素是否参与更新，每次都会重新创建，然后再进行渲染
   + vue3中对于部件与更新的元素，会做静态提升，知会被创建一次，再渲染时直接复用即可
3. cacheHandlers事件监听器缓存
   + 默认情况下onClick会被视为动态绑定，所以每次都会追踪他的而变化，但因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可
4. ssr渲染

### Vue3.0 项目创建

1. vite方式
   + 安装vite `npm install -g create-vite-app`
   + 创建项目 `create-vite-app projectName`
   + 安装依赖运行 `cd projectName;npm install;npm run dev`

### Composition API

1. Set up注意点
   + 执行时间：在breforeCreate和Created中间，所以在setup函数中无法使用data和methods
   
   + setup函数只能是同步的，不能是异步的，如果使用异步，可以用async await转换
   
   + 使用 `setup` 函数时，它将接受两个参数：
   
     1. `props`：`setup` 函数中的 `props` 是响应式的，当传入新的 prop 时，它将被更新。但是，因为 `props` 是响应式的，你**不能使用 ES6 解构**，因为它会消除 prop 的响应性。如果需要解构 prop，可以通过使用 `setup` 函数中的 [`toRefs`](https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html#响应式状态解构) 来完成此操
   
        ```vue
        import { toRefs } from 'vue'
        
        setup(props) {
        	const { title } = toRefs(props)
        
        	console.log(title.value)
        }
        ```
   
        
   
     2. `context`
2. reactive注意点
   + reactive参数必须是对象(json/arr)
   + 如果给reactive传递了其他对象，默认情况下修改对象是不会自动更新的，如果想更新，可以通过重新赋值的方式

3. ref 注意点
   + ref本质其实还是reactive，当我们给ref函数传递一个值后，ref函数底层会自动将ref转换成reactive	ref(18)  -----> reactive({value:18})
   + 如果是通过ref创建的数据，在template中使用的时候不用通过 .value 来获取，vue会自动添加 .value

### ref 和 reactive的区别

+ vue如何决定是否需要自动添加 .value的

  + vue在解析数据之前，会自动判断数据是否是ref类型，如果是就自动添加 .value属性，不是就不添加

+ vue是如何判断当前的数据是否是ref类型的

  + 通过当前数据的 ` __v_ref`来判断的

  + 如果有这个私有的属性，并且取值为true，那么就代表是ref类型的数据


### ref 和 reactive都是递归监听，非递归监听用 shallowRef和shallowReactive

+ 注意：如果是通过shallowRef创建数据，那么vue监听的是.value 的变化，并不是第一层的变化

