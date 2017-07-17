# CSS

css注释
```css
/* 这部分是注释 */
* {
  margin: 0;
}
```

* 替换元素
* 非替换元素

## 选择器

* id, class, element
* 伪类
* 伪元素
* 通用选择器
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```
* 子选择器，同胞选择器
* 属性选择器

### 层叠

* `!important`
* 用户
* 作者
* 浏览器


* 选择器记分

### 继承

...

### 值

* `em`, 当前元素的`font-size`
* `rem`, 根元素的`em`

## 盒子模型

* margin
* border
* padding
* content


* margin可以为负数
* margin叠加
  1.
  2.

* `box-sizing`


## 定位
* 行内框
  ```
  display: inline;
  ```
* 快框
  ```
  display: block;
  ```

* 相对定位，会占住文档流的位置
* 绝对定位，不会占住文档流的位置
* `z-index`

## 背景

```css

h1 {
  background-image: url("/img/bullet.gif");
  background-repeat: repeat-x;/*repeat-y, no-repeat*/
  background-position: 50% 50%; /*父元素的50%的位置对应图片的50%的位置*/
}

.box {
  border-radius: 1em;
}

```

## 链接

```css
a:link {
  color: red;
}

a:visited {
  color: green;
}

a:hover, a:active {
  color: red;
}

a:hover, a:focus {
  color: red;
}

a:hover {
  text-decoration: none; /*下划线 消失*/
  font-weight: bold;
}

a:hover {
  color: #666;
  text-decoration: none;
  background-image: url(/img/underline-hover.git) repeat-x left bottom; /*图片来实现特殊下划线的效果*/
}

/*实现按钮的效果*/
a {
  display: block;
  width: 6.6em;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  border: 1px solid #66a300;
  background-color: #8cca12;
  color: #fff;
}

/*css3*/
a {
  display: block;
  width: 6.6em;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  border: 1px solid #66a300;
  background-color: #8cca12;
  color: #fff;
}
```
