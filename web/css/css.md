# CSS

#### `background-clip`
* border-box 背景延伸到边框外沿（但是在边框之下）。这是默认值
* padding-box 边框下面没有背景，即背景延伸到内边距外沿。
* content-box 背景裁剪到内容区 (content-box) 外沿。


#### `shadow-box`

```css

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

```

* `inset`

  默认阴影在边框外。使用inset后，阴影在边框内（即使是透明边框），背景之上内容之下。
* `<offset-x> <offset-y>`

  这是头两个 length 值，用来设置阴影偏移量。`<offset-x>` 设置水平偏移量，如果是负值则阴影位于元素左边。 <offset-y> 设置垂直偏移量，如果是负值则阴影位于元素上面。
* `<blur-radius>`

  这是第三个 length 值。值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。
* `<spread-radius>`

  这是第四个 length 值。取正值时，阴影扩大；取负值时，阴影.收缩。默认为0，此时阴影与元素同样大。
* `<color>`

  如果没有指定，则由浏览器决定——通常是color的值，不过目前Safari取透明。
