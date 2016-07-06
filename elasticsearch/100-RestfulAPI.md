# Restful API

## Documents

### 保存文档

`PUT`, `POST`

`PUT`自己指定`_id`
```bash
# 待补充...
```

如果想要只有自己指定的`_id`不存在的时候，才创建新的文档的话.有下面两种方式，他们成功都会返回啊`201 Created`，已经在同一个type中存在相同`_id`的文档的时候返回`409 Conflict`
1. 带上`op_type=create`这个参数。  
```bash
PUT /website/blog/123?op_type=create
{
   "title": "My first blog entry" ,
   "text":  "Just trying this out..."
}
```
2. URL最后带上`/_create`
```bash
PUT /website/blog/123/_create
{
   "title": "My first blog entry" ,
   "text":  "Just trying this out..."
}
```

`POST`自动生成`_id`,每次`POST`都会生成新的文档.

### 获取文档

`GET`

获取指定ID的数据
```bash
curl -i -XGET http://localhost:9200/website/blog/124?pretty
```

获取指定ID，并且通过`_source`参数指定想要去的的字段
```bash
GET /website/blog/123?_source=title,text

# 返回结果
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


只想取得`_source`， 不需要获取元数据的话：
```bash
GET /website/blog/123/_source

# 返回结果：
{
   "title": "My first blog entry",
   "text":  "Just trying this out...",
   "date":  "2014/01/01"
}
```

### 检查文档是否存在

`HEAD`

```bash
curl -i -XHEAD http://localhost:9200/website/blog/123

# 返回200，表示存在
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Content-Length: 0

# 返回404，表示不存在
HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=UTF-8
Content-Length: 0
```

### 修改整个文档

文档在elastic中是不可变的。没办法修改他们，如果要更新一个文档，我们需要`reindex`或者`replace`他（`reindex`表示什么意思呢？）

`PUT`

第一次`PUT`,生成数据：
```bash
PUT /website/blog/123
{
  "title": "My first blog entry",
  "text":  "I am starting to get the hang of this...",
  "date":  "2014/01/02"
}

# 返回结果：
{
  "_index": "website",
  "_type": "blog",
  "_id": "123",       
  "_version": 1,      # version为1
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "created": true     # 表示创建了新的
}
```
第二次`PUT`，更新数据：
```bash
PUT /website/blog/123
{
  "title": "My first blog entry",
  "text":  "I am starting to get the hang of this...",
  "date":  "2014/01/02"
}

# 返回结果：
{
  "_index": "website",
  "_type": "blog",
  "_id": "123",
  "_version": 2,      # version变成了2
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "created": false    # 这次这里返回的是false
}
```

> Internally, Elasticsearch has marked the old document as deleted and added an entirely new document. The old version of the document doesn’t disappear immediately, although you won’t be able to access it. Elasticsearch cleans up deleted documents in the background as you continue to index more data.

### 部分更新文档


### 删除文档
`DELETE`

```bash
DELETE /website/blog/123
# 删除了的话返回200

# 没有找到的话返回404

```
