# Restful

### 标准定义

### Action
对于一些不是RESTful(non RESTful)的操作(operation).比如说一个操作会导致资源的某个状态发生变化。
但是有很多种途径来达成这个状态的变化，而且这些操作产生很多不可观察到的副作用。
比如说对一个虚拟机的"Power Off"和"Shutdown"操作。

这种情况更适合RPC的解决方案。一个这种的方式是模仿RPC(RPC-like)在资源的下面定义一个子的`actions`的分支，然后下面放上对应的操作.带上一个`type`参数来表示对应的操作,同时可以带上其他属性参数。
```
POST http://<host>/<resource>/actions

{
    "type": "PowerOff",
    ...
}
```

### PATCH vs POST


### 异步操作(Async)



### 分页(Pagination)
