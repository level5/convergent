# 查询

* Map
* Analysis
* Query DSL


### 查询URL

* `/_search` 在所有的index中查询所有的type
* `/gb/_search` 查询index gb下的所有type
* `/gb,us/_search`
* `/g*,u*/_search`
* `/gb/user/_search`
* `/gb,us/user,tweet/_search`
* `/_all/user,tweet/_search`

### lite Search

查询参数都在URL中


```
GET /_all/tweet/_search?q=tweet:elasticsearch
```


查询字段name的含有john，字段tweet含有mary的结果

```
GET /_search?q=%2Bname%3Ajohn+%2Btweet%3Amary
```

```
+name:john +tweet:mary
```

查询`_all`字段,所有的字段都会被拼接带`_all`字段中
```
GET /_search?q=mary
```


### 分页

默认是返回10个结果
* `from`
* `size`

```
GET /_search?size=5&from=10

```
> results 10,001 to 10,010. Everything works in the same way except that each shard has to produce its top 10,010 results. The coordinating node then sorts through all 50,050 results and discards 50,040 of them!


### Exact Values 和 Full Text的区别

* exact value
* full text

### Inverted Index

> You can find only terms that exist in your index, so both the indexed text and the query string must be normalized into the same form


### Analysis and Analyzers

1. First, tokenizing a block of text into individual terms suitable for use in an inverted index

2. Then normalizing these terms into a standard form to improve their “searchability,”


一个analyzer是一个将下面三个功能组合起来的package:
1. character filters
2. tokenizer
3. token filters

#### built-in Analyzers

##### standard Analyzer
##### simple analyzer
##### whitespace analyzer
##### language analyzer

When Elasticsearch detects a new string field in your documents, it automatically configures it as a full-text string field and analyzes it with the standard analyzer.

```
GET /_analyze
{
  "analyzer": "standard",
  "text": "Text to analyze"
}
```

### MAPING配置

```
GET /gb/_mapping/tweet
```

Although you can add to an existing mapping, you can’t change existing field mappings.


### Field Types

#### inner object

inner object会被flat
```
{
    "tweet":            [elasticsearch, flexible, very],
    "user.id":          [@johnsmith],
    "user.gender":      [male],
    "user.age":         [26],
    "user.name.full":   [john, smith],
    "user.name.first":  [john],
    "user.name.last":   [smith]
}
```

数组中含有inner object的时候查询的限制。

如果同时含有inner object和对应名字中含有点的key怎么办？


### 查询

查询可以使用`GET`也可以使用`POST`.因为不是所有的服务器都支持`GET`带request body。


```
GET /_search
{
    "query": YOUR_QUERY_HERE
}
```

例子：

```
GET /_search
{
    "query": {
        "match_all": {}
    }
}
```

query的分支:

```
{
    QUERY_NAME: {
        ARGUMENT: VALUE,
        ARGUMENT: VALUE,...
    }
}
```

如果是查询特定字段：

```
{
    QUERY_NAME: {
        FIELD_NAME: {
            ARGUMENT: VALUE,
            ARGUMENT: VALUE,...
        }
    }
}
```

例子：
```
{
    "match": {
        "tweet": "elasticsearch"
    }
}
```


混合多clause
* leaf clause
* compound clause
  - bool clause
  ```
  {
      "bool": {
          "must":     { "match": { "tweet": "elasticsearch" }},
          "must_not": { "match": { "name":  "mary" }},
          "should":   { "match": { "tweet": "full text" }},
          "filter":   { "range": { "age" : { "gt" : 30 }} }
      }
  }
  ```


### Query和Filter

* When used in filtering context, the query is said to be a "non-scoring" or "filtering" query.That is, the query simply asks the question: "Does this document match?". The answer is always a simple, binary yes|no.
* When used in a querying context, the query becomes a "scoring" query. Similar to its non-scoring sibling, this determines if a document matches and how well the document matches.


### match all

```
{ "match_all": {}}
```

### match

```
{ "match": { "tweet": "About Search" }}
```

