# Component


###### 什么时候re-render组件？

A re-render can only be triggered if a component’s state has changed. The state can
* change from a props change
* or from a direct setState change.


###### 为什么强调不可变
* 方便时间旅行
* 判断变化

## 概念


### JSX

* 可以使用表达式
* JSX本身也是表达式，所以可以用于`if`, `for`,赋值语句，作为返回值。
* 给属性赋值时，使用引号（字符串）或者大括号（表达式）。
* 防代码注入

### Rendering Element

element是不可变的，只能创建新的element

### Component

All React components must act like pure functions with respect to their props.

##### `state`

* 不要直接修该`state`
* `setState`是异步的
  ```js
  // Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  ```

  ```js
  // Correct
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  ```
* `setState`是merge对象，所以传进来的值是合并到原来的state对象上，生成新的state。


### Events

### life cycle

* `getInitialState` 在生命周期中只被执行一次， 用来初始化component的状态。
* `componentDidMount` 在一个component第一次被render之后调用。

### state

In React, components should always represent the state of the view and not only at the point of initialization.

因为原生的`input`自己管理状态，所以可能会导致他的state和React的component的状态不一致。所以我们要使用`this.state`来保存


什么是state？
* Is it passed in from a parent via props? If so, it probably isn't state.
* Does it change over time? If not, it probably isn't state.
* Can you compute it based on any other state or props in your component? If so, it's not state.


如何处理state？
1. 找到所有的component， 依赖于这个state来render某些东西.
2. 找出一个common component，也就是一个在所有这个些依赖于某个state的component的上一层的component
3. 这个common component或者他上面的component应该持有这个state
4. 如果找不到一个这样的component，那就创建一个。

`e.preventDefault()`阻止默认行为

### props

#### props.children

子节点会被当做`this.props.children`

### refs

在component mount之后，ref引用的方法会被立即执行
```js
render: function() {
  return <TextInput ref={(c) => this._input = c} />;
},
componentDidMount: function() {
  this._input.focus();
}
```


```js
//
<input ref="myInput" />

// code
var input = this.refs.myInput;
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();

```


## 测试

http://facebook.github.io/react/docs/test-utils.html#shallow-rendering

### 测试component

```js

var ReactTestUtils = require('react-addons-test-utils');

```


#### 模拟

```js
// 模拟事件
// <button ref="button">...</button>
var node = this.refs.button;
ReactTestUtils.Simulate.click(node);
```


```js
// 改变input的值
// <input ref="input" />
var node = this.refs.input;
node.value = 'giraffe'
ReactTestUtils.Simulate.change(node);
ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
```
