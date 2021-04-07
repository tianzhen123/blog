[TOC]

### React 生命周期有哪些？

- React 16.3 以前的版本：

  - **componentWillMount：** 在渲染之前执行，用于根组件中的应用程序级别配置。
  - **componentDidMount：** 在首次渲染之后执行，所有 AJAX 请求，DOM 或状态更新以及设置事件侦听器都应在此执行。
  - **componentWillReceiveProps：** 在特定属性更新以触发状态转换时执行。
  - **shouldComponentUpdate：** 确定是否要更新组件。默认情况下，它返回 `true`。如果你确定在状态或属性更新后不需要渲染组件，则可以返回 `false` 值。这是提高性能的好地方，因为如果组件收到新的 `props`，它可以防止重新渲染。
  - **componentWillUpdate：** 当有属性或状态改变被`shouldComponentUpdate()` 确认并返回 `true` 时，在重新渲染组件之前执行。
  - **componentDidUpdate：** 通常，它用于响应属性或状态更改来更新 DOM。
  - **componentWillUnmount：** 它将用于取消任何传出的网络请求，或删除与该组件关联的所有事件侦听器。

  React 16.3+ 版本

  - **getDerivedStateFromProps：** 在调用 `render()` 之前被调用，并且在每次渲染中都会被调用。对于需要派生状态的罕见用例，这是存在的。[如果您需要派生状态](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html) 值得一读。
  - **componentDidMount：** 在首次渲染之后执行，并且所有 AJAX 请求、DOM 或状态更新以及设置事件侦听器都应在此发生。
  - **shouldComponentUpdate：** 确定是否将更新组件。默认情况下，它返回 `true`。如果你确定在状态或属性更新后不需要渲染组件，则可以返回 `false`值。这是提高性能的好地方，因为如果组件接收到新的属性，它可以防止重新渲染。
  - **getSnapshotBeforeUpdate：** 在将呈现的输出提交给 DOM 之前立即执行。此方法返回的任何值都将传递到 `componentDidUpdate()` 中。 这对于从 DOM（即滚动位置）捕获信息很有用。
  - **componentDidUpdate：** 通常，它用于响应属性或状态更改来更新DOM。如果 `shouldComponentUpdate()` 返回 `false`，则不会触发。
  - **componentWillUnmount：** 它将用于取消任何传出的网络请求，或删除与该组件关联的所有事件侦听器。

### 组件生命周期有哪些不同阶段？

组件生命周期具有三个不同的生命周期阶段。

1. **Mounting：** 组件已准备好安装在浏览器 DOM 中。这个阶段涵盖了生命周期方法 `constructor()`、`getDerivedStateFromProps()`、 `render()` 和 `componentDidMount()` 的初始化。
2. **Updating：** 在此阶段，组件以两种方式进行更新，即发送新 `props` 和从 `setState()` 或 `forceUpdate()` 更新状态。此阶段涵盖了`getDerivedStateFromProps()`，`shouldComponentUpdate()`，`render()` 、`getSnapshotBeforeUpdate()` 和 `componentDidUpdate()` 生命周期方法。
3. **Unmounting：** 在最后一个阶段，不再需要该组件并从浏览器DOM上卸载该组件。 这个阶段包括 `componentWillUnmount()` 生命周期方法。

值得一提的是，在将更改应用于 DOM 时，React 内部具有阶段性概念。 它们分开如下

1. **Render：** 该组件将渲染而没有任何副作用。这适用于 Pure 组件，在此阶段，React 可以暂停、中止或重新启动渲染。
2. **Pre-commit：** 在组件将更改实际应用于 DOM 之前，有一段时间可以让 React 通过 `getSnapshotBeforeUpdate()` 从 DOM 中读取内容。
3. **Commit：** React 与 DOM 一起工作并分别执行最终的生命周期：`componentDidMount()` 用于安装，`componentDidUpdate()` 用于更新，以及 `componentWillUnmount()` 用于卸载。

### 高阶组件是什么

高阶组件（HOC）是接收组件并返回新组件的函数。基本上，这是从 React 的组成性质衍生出来的一种模式。

我们称它们为纯组件，因为它们可以接受任何动态提供的子组件，但是它们不会修改或复制其输入组件中的任何行为。

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

HOC 可以用到很多场景中：

1. 代码重用，逻辑和引导程序抽象。
2. 渲染劫持。
3. 状态抽象和操纵。
4. props操作。

### Pure Components 是什么

`React.PureComponent` 与 `React.Component` 几乎完全相同，不同之处在于它为你处理了 `shouldComponentUpdate()` 方法。当 props 和 state 改变时，PureComponent 将对 props 和 state 进行浅表比较。另一方面，Component 初始不会将当前 props 和 state 与nextPorps 和 nextState 进行比较。因此，每当调用 `shouldComponentUpdate` 时，组件将默认重新渲染

### React HOOK

+ useState定义数据
+ useEffect使用生命周期 
  + 如果你熟悉 React class 的生命周期函数，你可以把 `useEffect` Hook 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。
+ useMemo 相当于 React.PureComponent
+ useCallback 该函数仅在某个依赖项改变时才会更新
  + `useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`
  + 第一个参数是变化的回调函数，第二个参数是个数组，当数组中传入的值发生变化时，回调函数才会执行
+ useReducer
  + [`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 `dispatch` 方法

