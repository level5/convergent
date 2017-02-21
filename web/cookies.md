# cookies

HTTP是无状态的。

可以向我们现在做的那样：
* 在url中使用query参数
* 使用hidden字段

浏览器在用户机器中保存的一段text文件。纯文本，不包含代码。

web page 或者服务器告诉浏览器保存这些信息，并且在接下来的请求中, browser按一定的规则附带这些信息，服务器可以使用这些信息来区分不同的用
户.

## 格式

web服务器通过HTTP header`Set-Cookie`来告诉浏览器保存cookie
```
Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]
```

### value

格式是
```
name=value
```

当cookie存在之后，后面的每次请求，cookie都会被发送到服务器。

```
Cookie: value
```

### Expries

每一个选项通过分号和空格隔开。第一个是 expires，说明什么时候 cookie 不需要再发送给 web 服务器，并且可能被浏览器删除掉，这个选项的值是一个 Date

如果没有定义 expires， cookie 的生命周期是单个的 session。 session 的结束定义为浏览器关闭。

### Domain

domain 选项，指定 cookie 改发送到哪个 domain。默认情况下， domain 被设定为当前页面的 host name。

比如说 yahoo 有很多格式如 name.yahoo.com 的网站（ my.yahoo.com, finance.yahoo.com） , 如果将 domain 设定为 (yahoo.com) 的话，访问所有这些网站的时候都会带上这个 cookie。

自己设定的 domain 只能是设定 cookie 页面的 host name 的一部分

### Path

发送 cookie 前先要判断 path 是否包含在发送的页面中。这个时候就是从路径的开始一个字符一个字符的匹配。

```
Set-Cookie: name=Nicholas; path=/blog
```

### Secure

最后是 secure，这个没有值。如果有这个选项，则 cookie 只有在 SSL 或者是 HTTPS 的时候才会发送。 cookie 通
过 HTTPS 设定的时候，自动被加上 secure 选项。


## 管理
This cookie has four identifying characteristics: the cookie name, the domain, the path, and the secure flag.

在重新设定 cookie 的值得时候， name， domain 和 path 都需要带，而且相同才能设定。
