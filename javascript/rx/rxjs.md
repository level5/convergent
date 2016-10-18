# ReactiveX

对观察者模式的补充，两个额外的属性
* 生产者通知消费者没有更多的数据了， 通过调用observer的`onCompleted()`方法。
* 生产者通知消费者错误发生了，通过调用observer的`onError()`方法。

### callback的缺点
* callback地狱
* callback可以被调用多次！！！！！！不能保证callback只被调用一次。

### promise
* promise只能处理单个值


### event
* event listener 一般忽略返回值，所以导致listener都有副作用；
* 没办法处理一系列连续的events，只能单独分开来处理
* 如果listener太晚，丢失了的event就永远丢失了

If an action has impact outside of the scope where it happens, we call this a side effect.

### Observer Pattern & Iterator Pattern

### Rx Pattern

Rx Pattern是Observer Pattern和Iterator Pattern的组合
* Observable Sequence按顺序emit值，类似于Iterator Pattern，但是Observable是使用Push，而不是消费者pull的方式。

* Observable直到有至少一个Observer开始订阅他才会开始streaming items。
* 和iterators一样，当sequence完成时，Observable会发送completed信号
* Like iterators, an Observable can signal when the sequence is completed.

### Observable


#### event

* `onNext`(`emission`)
* `onError`(`notification`), 之后不会再调用`onNext`或者`onCompleted`.
* `onCompleted`(`notification`)


#### hot and code observable

### Operator

Operator操作observable,然后返回一个新的observable.

#### 创建Observable
* create
  创建一个Observable。
* defer
  只有在subscribe的时候才创建Observable，为每一个observer创建一个新的Observable
* empty, never, throw
  - Empty，不会push元素，直接结束
  - Never， 永远不会push元素，也不结束
  - Throw， 直接抛出异常
* fromXXX
  各种数据结构转换为Observable
* interval
  按一定时间间隔push整数，从0开始，每次加1
* return / just
  生成Observable，push单个元素。
* range
  很好理解
* doWhile, repeat, while
* start
* timer

### Single

### Subject

### Scheduler
