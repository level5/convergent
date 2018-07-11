# Centering

## Horizontally

#### inline or inline-* element

You can center inline elements horizontally, within a block-level parent element, with just:

```css

.center-children {
  text-align: center;
}

```

This will work for inline, inline-block, inline-table, inline-flex, etc.


#### block level element

You can center a block-level element by giving it `margin-left` and `margin-right` of `auto` (and **it has a set width**, otherwise it would be full width and wouldn't need centering). That's often done with shorthand like this:

```css

.center-me {
  margin: 0 auto;
}

```

#### more than one block element

If you have two or more block-level elements that need to be centered horizontally in a row, chances are you'd be better served making them a different `display` type.

making them `inline-block`

flexbox


## Vertically

#### inline or inline-* elements

* a single line

  Sometimes inline / text elements can appear vertically centered, just because there is equal padding above and below them.
  ```css

  .link {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  ```

  If padding isn't an option for some reason, and you're trying to center some text that you know will not wrap, there is a trick were making the `line-height` equal to the height will `center` the text.

  ```css

  .center-text-trick {
    height: 100px;
    line-height: 100px;
    white-space: nowrap;
  }

  ```

* multiple lines

  Equal padding on top and bottom can give the centered effect for multiple lines of text too.

  or use flexbox

  ```css

  .flex-center-vertically {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
  }

  ```

#### block level element

* know height of the element

  ```css

  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    height: 100px;
    margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
  }

  ```

* don't know height of the element

  ```css

  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ```

* flexbox

  ```css

  .parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ```

## Both Horizontally and Vertically

#### fixed width and height

```css

.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}

```

#### unknown width and height

```css

.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```

#### flexbox

```css

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

```
