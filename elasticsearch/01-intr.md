# 大体了解

不仅仅是全文搜索

* 分布式的试试文档存储，每个字段都是索引和可搜索的。
* 实时分析的分布式搜索引擎
* ...

提供Restful API。

## 安装


### 软件安装

很简单，解压缩，运行。

自动分配端口，需要两个端口，默认9200， 9300. 9200是HTTP服务的端口，9300是...（具体忘记了，等查询来补充，应该是内部通讯来使用的端口）


### 运行

```bash

$ cd elasticsearch-<version>
$ ./bin/elasticsearch

```

* `-d` 作为一个deamon在后台运行
* windows下执行`bin\elasticsearch.bat`


测试是否正常运行
```bash
$ curl 'http://localhost:9200/?pretty'
```
参数`pretty`用来美化返回结果，在json中插入换行和空格

### 部署成服务

...

### kibana sense
安装kibana sense方便交互测试。

```bash

$ ./bin/kibana plugin --install elastic/sense

```

### node之间通讯

使用端口`9300`

### 交互

* Java API
* restful API with JSON an HTTP


### 面向文档

保存的是文档，该觉类似于NOSQL，但是
> It not only stores them, but also indexes the contents of each document in order to make them searchable.


### 术语

* index
index的名字必须小写！不能以`_`开头。
  - index（名词）
  - index（动词）
  - inverted index
  > every field in a document is indexed (has an inverted index) and thus is searchable. A field without an inverted index is not searchable.

> while an index is just a logical namespace that groups together one or more shards

* type
> in Elasticsearch we use the same type for documents that represent the same class of thing

> Every type has its own mapping or schema definition, which defines the data structure for documents of that type, much like the columns in a database table.

>  the mapping for the type tells Elasticsearch how the data in each document should be indexed.


* field
* term
* document
> In Elasticsearch, the term document has a specific meaning. It refers to the top-level, or root object that is serialized into JSON and stored in Elasticsearch under a unique ID.

* shards



### 一个简单的例子

员工数据的例子. 这里的命令的语法都是使用的kibana sense.用起来比cURL方便。

#### 第一步：保存员工数据

一个document代表一个员工。
> In Elasticsearch, a document belongs to a type, and those types live inside an index.

和传统关系型数据库的对应关系
```
Relational DB  ⇒ Databases ⇒ Tables ⇒ Rows      ⇒ Columns
Elasticsearch  ⇒ Indices   ⇒ Types  ⇒ Documents ⇒ Fields
```

对应于关系型数据库增加`index`，来加快查询速度。elasticsearch中使用`inverted index`来实现相同的目的。
> By default, every field in a document is indexed (has an inverted index) and thus is searchable.

所以第一步要做的事情是：
1. ndex a document per employee, which contains all the details of a single employee.
2. Each document will be of type employee.
3. That type will live in the megacorp index.
4. That index will reside within our Elasticsearch cluster.


这样就创建了index `megacorp`, 创建了type `employee`, 然后创建了一个ID为1的`document`.(这里需要elasticsearch的dynamic mapping设置为true，true这也是默认设置。)
```
# Index document 1, type "employee", in the "megacorp" index
PUT /megacorp/employee/1
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}
```


```bash
# 只有是新增时才生效
# 1
PUT /website/blog/123?op_type=create
{ ... }
# 2
PUT /website/blog/123/_create
{ ... }
```

`op_type=create` 表示只有是新增时才生效

#### 第二步：查询数据
```bash
GET /megacorp/employee/1

# 只获取_source
GET /website/blog/123/_source

# 检查一个文档是否存在
curl -i -XHEAD http://localhost:9200/website/blog/123
```
返回结果：
```
{
  "_index": "megacorp",
  "_type": "employee",
  "_id": "1",
  "_version": 1,
  "found": true,
  "_source": {
    "first_name": "John",
    "last_name": "Smith",
    "age": 25,
    "about": "I love to go rock climbing",
    "interests": [
      "sports",
      "music"
    ]
  }
}
```

