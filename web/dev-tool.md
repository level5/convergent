# Guide

* 打开dev-tool的快捷键: `ctrl` + `shift` + `I`
* 打开dev-tool, 跳转到console的快捷键: `ctrl` + `shift` + `J`
* 打开dev-tool, 跳转到element的快捷键: `ctrl` + `shift` + `C`
* `ctrl` + `[`和`ctrl` + `]`来切换tab



### `console` API

```js

// time
console.time('total')

...

console.timeEnd('total')


// $(selector) returns the reference to the first DOM element with the specified CSS selector
// This function is an alias for the document.querySelector() function.
$('body')


// $$(selector) returns an array of elements that match the given CSS selector.
// This command is equivalent to calling document.querySelectorAll().
$$('div')

// $x(path) returns an array of DOM elements that match the given XPath expression.



// When the specified function is called, the debugger is invoked and breaks inside the function on the Sources panel allowing to step through the code and debug it.
function kai() {
  console.log('xx')
}
debug(kai)
undebug(kai)

// 取得对象上注册的监听
getEventListeners(document);

//　ｍｏｎｉｔｏｒ　ｆｕｎｃｔｉｏｎ
function kai() {
  console.log('xx')
}
monitor(kai)
unmonitor(kai)

monitorEvents(window, 'resize')

unmonitorEvents(window, 'resize')

```

### breakpoints

console外的其他tab,可以通过`ESC`来打开和关闭console.

* 直接在对应行加断点
* 对应行,加条件的断点, 找到行,右键`Add conditional breakpoints ...`
* DOM change breakpoints, 在Element的tab上,在元素上右键选择`Break on...`
  - Subtree modifications: Triggered when a child of the currently-selected node is removed or added, or the contents of a child are changed. Not triggered on child node attribute changes, or on any changes to the currently-selected node
