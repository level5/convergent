# Apache

## 安装

### 自己通过源码编译

这里有一个区分就是module的静态包含或者动态包含（具体说法应该不是这样的，带后面更新...）

## 启动


### 启动
- 如果port指定为默认的80，或者小于1024.需要root权限
- 主进程以root权限运行，而子进程会以更小的权限的用户运行
- 使用`apachectl`脚本来运行。他会设定一些使得apache在各个系统下正确运行的环境变量，然后调用`httpd`这个二进制文件。
`apachectl`接受任意参数，所以`httpd`的参数也可以通过他传入。

    接受`start`, `restart`和`stop`作为参数。

- `httpd`的第一步是定位和读取`httpd.conf`文件，这个文件的位置是在编译时设定的，也可以在运行时使用`-f`指定。
```bash
$ /usr/local/apache2/bin/apachectl -f /usr/local/apache2/conf/httpd.conf
```
- 启动之后，server会从终端detach。

#### 端口和地址设定
`httpd.conf`文件中设置：通过`Listen`来设定。
* 如果只设置了port，就是在所有interface的设定端口上接受请求
```
Listen 80
```
* 如果设置了IP加port，就是指定接口的指定端口上接受请求
```
isten 192.0.2.1:80
```
* IPV6需要使用方括号括起来
```
Listen [2001:db8::a00:20ff:fea7:ccea]:80
```
* 可以设置多个`Listen`
```
Listen 80
Listen 8000
```
* `Listen`出现重叠时会报错

* 指定监听特定协议。在没有指定的情况下，`433`端口监听https协议，其他端口监听http协议。
```
Listen 192.170.2.1:8443 https
```

####　VirtualHost

```
待补充...
```

#### 配置文件

apache http 服务器是通过配置directive在文本中来实现配置的。主要的配置文件一般命名为`httpd.conf`.这个文件的位置是在编译的时候指定的，但是也可以通过`-f`选项来在运行时强制指定。而其他的配置文件可以通过`Include` directive来包含进来。主配置文件的修改需要重启server才能生效。

什么是`directive` ?

答：


* 配置文件每行包含一个directive,可以在一行的最后使用`\`转义符来表示这个directive包含多行。
* directive的参数通过空格隔开。如果参数包含空格，那就需要使用引号将参数引起来。
* dirctive不是大小写敏感，但是参数一般是大小写敏感的。 `#`开头的行是注释
* 变量，shell定义的环境变量，或者Define定义的变量，可以使用`${VAR}`来引用。  Define定义的变量优先于shell定义的环境变量，如果`${VAR}`中的VAR没有找到，就整个字符串保持不变。
```xml
<IfDefine TEST>
  Define servername test.example.com
</IfDefine>
<IfDefine !TEST>
  Define servername www.example.com
  Define SSL
</IfDefine>
```
* 可以使用命令`apachectl configtest`或者`apachectl -t`来检查配置文件的语法，而不需要启动server
* mod_info的 `-DDUMP_CONFIG`来dump resolve之后的配置
```
暂时没有搞清楚mod_info什么意思，待补充...
```

#### 模块
* 如果server是编译成使用动态模块的话(是不是就是编译前执行`./configure时设定static`就是表示静态模块？)，可以随时通过Directive添加模块.
* 可以使用Configuration directives来包含一个模块. `<IfModule> `
* To see which modules are currently compiled into the server, you can use the -l command line option. You can also see what modules are loaded dynamically using the -M command line option.(在什么上面执行呢？？)


#### Diretive的作用域
- 在主配置文件中配置的Directive对整个server生效。
- `.htaccess`对他放置的目录的访问生效

#### Configuration Section Containers
- `<IfDefine>`, `<IfModule>`, 和 `<IfVersion>`只有在启动的时候才被执行，如果条件满足，包含的Directive就对所有request起作用，如果条件不满足，就被忽略


```bash
#　所有请求都会被重定向到其他网站，如果这样启动：` httpd -DClosedForNow`
<IfDefine ClosedForNow>
    Redirect "/" "http://otherserver.example.com/"
</IfDefine>
```

```bash
# mod_mime_magic可用的时候(这个模块静态编译了，或者动态编译，并且LoadModule必须在这个的前面)，MimeMagicFile才会被应用
<IfModule mod_mime_magic.c>
    MimeMagicFile "conf/magic"
</IfModule>
```

```bash
# httpd版本相关
<IfVersion >= 2.4>
    # this happens only in versions greater or
    # equal 2.4.0.
</IfVersion>
```

### 启动时的错误
会在推出前，将错误信息打印在控制台或者`Errorlog`中。

### 开机启动
可以在`rc.local`中设定为开机启动。

### 重启和关闭