* `_index`: Where the document lives. `_index`必须是小写，而且不能以下划线`_`开头。
* `_type`: The class of object that the document represents. A `_type` name can be lowercase or uppercase, but shouldn’t begin with an underscore or contain commas.
* `_id`: The unique identifier for the document(是type中唯一还是整个indices唯一？)
> when combined with the `_index` and `_type`, uniquely identifies a document in Elasticsearch.

所以说，只需要是在type中唯一就可以了。

* `_version`
* `_source`

使用`_source`可以指定想要取得的字段
```
GET /website/blog/123?_source=title,text
```
返回结果：
```
{
  "_index" :   "website",
  "_type" :    "blog",
  "_id" :      "123",
  "_version" : 1,
  "exists" :   true,
  "_source" : {
      "title": "My first blog entry" ,
      "text":  "Just trying this out..."
  }
}
```
如果只想取得`_source`:
```
GET /website/blog/123/_source
```
返回结果：
```
{
   "title": "My first blog entry",
   "text":  "Just trying this out...",
   "date":  "2014/01/01"
}
```
或者只想取`_source`中的某几个字段

```
GET /megacorp/employee/1/_source?_source=first_name,last_name
```
返回结果：
```
{
  "last_name": "Smith",
  "first_name": "John"
}
```

#### 第三步： 简单的search

* 查询`employee`的所有文档
```
GET /megacorp/employee/_search
```
或者
```
GET /megacorp/employee/_search
{
  "query": {
    "match_all": {}
  }
}
```

* 查询last name中包含smith的文档,带上参数`q`
```
GET /megacorp/employee/_search?q=last_name:Smith
```


#### 第四步： 使用Query DSL 查询
```
GET /megacorp/employee/_search
{
    "query" : {
        "match" : {
            "last_name" : "Smith"
        }
    }
}
```



更加复杂的查询：
```
GET /megacorp/employee/_search
{
    "query" : {
        "filtered" : {
            "filter" : {
                "range" : {
                    "age" : { "gt" : 30 }
                }
            },
            "query" : {
                "match" : {
                    "last_name" : "smith"
                }
            }
        }
    }
}
```

这里是先做了filter，然后在做查询。

关于Query DSL.

...

#### 第五步：`Full-Text`搜索
这一点，传统的数据库很难做到.因为传统数据库需要使用类似于`like '%rock climbing%'`的方式搜索，但这样搜索的话，index就失效了，需要整个数据库所有的数据全部查询一次。
```
GET /megacorp/employee/_search
{
    "query" : {
        "match" : {
            "about" : "rock climbing"
        }
    }
}
```
这样搜索的结果有一个`relevance`的概念。elastic的查询会计算`score`。然后按得分返回查询结果


#### 第六步： 短语搜索

使用`match_phrase`代替`match`


#### 第7步：高亮查询

这样会在返回的结果中新增加我们希望高亮的`field`的html。这个HTML高亮了我们的查询关键字


#### 第8步：分析
提供了`aggregation`的功能，类似于SQL的`group by`,但是更加强大。

这个语法我目前还不太懂，找篇文章看看.

```
GET /megacorp/employee/_search
{
  "aggs": {
    "all_interests": {
      "terms": { "field": "interests" }
    }
  }
}
```
结果：
```
{
   ...
   "hits": { ... },
   "aggregations": {
      "all_interests": {
         "buckets": [
            {
               "key":       "music",
               "doc_count": 2
            },
            {
               "key":       "forestry",
               "doc_count": 1
            },
            {
               "key":       "sports",
               "doc_count": 1
            }
         ]
      }
   }
}
```

### 数据

> When an object has been serialized into JSON, it is known as a JSON document.




### 多节点

这部分先忽略，不影响弄懂....

运行有相同`cluster.name`的多个实例，就自动建立起集群了。

 > A cluster is a group of nodes with the same cluster.name that are working together to share data and to provide failover and scale.
