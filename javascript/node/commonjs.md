

## CommonJS规范

### 模块引入

```js
var math = require('math')
```


### 模块定义

```js
exports.add = function() {
    var sum = 0, i = 0;
    while (i < arguments.length) {
        sum += arguments[i++];
    }
    return sum;
}
```

### 模块加载

#### 核心模块

#### 自定义文件模块
* `.`或者`..`指明的相对路径标识，先转换为真实的路径。
* 自定义模块，查找路径是当前目录的`node_modules`目录，然后依次查找父目录的`node_modules`，直到根目录
* 文件扩展名，不包含扩展名时，依次按照`.js`, `.node`（C/C++编写的扩展文件）, `.json`的方式扩展

### 模块编译
```js
(function(exports, require, module, _filename, _dirname) {
    ...
})
```



## NPM

```bash
npm install underscore --registry=http://registry.url
```

#### 包结构

* `package.json`
* `bin`
* `lib`
* `doc`
* `test`


##### `package.json`

* `sciprts`:
* `main`: 模块入口，如果不存在这个字段，就会使用`index.js`作为入口
