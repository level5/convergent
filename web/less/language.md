# 语法

## 变量


```less
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
  color: @light-blue;
}
```

```css
#header {
  color: #6c94be;
}
```


## mixins

可以将一个bunch的属性都包含进来

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

```
#menu a {
  color: #111;
  .bordered;
}

.post a {
  color: red;
  .bordered;
}
```