* If you run a match query against a full-text field, it will analyze the query string by using the correct analyzer for that field before executing the search
* If you use it on a field containing an exact value, such as a number, a date, a Boolean, or a not_analyzed string field, then it will search for that exact value
* For exact-value searches, you probably want to use a filter clause instead of a query, as a filter will be cached

### multi_match

```
{
    "multi_match": {
        "query":    "full text search",
        "fields":   [ "title", "body" ]
    }
}
```

### range
```
{
    "range": {
        "age": {
            "gte":  20,
            "lt":   30
        }
    }
}
```

* `gt`
* `gte`
* `lt`
* `lte`

### term

The term query is used to search by exact values, be they numbers, dates, Booleans, or not_analyzed exact-value string field

### terms

The terms query is the same as the term query, but allows you to specify multiple values to match.

### exists or missing

The exists and missing queries are used to find documents in which the specified field either has one or more values (exists) or doesn’t have any values

### bool query

* must

* must_not

* should 如果clause匹配，增加`_score`。否则就没有影响。仅仅用影响分数

* filter clause必须匹配，但是是不计分数的。仅仅用来区分document是否应该包含的条件


### 验证查询

验证是否是有效的插叙

```
GET /gb/tweet/_validate/query
{
   "query": {
      "tweet" : {
         "match" : "really powerful"
      }
   }
}
```

解释：

```
GET /gb/tweet/_validate/query?explain
{
   "query": {
      "tweet" : {
         "match" : "really powerful"
      }
   }
}
```

### sorting

默认是按`_score`的降序排列结果。

当使用filter的时候，没有分数。这个时候返回的是一个随机的顺序。

```
GET /_search
{
    "query" : {
        "constant_score" : {
            "filter" : {
                "term" : {
                    "user_id" : 1
                }
            }
        }
    }
}
```
这个时候，查询返回一个常量分数(默认是1)

使用特定字段来排序
```
GET /_search
{
    "query" : {
        "bool" : {
            "filter" : { "term" : { "user_id" : 1 }}
        }
    },
    "sort": { "date": { "order": "desc" }}
}
```

* The first is that we have a new element in each result called sort, which contains the value(s) that was used for sorting.
* The second is that the `_score` and `max_score` are both null. 当排序时，`_score`是不会计算的。

```
GET /_search
{
    "query" : {
        "bool" : {
            "filter" : { "term" : { "user_id" : 1 }}
        }
    },
    "sort": "date"
}
```

按该字段的升序排列。

多个字段排序
```
GET /_search
{
    "query" : {
        "bool" : {
            "must":   { "match": { "tweet": "manage text search" }},
            "filter" : { "term" : { "user_id" : 2 }}
        }
    },
    "sort": [
        { "date":   { "order": "desc" }},
        { "_score": { "order": "desc" }}
    ]
}
```

多值字段排序
```
"sort": {
    "dates": {
        "order": "asc",
        "mode":  "min"
    }
}
```
`min`, `max`, `avg`, `sum`

同时保存analyzed和raw数据

```
"tweet": {
    "type":     "string",
    "analyzer": "english",
    "fields": {
        "raw": {
            "type":  "string",
            "index": "not_analyzed"
        }
    }
}
```

然后使用`raw`数据排序

```
GET /_search
{
    "query": {
        "match": {
            "tweet": "elasticsearch"
        }
    },
    "sort": "tweet.raw"
}

```


### scroll

The costly part of deep pagination is the global sorting of results, but if we disable sorting, then we can return all documents quite cheaply.



这么说，分析器应该有两部分，一个是保存进来的文档需要经过分析器处理，生成倒排索引？

然后的还有一个查询的分析器，分析查询的字段，然后再在倒排索引中查询？ s



* charfilter： 在string被tokenizer处理之前，对string进行转换，比如删除html中的标签，将`&`转换成and。
* tokenizer：就是将一个string转换为一系列的term（词）或者token。
* tokenfilter：处理tokenizer生成的term或者token，比如转换成小写，删除或者增加一些token。



貌似有了长度限制，没有完全匹配起来


这个说法：
>you can find only terms that exist in the inverted index.
