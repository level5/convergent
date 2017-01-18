# CSS3


### background

#### background-color
* 初始值`transparent`
* 取值为`transparent`或者颜色值
* 不继承

#### background-image
* 初始值`none`
* 不继承

```css
background-image: none;
background-image: url(http://www.example.com/bck.png);

background-image: inherit;
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