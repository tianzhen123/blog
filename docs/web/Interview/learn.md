1. 常见攻击，CSRF是什么，如何防范，token产生策略。

2. React Fiber原理。有什么优势。

3. React生命周期，React16.3版本后变化，为什么要这样做。（结合React Fiber)，有哪些不安全的生命周期。

4. JS事件循环和Node事件循环，两者有何区别。

   + **Node端，microtask 在事件循环的各个阶段之间执行**
   + **浏览器端，microtask 在事件循环的 macrotask 执行完之后执行**

5. 弱网环境下页面首屏如何快速加载

6. 1. 方案：1.缓存的使用 2.SSR使用 3.骨架屏使用

6. document.ready和window.onload的区别。
7. webpack loader和plugin区别。
8. 1px问题



### 公共组件：

业务组件(图片列表展示器，行内多张图片)，图片上传公共组件(拖拽上传、文件上传、大图预览、删除等功能)，

### react优化：

#### 2. 类组件使用PureComponent，减少不必要的重复渲染

PureComponent的原理是重新设置了shouldComponentUpdate(nextProps, nextState)方法。

在该方法中将nextProps和this.props对象浅比较，将nextState和this.state对象进行浅比较

#### 3. 不可变数据-immutable

上面的PureComponent只是对简单数据（值为原始类型）进行浅比较；

而实际开发应用中，数据都是多层嵌套的复杂数据；只使用PureComponent可能会导致render失效。

**immutable**不仅可以生成新的对象；还可以对对象进行深层次的值比较。

```js
import { Map, is } from 'immutable';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // is方法判断的时候，深层比较只能比较从immutable对象变化而来的对象
      // 因为这里考虑words会进行深层变化，要追踪变化，需要将其变成immutable对象
      words: Map({}),
      number: 1
    }
    this.ref = React.createRef();
  }
  shouldComponentUpdate(nextProps, nextState) {
    // is方法用于比较两个immutable对象是否值相等
    return !(is(Map(nextState), Map(this.state)) && is(Map(nextProps), Map(this.props)))
  }
  add = () => {
    // set方法给immutable对象赋值；
    // 另可以通过get获取immutable对象的值
    // this.state.words.get('a')
    this.setState(state => ({
      words: state.words.set('a', this.ref.current.value)
    }))
  }
  reset = () => {
    this.setState(state => ({
      number: state.number + 1
    }))
  }
  render() {
    console.log('App Render');
    return (
      <div>
        <input ref={this.ref} />
        <button onClick={this.add}>+</button><br/>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
```



### 可拖曳的树状结构图（https://juejin.cn/post/6949530814354817061）

### 图片懒加载解决方案
图片懒加载的原理主要是判断当前图片是否到了可视区域这一核心逻辑实现的。这样可以节省带宽，提高网页性能。传统的突破懒加载是通过监听 scroll 事件实现的，但是 scroll 事件会在很短的时间内触发很多次，严重影响页面性能。为提高页面性能，我们可以使用 IntersectionObserver 来实现图片懒加载。
```
const imgs = document.querySelectorAll('img[data-src]')
const config = {
  rootMargin: '0px',
  threshold: 0
}
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target
      let src = img.dataset.src
      if (src) {
        img.src = src
        img.removeAttribute('data-src')
      }
      // 解除观察
      self.unobserve(entry.target)
    }
  })
}, config)

imgs.forEach((image) => {
  observer.observe(image)
})
```
