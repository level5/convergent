# CSS3


### 颜色

#### RGB

#### RGBA

#### HSL

#### HSLA



### background

#### background-color
* 初始值`transparent`
* 取值为`transparent`或者颜色值
* 不继承

#### background-image
* 初始值`none`
* 不继承

```css
button {
  background-image: none;
  background-image: url(http://www.example.com/bck.png);

  background-image: inherit;
}
```

#### background-position




### linear-gradient

颜色从一种到另一种过度

```css
button {
  /* A gradient on 45deg axis starting blue and finishing red */
  background: linear-gradient( 45deg, blue, red );          

}


button {
  /* A gradient going from the bottom right to the top left starting blue and finishing red */
  background: linear-gradient( to left top, blue, red);      

}

button {
  /* A gradient going from the bottom to top, starting blue, being green after 40% and finishing red */
  background: linear-gradient( 0deg, blue, green 40%, red );
}

```

### radial-gradient



### repeating-radial-gradient



### text-shadow

```css
.element {
  text-shadow: 1px 1px 1px #ccc;
}

.multiple {
  text-shadow: 1px 1px 1px #ccc, 4px 4px 0px #dad7d7
}
```

* 第一个参数, 右侧偏移量
* 第二个参数，下方偏移量
* 第三个参数，模糊距离
* 第四个参数，色值

### box-shadow

```css

button {
  /* offset-x | offset-y | color */
  box-shadow: 60px -16px teal;
}

button {
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

button {
  /* inset | offset-x | offset-y | color */
  box-shadow: inset 5em 1em gold;
}

```

- `inset`

  默认阴影在边框外。使用inset后，阴影在边框内（即使是透明边框），背景之上内容之下。
- `<offset-x> <offset-y>`

  这是头两个 `<length>` 值，用来设置阴影偏移量。`<offset-x>` 设置水平偏移量，如果是负值则阴影位于元素左边。 `<offset-y>` 设置垂直偏移量，如果是负值则阴影位于元素上面。可用单位请查看 `<length>` 。

  如果两者都是0，那么阴影位于元素后面。这时如果设置了`<blur-radius>` 或`<spread-radius> `则有模糊效果。
-`<blur-radius>`

  这是第三个 <length> 值。值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。
- `<spread-radius>`

  这是第四个 <length> 值。取正值时，阴影扩大；取负值时，阴影.收缩。默认为0，此时阴影与元素同样大。
- `<color>`

  相关事项查看 `<color>` 。如果没有指定，则由浏览器决定——通常是color的值，不过目前Safari取透明。


### transition css过渡

> [CSS animations triggered when elements are visible on-screen](https://www.newventuresoftware.com/blog/CSS-animations-triggered-when-elements-are-visible-on-screen)

```css

a {
  transition: box-shadow 1s ease 2.5s
}


```

- `transition-property`: 要过渡的css属性的名字, all表示所有可以过渡的属性

- `transition-duration`

- `transition-timing-function`: 定义过渡期间的速度变化(ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier)

- `transition-delay`: 定义过渡开始前的延时时间. 负数是立即开始,然后过渡过程中会半路结束

### transform 2D变形


问题: transform都是针对元素的center做的吗?

- `scale` 缩放元素
- `translate` 屏幕上移动元素
- `rotate` 按照一定角度旋转元素
- `skew` 沿X和Y轴对元素进行斜切
- `matrix` ...


```css

.scale:hover {
  transform: scale(1.4);
}

.translate:hover {
  transform: translate(-20px, -20px);
}

.outer {
  ...
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.rotate:hover {
  transform: rotate(30deg);
}

.skew:hover {
  transform: skew(40deg, 12deg);
}

```

### transform 3D变形

- `rotateX`, `rotateY`
- `translate3D`

### animation 动画

两步:
1. 定义`keyframes`
2. 在`animation`中使用定义的`keyframes`

```css

@@keyframes pulse {
  100% {
    text-shadow: 0 0 5px #bbb;
    box-shadow: 0 0 3px 4px #bbb;
  }
}

.flipper:hover flipper-horizontal {
  transform: rotateY(180deg);
  animation: pulse 1s 1s infinite alternate both;
}

```

对应的属性:
* `animation-name`
* `animation-duration`
* `animation-timing-function`
* `animation-iteration-count`
* `animation-play-state`
* `animation-delay`
* `animation-fill-mode`: 默认是动画内外不干涉, 使用次属性覆盖这种行为.
* `animation-direction`


### `calc()`

* 用0作除数会让HTML解析器抛出异常.
* `+`和`-`运算符的两边必须始终要有空白符
* `*`和`/`运算符不需要空白符，但考虑到统一性，仍然推荐加上空白符
