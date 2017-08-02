# BEM

block, element modifier

```CSS
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {}
.btn--big {}
  
```

* a block is a top-level abstraction of a new component, for example a button: `.btn { }`. This block should be thought of as a parent.
* Child items, or elements, can be placed inside and these are denoted by two underscores following the name of the block like `.btn__price { }`
* Finally, modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like `btn--orange`
