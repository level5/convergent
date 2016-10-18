In Lisp, lists are evaluated by first evaluating all the arguments,
then applying the function to the arguments.

这一段是啥意思啊？没搞明白，lists are evaluated by first evaluating all the arguments
是说先计算所有的参数，然后在调用函数吗？

就是类似于scala中说的那个...

其他语言和Lisp的区别：
* 其他语言会区分语句和表达式，表达式有返回值，语句有作用，但是没有返回值。而lisp的所有表达式都返回值，有些表达式有效果，但是也有返回值
* Lisp中词法更简单，只有：括号，引号(...),空格，逗号（用来分割symbol）。

   while the statement `y=a*x+3` is analyzed as seven separate tokens in other languages, in Lisp it would be treated as a single symbol.

   To get a list of tokens, we would have to insert spaces: `(y = a * x + 3)`

* Lisp中，分号用来表示注释的开始

  `(+ 2 2) ; this is a comment`
