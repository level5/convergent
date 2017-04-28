* 脚本中的所有编辑命令按顺序应用在输入的每一行上．
* 除非命令做了行地址的限制，命令会被应用到所有行
* 原始的输入文件是不会被修改的，编辑命令修改了原始输入的一份拷贝，并将结果输出到标准输出上．

sed是对一行应用所有的命令，然后再读取第二行．

一条sed命令可以有0个,1个或者2两个地址(地址: 正则表达式,行数,或者一个地址symbol)
* If no address is specified, then the command is applied to each line.
* If there is only one address, the command is applied to any line matching the address.
* If two comma-separated addresses are specified, the command is performed on the first line matching the first address and all succeeding lines up to and including a line matching the second address.
* If an address is followed by an exclamation mark(!), the command is applied to all lines that do not match the address

删除所有行
```sed
d
```

删除第一行,这个第一行是sed内部的计数,不管你处理多少个文件,都只有一个第一行:
```sed
1d
```

删除最后一行,要和正则表达式的$符号区分:
```sed
$d
```

删除所有行,第一行匹配第一个表达式,最后一行匹配第二个表达式.只试图匹配删除一次.sed并不会提前判断第二个条件是否匹配.他会一直执行到匹配第二个条件,如果没有就一直处理到最后
```sed
/^\.TS/,/^\.TE/d
```

```sed
/^\.TS/!,/^\.TE/!d
```

{} 对一段代码做处理:
```sed
/^\.TS/,/^\.TE/{
      /^$/d
}
```

```sed
/^\.TS/,/^\.TE/{
	/^$/d
  	s/^\.ps 10/.ps 8/
  	s/^\.vs 12/.vs 10/
}
```
{必须是一行的结束,}必须是一行的开始,而且他后面不能跟空白字符.


#### s

```bash

[address]s/pattern/replacement/flags

```

flags:
* n 替换发生在第n次匹配
* g
* p 将匹配的内容打印出来
* w file 将匹配的内容写入文件

分隔符可以使用`/`之外的其他符号


替换中的特殊字符：
* `&` 表示匹配的整个字符
* `\n` capture
* `\` 转移符

#### d

```bash

/^$/d

```

#### insert，append和change

The change command clears the pattern space, having the same effect on the pattern space as the delete command. No command following the change command in the script is applied.

The insert and append commands do not affect the contents of the pattern space. The supplied text will not match any address in subsequent commands in the script, nor can those commands affect the text. Also, the supplied text does not affect sed's internal line counter.

* All editing commands in a script are applied in order to each line of input.
* Commands are applied to all lines (globally) unless line addressing restricts the lines affected by editing commands.
* The original input file is unchanged; the editing commands modify a copy of original input line and the copy is sent to standard output.

#### list

#### transform

```bash

[address]y/abc/xyz/ # 把abc对应的字符分别替换成xyz

```


#### print

```bash

[address]p

```

#### print line number

```bash

[address]=

```

#### n(next)

输出匹配内容，然后调到下一行，但是命令不会回到第一行继续执行。


#### q(quit)

退出
