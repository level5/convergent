# 查询


这么说，分析器应该有两部分，一个是保存进来的文档需要经过分析器处理，生成倒排索引？

然后的还有一个查询的分析器，分析查询的字段，然后再在倒排索引中查询？



* charfilter： 在string被tokenizer处理之前，对string进行转换，比如删除html中的标签，将`&`转换成and。
* tokenizer：就是将一个string转换为一系列的term（词）或者token。
* tokenfilter：处理tokenizer生成的term或者token，比如转换成小写，删除或者增加一些token。



貌似有了长度限制，没有完全匹配起来


这个说法：
>you can find only terms that exist in the inverted index.

对吗？
