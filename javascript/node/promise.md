# promise

### promise的三个状态

### promise的基本操作
Promise就是返回一个对象，然后在这个对象上可以监听前面方法异步执行的结果。
```js
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("message");
  }, 1000);
});

promise.then((m) => {
  console.log(m);
});
```

```bash
$ node demo.js
message
```

### promise chain
promise的对象的方法调用，都会返回一个新的promise对象。这个promise对象的状态是基于前面那个promise对象的状态来决定的。

#### `promise.then(onFulfill, onReject)`
对`then`调用之后，返回一个新的promise，他的状态稍微复杂一点
- 当第一个promise的状态变为resloved，或者rejected，而且注册了callback，那么这个新的promise的状态就是resloved。
- 当第一个promise的状态变为resloved，或者rejected，而没有对应的callback函数式，他的状态和值会传播到第二个reslove。
- 当第一个promise的状态变为resloved，或者rejected，而且注册了callback，如果callback中抛出了异常，那么第二个promise会reject，参数是抛出的对象。

总得来说，就是promise如果被正常处理了，传播给promise chain后面的状态就是reslove；如果没有被正常的处理(没有处理或者处理过程重新抛出了新的异常)，传播给promise chain之后的状态就是reject。

示例：
```js
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("message");
  }, 1000);
});

promise.then((v) => {
  console.log('first promise resloved:', v);

}).then((v) => {
  console.log('seconde promise resloved:', v);
});
```

运行结果：因为第一个callback没有显示的返回值，默认返回为`undefined`.
```bash
$ node demo.js
first promise resloved: message
seconde promise resloved: undefined
```

修改显示的返回值：
```js
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("message");
  }, 1000);
});

promise.then((v) => {
  console.log('first promise resloved:', v);
  return 'new message';
}).then((v) => {
  console.log('seconde promise resloved:', v);
});

```

运行结果为：
```bash
$ node demo.js
first promise resloved: message
seconde promise resloved: new message
```

而如果没有注册callback的时候:
```js
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("message");
  }, 1000);
});

promise.then().then((v) => {
  console.log('seconde promise resloved:', v);
});
```
运行结果：
```bash
$ node demo.js
seconde promise resloved: message
```

promise被reject，但是没有注册callback。
```js
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject("forbidden");
  }, 1000);
});

promise.then((v) => {
  console.log('first promise resloved:', v);
  return 'new message';
}).then((v) => {
  console.log('seconde promise resloved:', v);
}, (err) => {
  console.log('sconed promise rejected:', err);
});
```
运行结果:只有第二个promise的异常处理被执行
```bash
$ node demo.js
sconed promise rejected: forbidden
```
如果在reject的情况下，注册了callback
```bash
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject("forbidden");
  }, 1000);
});

promise.then(undefined, (err) => {
  console.log('first promise rejected:', err);
  return 'new message';
}).then((v) => {
  console.log('seconde promise resloved:', v);
}, (err) => {
  console.log('sconed promise rejected:', err);
});
```

运行结果是第一个promise的reject被处理，第二个promise的reslove被处理
```bash
$ node demo.js
first promise rejected: forbidden
seconde promise resloved: new message
```

如果在运行过程中出现异常：
```js

let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("message");
  }, 1000);
});

promise.then((v) => {
  console.log('first promise resloved:', v);
  throw "unknown exception";
}).then((v) => {
  console.log('seconde promise resloved:', v);
}, (err) => {
  console.log('sconed promise rejected:', err);
});
```
运行结果：
```bash
$ node demo.js
first promise resloved: message
sconed promise rejected: unknown exception
```
#### `promise.catch(fn)`
感觉就是`promise.then(undefined, fn)`的简写形式。
#### `promise.all()`
