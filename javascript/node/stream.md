# stream

stream是一个抽象的接口，有`readable`, `writable`，或者两者都是。stream是`EventEmitter`的实例


### Class: Readable

Readable就是一个数据源。只有在你开始准备接受之后，才会发送数据。

* flowing mode： 数据尽快发送给你
* paused mode：必须显示调用`stream.read()`来取得chunk。

Stream开始处于paused mode，下面的操作会将Stream切换到flowing mode。如果没有event handle，也没有`pipe()`一个目标源。而且stream切换到了flowing mode，数据将会丢失
* 给`data`事件添加一个event handle
* 调用`resume()`方法
* 调用`pipe()`将数据发送给一个Writable

也可以将Stream切换回paused mode：
* 如果没有`pipe()`目标源，调用`pause()`方法
* 如果有`pipe()`的目标源，移除所有`data`的handle，调用`unpipe()`移除所有的目标

为了向下兼容，单是移除所有的`data`handle不会切换到paused mode

* `close` 当Stream关闭时，之后不会再有任何事件发送了。
* `data` 在Stream没有显示`pause()`的情况下，添加`data`handle会导致Stream切换到flowing mode。
参数是`Buffer`类型
* `end` 表示不会再有数据发送了。
* `error` 出现错误
* `readable` 当有chunk数据可以从Stream中读取的时候，触发一个`readable`事件
？？？
The 'readable' event is not emitted in the "flowing" mode with the sole exception of the last one, on end-of-stream.
`readable`指示着:
  - 或者有新的数据了。
  - 或者说到达了数据的最末尾。使用`read()`读取数据，这种情况下将读取到`null`

`readable`什么时候会触发？ buffer满了的时候吗？

```js
process.stdin.on('readable', function () {
    var buf = process.stdin.read();
    console.dir(buf);
});
```

```bash
$ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume0.js
<Buffer 61 62 63 0a>
<Buffer 64 65 66 0a>
<Buffer 67 68 69 0a>
null
```
这里每次新的数据到来的时候，会触发一次`readable`, 当到达最后时，会再触发一次说明已经到达数据末尾了。

```js
process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    console.dir(buf);
});
```

```bash
$ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume1.js
<Buffer 61 62 63>
<Buffer 0a 64 65>
<Buffer 66 0a 67>
```
这里三次是因为每次数据读3个，最后一次没有到达末尾，所以不会触发第四次。


```js
process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    console.dir(buf);
    process.stdin.read(0);
});
```

```bash
$ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume2.js
<Buffer 61 62 63>
<Buffer 0a 64 65>
<Buffer 66 0a 67>
<Buffer 68 69 0a>
```

文章说是通过`read(0)`来告诉node我们还想继续读取数据。

这里可以再写个例子，每次写入多于6个字符，看看是不是会再读取`read(0)`之后，马上出发了第二个`readable`事件。

```js

/**
 * 等待补充测试代码....
 */

```

### Class: Writable