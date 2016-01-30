# 媒体查询

媒体查询由一个media type和零个或者多个检查当前媒体特性的表达式组成。

```html
<link rel="stylesheet" media="screen and (color)" href="example.css" />
```

```css
@import url(color.css) screen and (color);
```


```css

/* all 可以省略 */
@media all and (min-width:500px) { … }
/* 变成这样 */
@media (min-width:500px) { … }
/* 多条媒体查询由逗号分开，如果有一条或者多条为true，则整个为true。类似于OR的语义， and关键字表示AND的语义*/
@media screen and (color), projection and (color) { … }
```

```css
@media all {
    ...
}

/* 等价于上面 */
@media  {
    ...
}
```

```css
/* not 关键字， not在查询语句之前表示反转整条语句， 当不带not的时候整条语句为false的时候，加上not就变为true了 */
<link rel="stylesheet" media="not screen and (color)" href="example.css" />

/* only关键字用来像老的user agent隐藏sheet的，user angent必须把only当做不存在一样来处理*/
<link rel="stylesheet" media="only screen and (color)" href="example.css" />
```


```css
/* 如果feature不适应某种类型的media，那么他将一直为false，比如device-aspect-ratio只适应于视觉设备。听力设备肯定返回false */
<link rel="stylesheet" media="aural and (device-aspect-ratio: 16/9)" href="example.css" />
```

### Error Handle
* Unknown media type
* Unknown media feature
* Unknown media feature value
* Malformed(畸形的) media query

### Media Features
