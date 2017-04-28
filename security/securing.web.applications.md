# securing

owasp

#### form

```html

<form autocomplete />

```

#### cookie
* persistent cookie
* session cookie cookie在所有tab之间共享。关闭浏览器，session cookie才会消失

```js

document.cookie

```


#### html5 client-side storage API

sessionStorage应该和session Cookie的概念是一样的把


#### 保证服务的interity

tripwire
原理：计算目录或者文件的hash值。


#### log file

* get big
* 可以一直发送请求来让服务器挂掉
