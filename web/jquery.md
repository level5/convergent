# Jquery

* ajax
* animate
* event



### `$`


### load

```js
jQuery(document).ready(function() {
  // ...
});
```

相同效果

```js
jQuery(function() {
  // ...
});
```

### selector

* css selector

* position filter

  ```js
  :first

  :last

  :even

  :odd

  :eq(n)

  :gt(n)

  :lt(n)
  ```
* form filter

  ```js
  input:checkbox:checked

  input:not(:checkbox)
  ```


### collection

```js

$('*').size();

$('*').length

```

获取元素

```js

$('*')[0]

$('*').get(0)

$('*').get(-1)

$('*') instanceof $
$('*').get(0) instanceof $

$('*').eq(0) instanceof $

$('*').index(<raw dom element>)

$('#id').parents('div')

$('#id').children()

$('#id').find('p')

$('tr').add('<td>')

```


```js

.filter

.map

.each

```

`end`结束前一次filter

```js
$('img')
  .filter('[title]')
  .hide()
  .end()
  .addClass('pic');
```

`addBack`

```js
$('div')
  .addClass('my-class')
  .find('img')
  .addClass('red-border')
  .addBack()
  .addClass('opaque');
```

### attribute


```js

$('#img').attr('data');
$('#img').attr('data', 1);
$('#img').attr({
  data: 1,
  src: './local'
});


$('#img').removeAttr('alt title')


$('#img').data(key, value)

// data-xxx attr or data
$('#img').data(name)
$('#img').removeData("foo bar")
$('#img').hasData(elem)
```

### maintain element

#### add or remove class

```js
$('.some').addClass('hide');
$('.some').removeClass('hide');
$('.some').removeClass('hide');

$('.some').removeClass('hide', true);
$('.some').removeClass('hide', false);

$('.some').hasClass('hide');

$('.some').css(name)
$('.some').css(name, value)
$('.some').css({
  ...
})
```


#### element content

```js

$('.some').html()
$('.some').html('<div>hello world</div>')

// 两者的区别

$('.some').text()
$('.some').text('<div>hello world</div>')


$('.some').append()
$('.some').prepend()
$('.some').before()
$('.some').after()

$('.some').appendTo()
$('.some').prependTo()
$('.some').insertBefore()
$('.some').insertAfter()


remove

detach

empty

replaceWith

```

#### form element

```js
$('.some').val()
$('.some').val(data)
```

### event

```js
$('img').on('click', function(event) {
  // ...
});
```
