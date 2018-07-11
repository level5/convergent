# BEM

* Block
* Element
* Modifier


例子：
```css

/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__price {}

/* Modifier that change the style of the block */
.btn--orange {}
.btn--big {}

```

**block** is a top level abstraction of a new component, for example a button `.btn {}`. This block should be thought of as a parent. Child items, or **element**, can be placed inside and these are denoted by two underscores following the name of the block like `.btn__price {}`. Finally, **modifiers** can manipulate the block so that we can theme or style that particular component without inflicting(造成) changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like `.btn--orange {}`

```html

<a class="btn btn--big btn--orange" href="http://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>

```

without writing much CSS, developers are potentially capable of creating many different combinations of buttons.

*** Why should we consider BEM? ***

1. if we want to make a new style of a component, we can easily see which modifiers and children already exist.

2. if we are reading the markup instead of CSS, we should be able to quickly get an idea of which element depends on another.(`.btn__price` depends on `.btn`)

3. Designers and developers can consistently name components for easier communication between team members.

*** Problem with BEM CSS ***

```css

.nav .nav__listItem .btn--orange {
  background-color: green;
}

```

A block (such as `.nav`) should never override the styles of another block or modifier (such as `.btn--orange`). Otherwise this would make it almost impossible to read the HTML and understand what this component does.

```html

<a class="btn" href="http://css-tricks.com">
  <div class="nav__listItem">Item one</div>
  <div class="nav__listItem">Item two</div>
</a>

```

 an element in a completely unrelated block has the code a developer needed, but the child elements don't require a `.nav` class as the parent

 1. Never overriding modifiers in an unrelated block.

 2. Avoiding making unnecessary parent elements when the child can exist quite happily by itself.
