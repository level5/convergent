# Search in Depth

### Find exact values

***term***

when looking for an exact value, we don’t want to score the query. We just want to include/exclude documents, so we will use a constant_score query to execute the term query in a non-scoring mode and apply a uniform score of one.
```
GET /my_store/products/_search
{
    "query" : {
        "constant_score" : {
            "filter" : {
                "term" : {
                    "price" : 20
                }
            }
        }
    }
}
```

We use a constant_score to convert the term query into a filter

对于一个string类型，如果我们把它当做exact value，我们应该使用`not_analyzed`。

fiter操作：
1. 找到相关的documents
2. build a bitset
3. iterate over the bitset(s) 应该是指把多个查询和起来找到最终都匹配的docs
4. increment the usage counter,计算最近查询的使用情况来看看是否需要缓存查询

### Combining Filters

***Bool Filter***

```
{
   "bool" : {
      "must" :     [],
      "should" :   [],
      "must_not" : [],
      "filter":    []
   }
}
```
* must  and
* must_not  not
* should  or
* filter must, but non-scoring

```
GET /my_store/products/_search
{
   "query" : {
      "constant_score" : {
         "filter" : {
            "bool" : {
              "should" : [
                 { "term" : {"price" : 20}},
                 { "term" : {"productID" : "XHDK-A-1293-#fJ3"}}
              ],
              "must_not" : {
                 "term" : {"price" : 30}
              }
           }
         }
      }
   }
}
```

嵌套bool query

```
GET /my_store/products/_search
{
   "query" : {
      "constant_score" : {
         "filter" : {
            "bool" : {
              "should" : [
                { "term" : {"productID" : "KDKE-B-9947-#kL5"}},
                { "bool" : {
                  "must" : [
                    { "term" : {"productID" : "JODL-X-1937-#pV7"}},
                    { "term" : {"price" : 30}}
                  ]
                }}
              ]
           }
         }
      }
   }
}
```

### Finding Multiple Exact values

***terms***

```
GET /my_store/products/_search
{
    "query" : {
        "constant_score" : {
            "filter" : {
                "terms" : {
                    "price" : [20, 30]
                }
            }
        }
    }
}
```

`term`, `terms`表示的是包含，而不是等于。`{ "term" : { "tags" : "search" } }`会匹配下面两条结果的
```json
{ "tags" : ["search"] }
{ "tags" : ["search", "open_source"] }
```

### Ranges

***range***

```
GET /my_store/products/_search
{
    "query" : {
        "constant_score" : {
            "filter" : {
                "range" : {
                    "price" : {
                        "gte" : 20,
                        "lt"  : 40
                    }
                }
            }
        }
    }
}
```
* gt
* lt
* gte
* lte


### Null values

a null, [] (an empty array), and [null] are all equivalent. They simply don’t exist in the inverted index!


***exists***
```
GET /my_index/posts/_search
{
    "query" : {
        "constant_score" : {
            "filter" : {
                "exists" : { "field" : "tags" }
            }
        }
    }
}
```
***missing***
```
GET /my_index/posts/_search
{
    "query" : {
        "constant_score" : {
            "filter": {
                "missing" : { "field" : "tags" }
            }
        }
    }
}
```

***null_value***

没看得太懂

### full-text query
`match` `query_string`
* 如果查询的是`date`或者`integer`, 查询字符串会被当做`date`或者`integer`
* 如果查询的是`not_analyzed`的string，查询字符串将被当做一个单个的term
* 如果是对应的一个analyzed的string，查询字符串会被特定的analyzer先生成一系列term。


***match***

The match query is the go-to query, it knows how to deal with both full-text fields and exact-value fields.

```
GET /my_index/my_type/_search
{
    "query": {
        "match": {
            "title": "QUICK!"
        }
    }
}
```

1. check the field type

  The title field is a full-text (analyzed) string field, which means that the query string should be analyzed too.

2. analyze the quering string

3. find matching docs

4. score each doc


bool in query
* The difference comes in with the two should clauses, which say that: a document is not required to contain either brown or dog, but if it does, then it should be considered more relevant
* `minimum_should_match` 可以调整需要匹配的should clause
