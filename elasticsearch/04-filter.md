# Filter

使用filter很快，因为不需要像search一样计算相关性。


When executing a filtered query, the filter is executed before the query.

### term

It is important to understand that term and terms are contains operations, not equals.

这里contains的意思，查询对象包含这个词，而不是查询对象的某个词的substring。
