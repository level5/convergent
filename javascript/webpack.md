# Webpack

好吧，我发现自己其实是需要一个完全，详细的guid的。

安装webpack
```bash

$ npm install webpack -g

```

> 安装nodejs来安装npm

> `-g`全局安装。是的可以执行安装module的命令。如果不带`-g`，通过`./node_modules/.bin/webpack`也可以执行对应命令


### Configuration File

* HMR Hot Module Replacement
* Bundle Splitting
* Asset Hashing


1. 配置
  * 拆分成多个配置文件， 通过`--config`来指定所使用的config文件
  * 使用一个单一的配置文件，但是包含多个分支，通过npm的环境变量来决定最终产生的配置
2. 执行
3. 设置dev server
4. 将bundle文件拆分成应用和vender代码，这样方便不变代码进行缓存。


## 插件

配置：
```js
plugins: [
    new MyPlugin({options: 'nada'})
]
```

> 我的问题：
> 1. Plugin本质是什么？
> 2. Plugin的输入是什么，输出是什么？
> 3. Plugin什么时候被执行？什么顺序被执行？


预备知识：

* `compiler` 就是一个关于webpack的对象，在webpack运行的时候创建起来，包含了webpack的各种配置，loaders，plugins的信息。当一个plugin被执行的时候。这个对象的引用会被传递给这个plugin。可以使用这个对象来进入webpack的环境。
* plugin在webpack启动的时候就创建了，通过调用`apply`方法，传入一个`compiler`的引用。 你可以通过调用`compiler.plugin`来访问`compilation`和他们独立的build步骤。

  ```js
  // MyPlugin.js

  function MyPlugin(options) {
    // Configure your plugin with options...
  }

  // apply必须定义在原型链上
  MyPlugin.prototype.apply = function(compiler) {
    compiler.plugin("compile", function(params) {
      console.log("The compiler is starting to compile...");
    });

    compiler.plugin("compilation", function(compilation) {
      console.log("The compiler is starting a new compilation...");

      compilation.plugin("optimize", function() {
        console.log("The compilation is starting to optimize files...");
      });
    });

    compiler.plugin("emit", function(compilation, callback) {
      console.log("The compilation is going to emit files...");
      callback();
    });
  };

  module.exports = MyPlugin;
  ```

* `compilation` 对下来，代表整个resource的处理。提供了一个生命周期来注册回调函数

plugin的作用：
* inject custom build step


## SHIMMING MODULES


### exports-loader

### imports-loader

### ProviderPlugin

### expose-loader(不推荐)

## Code Splitting

* 通过entry point来分割
  - 重复代码
  - 不能动态的分割代码

* 使用`commonsChunkPlugin`

* dynamic load
   - `import()`返回promise
