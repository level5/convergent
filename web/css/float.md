## float


float是box在**当前行**向左或者向右移动。float属性仅仅适应于不是绝对定位的元素。根元素的float属性被user agent当做`none`。

floating box的margin不会和相邻box的margin发生collapse。

父元素也float的时候，子元素float也会被包括在其中。

父元素设定了`overflow:hidden`，会包含子float元素

### float的一些规则：
- 会一某种方式将浮动元素从文档流中删除
- 浮动元素的外边距不会合并
- 非替换元素浮动，必须指定width，否则宽度为0
- none表示不浮动
- 浮动元素的包含块是其最近的块级祖先元素，浮动元素会生成一个会计元素

### float的一些细节：
- 浮动元素的左（右）外边界不能超出其包含块的左（右）内边界。

- 浮动元素的左（右）边界必须是源文档中之前出现的左（右）浮动元素的右（左）边界，除非后出现浮动元素的顶端在先出现元素的底端下面。

  这条规则用来防止浮动元素相互覆盖

  也就是说，一个元素往左浮动，他必须出现再原来已经左浮动的元素的右边，或者，如果这个浮动元素的顶端在原来浮动元素的下面，那么这个元素就可以一直浮动到父元素的左内边界。

- 左浮动元素的右边界，不会再起右边右浮动元素的左边界的右边，有个右浮动元素的左边界，不会再起左边的左浮动元素的右边界的左边。

  这条规则用来防止浮动元素重叠。

- 一个浮动元素的顶端不能比其父元素的顶端更高。

- 如果一个浮动元素在恋歌合并外边界之间。放置这个浮动元素时，就好像两个元素之间有一个块级父元素。

  使用三个段落，浮动中间的段落查看效果。



### 原文

A float is a box that is shifted to the left or right on **the current line**. This property specifies whether a box should float to the left, right, or not at all. only applies to elements that generate boxes that are **not absolutely positioned**.

User agents may treat float as 'none' on the root element.

the margins of floating boxes never collapse with margins of adjacent boxes


The contents of floats are stacked as if floats generated new stacking contexts, except that any positioned elements and elements that actually create new stacking contexts take part in the float's parent stacking context.

A float can overlap other boxes in the normal flow (e.g., when a normal flow box next to a float has negative margins). When this happens, floats are rendered in front of non-positioned in-flow blocks, but behind in-flow inlines.
