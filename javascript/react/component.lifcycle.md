# Component life cycle


### `render()`

纯函数，不应该修改componont的state


### `getInitialState()`

在component mount之前调用，返回值会被当做`this.state`

### `getDefaultProps()`

只调用一次，在class创建之前，也就是在所有instance创建之前


### `componentDidMount()`
The `componentDidMount()` method of child components is invoked before that of parent components.
