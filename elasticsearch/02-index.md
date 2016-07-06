# 索引

索引对应数据库中的表， 文档对应成数据库表中的一条记录。  

## Document

### Document metadata

* `_index`

  This name must be lowercase, cannot begin with an underscore, and cannot contain commas
* `_type`

  A `_type` name can be lowercase or uppercase, but shouldn’t begin with an underscore or contain commas
* `_id`

  The ID is a string that, when combined with the `_index` and `_type`, uniquely identifies a document in Elasticsearch


### 乐观锁

All APIs that update or delete a document accept a `version` parameter, which allows you to apply optimistic concurrency control to just the parts of your code where it makes sense.

```bash
PUT /website/blog/1?version=1
{
  "title": "My first blog entry",
  "text":  "Starting to get the hang of this..."
}
```


```bash
# 使用外部的version。
PUT /website/blog/2?version=5&version_type=external
{
  "title": "My first external blog entry",
  "text":  "Starting to get the hang of this..."
}
```
