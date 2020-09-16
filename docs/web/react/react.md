### 生命周期函数

#### 装载组件触发

+ `componentWillMount`：装载组件之前调用一次，在 `render` 之前调用，你可以在这个方法里面调用 `setState` 改变状态，并且不会导致额外调用一次 `render`
+ `componentDidMount`：装载组件之后调用一次，在 `render` 之后调用，从这里开始可以通过 `ReactDOM.findDOMNode(this)` 获取到组件的 DOM 节点。

#### 更新组件触发

这些方法不会在首次 `render` 组件的周期调用

- `componentWillReceiveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`
- `componentDidUpdate`

#### 卸载组件触发

- `componentWillUnmount`