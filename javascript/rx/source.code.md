#

问题：
1.

通过`create`，`from`， `take`， `map`几个API大概了解一下RXJS的实现。

### `Observable`

* `observable.js`

  这个module主要的API就是各种`subscribe*()`,就是将传入的参数包装成一个完整的`observer`，来delegate给`_subscribe`方法。

  这段代码也说明了一点，就是subscribe一个新的observer的时候，会将`_subscribe()`方法重新执行一遍的。
  ```js
  Observable.prototype.subscribe = function (oOrOnNext, onError, onCompleted) {
    return this._subscribe(typeof oOrOnNext === 'object' ?
      oOrOnNext :
      create(oOrOnNext, onError, onCompleted));
  };
  ```

  另外一个`Observable.addToPrototype`，每个add到`prototype`的方法的第一个参数都是`Observable`本身，然后第二个参数起才是调用方法时传入的参数。

  也就是说，这个方法确保被加入的方法的第一个参数是`this`
  ```js
  Observable.addToPrototype = function (operators) {
    Object.keys(operators).forEach(function (operator) {
      Observable.prototype[operator] = function () {
        var args = [this];
        args.push.apply(args, arguments);
        return operators[operator].apply(null, args);
      };
    });
  };
  ```

  这三行：

  ```js
  var args = [this];
  args.push.apply(args, arguments);
  return operators[operator].apply(null, args);
  ```


* `anonymousobservable.js`

  暂时忽略`schedule`的话，这个module的逻辑就是在`_subscribe()`方法中，调用了`setDisposable`，其实相对来说，就是执行完注册进来的`__subscribe()`之后，调用一下他返回的clean函数。

  问题:
  1. `this.source`的用途


* `Rx.Observable.create`

  这个方法是使用`anonymousobservable`来创建的。

* `observablebase.js`

  和`anonymousobservable`的区别就是改调用`_subscribe()`为调用`subscribeCore()`. 然后`subscribeCore()`需要继承这个module的来实现。

  另外一点是，`subscribeCore()`生成的`disposable`会被set到`observer`中去，这就给了`take()`之类的`observer`一个机会来cancel掉已经启动的`observable`

* `Rx.Observable.from`

  哎，这个方法就需要我来研究研究`schedule`到底怎么工作的了

### `Observer`


### `Disposable`

当`dispose()`方法被调用时，触发action，同时保证action只被调用一次。

这段代码就说明了功能：
```js
function Disposable (action) {
  this.isDisposed = false;
  this.action = action || noop;
}

Disposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.action();
    this.isDisposed = true;
  }
};
```

对应的工厂方法：
```js
Disposable.create = function (action) { return new Disposable(action); };

Disposable.empty = { dispose: noop };
```


* `CompositeDisposable`表示一组`Disposable`


### `scheduler`

`scheduler`主要有几个

* `scheduleRecursive()` 稍微难于理解一点的方法。就是递归调用自己本身，其实就是接受一个`action`， 这个`action`的最后一个参数其实就是重复调用自己本身。

* `scheduleRecursiveFuture()` 另外一个方法，类似于上面的，就是`action`最后一个参数被调用时，需要多介绍


#### `CurrentThreadScheduler`

默认的`scheduler`，使用的是


### `Subject`
