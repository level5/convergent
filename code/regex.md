# 正则表达式

## 基本知识

* 匹配行的起始和结束`^cat$` `^`表示一行的开始，`$`表示一行的结束。

  ```js
  /^$/ // 匹配一个空行
  ```

* 匹配若干字符之一`[123456]`

  ```js
  /[12345]/   //
  /[^12345]/  //
  /[1-5]/     //
  /[-1-5]/
  ```

* `.`匹配任意字符

* `|` 表示选择

* 忽略大小写 ？how

* 单词分界符

* 量词`+`, `*`, `?`, `{n, m}`

* 括号
  - 捕获`/([a-z]+)/`，非捕获`/(?:[a-z]+)/`
  - 反向引用`/([a-z]+) \1/`

* 环视，不匹配任何字符，只匹配文本中特定的位置