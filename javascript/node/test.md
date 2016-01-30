# Test

## Mocha

#### 安装：
```bash
# 安装 mocha
$ npm install mocha -g
# 安装chai
$ npm install chai
```

我喜欢`should`风格, 但是chai的should有点弱，还是比较喜欢should库，只是grommet用的chai，就凑合用吧。

#### 被测试代码:
```js
// demo.js
exports.max = (a, b) =>　a > b ? a : b;
exports.min = exports.max;
```

#### case:

```js
// demo-test.js
var should = require('chai').should();
var demo = require('./demo');

describe('This is a demo', () => {

  it('应该获取做大的number', () => {
    demo.max(10, 20).should.eql(20);
  });

  it('应该获取最小的number', () => {
    demo.min(10, 20).should.eql(10);
  });
});

```

#### 执行：
执行测试：
```bash
$ mocha demo-test.js


  This is a demo
    √ 应该获取做大的number
    1) 应该获取最小的number


  1 passing (15ms)
  1 failing

  1) This is a demo 应该获取最小的number:

      AssertionError: expected 20 to deeply equal 10
      + expected - actual

      -20
      +10

      at Context.<anonymous> (c:\github\LaTeX\programming\code\javascript\test\demo-test.js:12:29)

```

如果不全局安装的话，就需要指定对应module的bin目录下面的文件
```bash
$ ../node_modules/mocha/bin/mocha demo-test.js
```

也可以在`package.json`的`scripts`来定义，这个时候module的bin会被加入到`path`中
```js
{
  ...
  scripts: {
    test：'mocha demo-test.js'
  }
}
```

如果需要使用`node`还不支持的语法，使用babel(需要先安装babel)来执行：
```bash
$ mocha --compilers js:babel-core/register -R spec test/demo-test.js
```

可以定义一个脚本来执行一个目录下面的所有test文件
```bash
#!/bin/bash
find . -name '*-test.js' | xargs mocha -R spec
```




#### 示例

```js
it('测试chai should的用法', () => {

  (true).should.be.true;

  ([1, 2, 3]).should.eql([1, 2, 3]);
  // 深度匹配
  ({ foo: { bar: 100}}).should.eql({ foo: { bar: 100}});

  // equal 就是 ===
  ([1, 2, 3]).should.not.equal([1, 2, 3]);
  ("1").should.not.equal(1);
  (1).should.equal(1);

});
```

#### 异步case

对于异步的case，mocha的写法和同步的写法不一样。
```js
// demo.js
exports.asyncCall = (fn) => {
  setTimeout(() => {
    fn('message');
  }, 100);
}

// demo-test.js
// 这样的case永远不会失败，因为抛出的异常没有办法在case外层捕获
it('错误的测试异步调用', () => {
  demo.asyncCall((message) => {
    message.should.eql("wrong message");
  });
})
```
虽然case写错了，但是执行还是正常结束。
```bash
$ mocha demo-test.js


  This is a demo
    √ 错误的测试异步调用


  1 passing (15ms)
```
正确的异步case的写法是, 对方法传入一个参数`done`，然后在异步调用中执行`done()`表示方法结束。
```js
// demo-test.js
it('正确的测试异步调用', (done) => {
  demo.asyncCall((message) => {
    message.should.eql("wrong message");
    done();
  });
})
```
执行结果：
```bash
$ mocha demo-test.js


  This is a demo
    1) 正确的测试异步调用


  0 passing (1s)
  1 failing

  1) This is a demo 正确的测试异步调用:

      Uncaught AssertionError: expected 'message' to deeply equal 'wrong message
'
      + expected - actual

      -message
      +wrong message

      at c:\github\LaTeX\programming\code\javascript\test\demo-test.js:11:22
      at null._onTimeout (c:\github\LaTeX\programming\code\javascript\test\demo.
js:6:5)
```
这个之所以能够取得正确的结果，是因为对于没有捕获的Exception，node可以注册一个全局的处理函数。mocha可以通过这个全局的处理函数可以来捕获到这个异常。

这个全局处理函数的注册方式
```js
var process = require('process')
process.on('uncaughtException', function(e) {
  console.error(e);
});
```

