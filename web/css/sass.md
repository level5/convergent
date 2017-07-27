# Sass

## 变量

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
生成的css

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

```

## 嵌套

## Partials

文件以下划线`_`开头,表示不需要单独编译成css

## Import

css中的`@import`会导致额外的http请求

sass中的`@import`会在编译的过程将文件导入

## Mixins

看上去有点像定义了一个函数一样

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

生成的css

```css

.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

## 继承

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

生成的css

```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

## 运算

```scss
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```
产生

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
```


#### `&`

```scss
a {
  color: #0090B2;
  &:hover {
    color: #FF7A00;
  }
  &:active {
    color: #B25500;
  }
}
```

产生
```css
a {
  color: #0090B2;
}
a:hover {
  color: #FF7A00;
}
a:active {
  color: #B25500;
}
```
