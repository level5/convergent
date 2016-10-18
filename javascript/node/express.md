# Express


## Log

类似于apache的`access.log`和`error.log`.默认情况下是关闭的。

`access.log`需要使用`Log`中间件
```js
var fs = require('fs');
var access_logfile = fs.createWriteStream('./access.log', {flags: 'a'});

app.configure(function(){
    app.use(express.logger({stream: access_logfile }));
    app.set('views', __dirname + '/views');
    ...
});
```

`error.log`需要安装`forever`包

```bash
$ forever -e error.log start app.js
```
