# sass

## 各种语法

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

```scss
@mixin string-concat {
    &:after {
        content: "My favorite language is " + Sass;
        font: Arial + " sans-serif";
    }
}

h2 {
    @include string-concat;
}
```

产生

```css
h2:after {
    content: "My favorite language is Sass";
    font: Arial sans-serif;
}
```

#### mixin

`+`表示`@include`, `=`表示`@mixin`

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

产生
```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

#### inherit


#### `@each`

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

产生
```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

在中间可以使用`index($value, $list)`
> returns the position (from 1 to list length) of a value within a list and will return false if it cannot find the value.

还有`nth($list, $position)`
> grab a specific value from a list by it’s position in the list (from 1 to list length). It takes two parameters – the list that you wish to search and the position of the item you want to retrieve.


#### `@content`

```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

```css
* html #logo {
  background-image: url(/logo.gif);
}
```