1. 通过发送signal到`httpd`进程,使用kill命令，但是只应该给所有的`httpd`相关进程的父进程发送`kill`信号。可以在。

`httpd`接受的信号： `TERM`, `USR1`, `HUP`和`WINCH`。

2. 使用`httpd`带上`-k`选项：`stop`, `restart`, `graceful`, `graceful-stop`. 但是最好还是使用`apchectl`脚本。

当使用了上面的命令之后，可以通过下面的方式来查看状态。
```bash
tail -f /usr/local/apache2/logs/error_log
```

#### 立即停止
* TERM信号
* `apachectl -k stop`

#### 优雅的重启
* USR1
* `apachectl -k graceful`

#### 立即重启
* HUP
* `apachectl -k restart`

#### 优雅的停止
* WINCH
* `apachectl -k graceful-stop`


## 文件映射
- `DocumentRoot`: 文件映射使用的是`DocumentRoot`这个directive来定义根目录的。
- `DirectoryIndex`: 当目录被访问是，定义他的欢迎页面. (还有一个 mod_autoindex 的模块会自动来提供欢迎页面)
- `Alias`： 映射文件目录路径到对应的网络路径
- 对Link文件的访问，只有对应的Directory设定了了`Options FollowSymLinks`或者`SymLinksIfOwnerMatch`
- `Redirect`: 重定向一个请求
    * `permanent`:
    * `temp`:
    * 感觉这两个是导致的结果应该是返回的Status code不同，待测试...
- 反向代理：（文档中的链接是不会被重写的， 可以使用mod_substitute模块来做这个事情，还有 mod_proxy_html ？？）
    * `ProxyPass`:
    * `ProxyPassReverse`: 会重写重定向的URL
    * 更强大的mod_rewrite模块
- mod_speling模块，拦截文件未找到错误，来查找一个名字相近的文件。

## 日志

#### Error Log
服务器错误信息，位置由`ErrorLog` derective来确定的。这是最重要的一个日志信息。记录了处理请求是的错误。这是出错时第一个应该检查的地方。他会提示错误信息以及错误的处理方式。

```bash
# ErrorLog: The location of the error log file.
# If you do not specify an ErrorLog directive within a <VirtualHost>
# container, error messages relating to that virtual host will be
# logged here.  If you *do* define an error logfile for a <VirtualHost>
# container, that host's errors will be logged there and not here.
#
ErrorLog "logs/error_log"
```

可以通过`LogLevel` derective来设置具体某个module的日志级别。方便调试。

比如：
```bash
LogLevel info rewrite:trace5
```
这段设置将主要的日志设定为info级别，但是将mod_rewrite module的日志设定为trace5级别。

#### Access Log
access log 记录了server处理的所有request。 位置和内容由`CustomLog`这个directive来确定， `LogFormat`这个directive用来格式化日志输出的内容。

```bash
LogFormat "%h %l %u %t \"%r\" %>s %b" common
CustomLog logs/access_log common
```
这里给一个特定的格式化字符串定义了一个nickname叫做common。

而`CustomLog`定义了一个新的日志文件，使用了上面的格式，而他的文件名是相对于`ServerRoot`的，除非是使用的绝对路径(其实就是相对路径是相对于`ServerRoot`).


可以使用`CustomLog`来指定多个access log.
```bash
# 这里的Referer和User-agent就是请求的头。
# 定义了三个access log
LogFormat "%h %l %u %t \"%r\" %>s %b" common
CustomLog logs/access_log common
CustomLog logs/referer_log "%{Referer}i -> %U"
CustomLog logs/agent_log "%{User-agent}i"
```

还可以使用条件：
```bash
# Mark requests from the loop-back interface
SetEnvIf Remote_Addr "127\.0\.0\.1" dontlog
# Mark requests for the robots.txt file
SetEnvIf Request_URI "^/robots\.txt$" dontlog
# Log what remains
# 这里应该是exclude满足上面条件的日志吧
CustomLog logs/access_log common env=!dontlog
```

#### Piped Log
httpd可以将日志通过管道写入到另外一个进程。配置方式就是将写入的文件使用"|" +　要启动的程序（这个程序的标准输入就是接受httpd日志的地方）。

比如httpd提供了一个简单的循环写入的程序，每24小时滚动一下日志。
```bash
CustomLog "|/usr/local/apache/bin/rotatelogs /var/log/access_log 86400" common
```

## 模块

### mod_proxy
代理(正向，反向)，负载均衡

对应模块：
* mod_proxy, 基本的代理能力
* mod_proxy_balancer 负载均衡
* mod_proxy_wstunnel WS,WSS

## Virtual Host
就是一台机器运行多个web site，`IP-Based`就是不同的IP地址对应不同的web site
