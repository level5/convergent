# 攻击方式

## XSS

***Cross-Site Scripting***

网页是根据输入动态生成，网页没有对输入的数据做很好的检查，导致输入的内容生成新的DOM元素，导入js
脚本到网页中。这样用户就在受信任的网站做了一些危险的操作。

### 反射型XSS

1. 用户浏览恶意网站
2. 恶意网站将用户跳转到被攻击的网站，将恶意脚本导入到了被攻击网站。
3. 恶意脚本在用户浏览器中执行

### 存储型XSS

1. 攻击邮箱客户端或者社交网站，将输入恶意脚本，导入到社交网站中。这样就不需要将用户引诱到恶意网站。

## CSRF

***Cross-Site Request Forgeries***

1. 用户浏览恶意网站。
2. 恶意网站通过通过iframe之类的技术偷偷在页面访问被攻击的网站
3. 用户如果登陆过被攻击网站，cookie就会被发送到被攻击网站完成某些操作。

### CSRF和反射型XSS的区别

都是引诱用户到恶意网站。但是后面的步骤不一样，CSRF是影响发送到被攻击服务器的请求。而XSS是将改变发送到
被攻击服务器的请求，将脚本导入到被攻击服务器的响应中。