比如，假如在case中将这个全局的处理函数移除掉,并注册一个什么都不干的处理函数来消除这个异常：
```js
it('正确的测试异步调用', (done) => {    
  process.removeAllListeners('uncaughtException');
  process.on('uncaughtException', (e) => {})
  demo.asyncCall((message) => {
    message.should.eql("wrong message");
    done();
  });
})
```
这个时候运行结果将是：
```bash
$ mocha demo-test.js


  This is a demo
    1) 正确的测试异步调用


  0 passing (2s)
  1 failing

  1) This is a demo 正确的测试异步调用:
     Error: timeout of 2000ms exceeded. Ensure the done() callback is being call
ed in this test.

```
虽然case失败了，但是是显示的超时，说明的是`done()`没有被调用，但是错误信息就不能够取得了。

#### 异步case 使用promise


对于`promise`来说，这种异步case就直接返回promise就可以了,这个时候测试方法不需要传入done。

```js
// demo.js
exports.promise = () => {
  return Promise.resolve("message");
}

// demo-test.js
it('promise的检测', () => {
  var promise = demo.promise();
  // 这是因为promise chain的形式来传播。另外一个文件中做了说明，就不写了。
  return promise.then((message) => {
    message.should.eql("wrong message");
  });
})
```

也可以使用chai的promise插件来处理

安装：
```bash
npm install chai-as-promised
```

然后在`require`chai的地方加上
```js
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
```

然后case的写法就可以这样，如果只是要验证promise中reslove的值:
```js
it('promise plugin 检测', () => {
  return demo.promise().should.eventually.eql('message');
});
```


## Sinon
解除依赖。
- Spy, spy的作用就是用来记录方法调用的参数和返回的值
- Stub, stub的话，包含spy的所有功能，还可以用来预先定义方法的行为。如果相对预先设定的方法是否被调用做验证，最好使用mock
- Mock, 包含所有spy和stub的功能，还可以对方法的调用做verify
- Fake timers, 替换掉global的`setTimeout`, `clearTimeout`, `setInterval`, `clearInterval`和`Date`,来触发定时器之类的东西
- sandbox 方便的`restore`


#### sandbox

使用sinon的时候，每次执行完case我们都需要对mock的对象进行`restore`。
```js
describe('This is a demo', () => {

  let api = require('./customAPI');
  let spy;
  beforeEach(() => {
    spy = sinon.spy(api, 'get');
  });

  afterEach(() => {
    api.get.restore();
  });

  it('spy method', () => {
    demo.hello().should.eql('hello Ronald!');
    spy.callCount.should.eql(1);
  });
});
```

这个时候，如果使用sandbox，就可以省略很多代码
```js
describe('This is a demo', () => {

  it('spy method', sinon.test(function() {
    let api = require('./customAPI');
    let spy = this.spy(api, 'get');
    demo.hello().should.eql('hello Ronald!');
    spy.callCount.should.eql(1);
  }));
});
```

这个时候，使用`sinon.test()`.同时要注意不是使用`sinon.spy()`，而是使用`this.spy()`. 不能使用arrow function了。因为arrow function的`this`是绑定到当前的`this`的。

#### spy

spy的话，就是用来记录函数的输入和输出。被spy的函数是会被调用到的。

```js
describe('This is a demo', () => {

  it('spy method', sinon.test(function() {
    let api = require('./customAPI');
    let spy = this.spy(api, 'get');

    demo.hello().should.eql('hello Ronald!');

    spy.callCount.should.eql(1);
    spy.getCall(0).args[0].should.eql('name');
    spy.returnValues[0].should.eql('Ronald');
  }));
});
```


#### stub

stub相对于spy，多一个功能，就是可以预定义stub的函数的返回值。原来的函数不会被调用

```js
describe('This is a demo', () => {

  it('spy method', sinon.test(function() {
    let api = require('./customAPI');
    let stub = this.stub(api, 'get');
    stub.returns('Vieri');

    demo.hello().should.eql('hello Vieri!');

  }));
});
```

#### mock

如果还想对方法的调用做verify，使用mock，这是mock相对于stub多出来的功能。


## Rewire
而对于module中没有export的方法，直接通过load进来是没有办法访问的，这个时候，可以使用rewire来达到测试没有export的函数。


## Code Coverage

### framework 1

### framwork 2
