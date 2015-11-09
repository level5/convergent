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

### `PATCH` vs `PUT`

- PUT 需要提供完整的资源，如果某个属性没有提供，那就会将这个属性设为null
- `PATCH`的用法

下面这个是错误的,`PATCH`带上的不是要打补丁的数据，而是应该对原来数据如何操作的描述。
```
PATCH /users/123

{ "email": "new.email@example.org" }
```

正确的方式是这样的
```
PATCH /users/123

[description of changes]
```

`JSON`来描述一系列操作
```json
[
    { "op": "test", "path": "/a/b/c", "value": "foo" },
    { "op": "remove", "path": "/a/b/c" },
    { "op": "add", "path": "/a/b/c", "value": [ "foo", "bar" ] },
    { "op": "replace", "path": "/a/b/c", "value": 42 },
    { "op": "move", "from": "/a/b/c", "path": "/a/b/d" },
    { "op": "copy", "from": "/a/b/d", "path": "/a/b/e" }
]
```

使用上面的格式，修改email的正确姿态应该是这样的
```
PATCH /users/123

[
    { "op": "replace", "path": "/email", "value": "new.email@example.org" }
]
```

由此，`PATCH`不是替代`PUT`,而是做一个delta(diff)。

### 异步操作(Async)

对于运行时间太长的请求，可以返回`202 Accepted`给客户端，这个response应该只对应`PUT`, `POST`, `PATCH`或者`DELETE`. 同时应该包含一个link指向一个状态监视器，可以访问来取得任务的状态。

如果任务还没有完成，返回的结果应该类似于
```yaml
!response
status: 202 Accepted
progress: 50%
```

当任务完成了，返回的应该类似于这样.和同步操作返回的结果一样
```yaml
!response
status: 201 Created
headers:
 - name: content-type
   value: applicaton/x-resource+yaml
response: !!str
  Response goes here
```

一旦不是`202 Accepted`的状态被取得过一次之后，也许会被服务器回收掉，客服端不能假设他还可用。

客服端使用下面的头来指定想要的同步行为:
- `Expect: 200-ok/201-created/204-no-content`来禁止异步功能。服务器可以返回`417 Expectation Failed`，如果他不想等到操作结束。
- `Expect: 202-accepted`显示要求一个异步的返回，服务器也可以返回一个`417 Expectation Failed`，如果他不想执行一个异步操作。
如果没有显示指定一个期望值，那么就要假定自己除了`GET`请求外，都接受`202 Accepted`

### 分页(Pagination)

```
GET /api/collection
Range: resources=100-199
```

服务器应该在`OPTION`中说明接受
```
OPTIONS /api/collection HTTP/1.1

HTTP/1.1 200 OK
Accept-Ranges: resources
```
