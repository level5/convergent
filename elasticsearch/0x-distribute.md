# Distribute


## Routing a document to a shard

```
shard = hash(routing) % number_of_primary_shards
```

`routing`是任意的string。默认是使用document的`_id`,也可以设定自定义的值

这就是为什么一个index的shard数量只有在定义的时候可以指定而不能修改了。

All document APIs (get, index, delete, bulk, update, and mget) accept a routing parameter that can be used to customize the document-to- shard mapping.

A custom routing value could be used to ensure that all related documents—for instance, all the documents belonging to the same user—are stored on the same shard.


#### create

* consistency

  the requirement for a quorum is enforced only when number_of_replicas is greater than 1.

* timeout

## search

### query phase

### fetch phase
1. coordinating node 决定哪些document需要fetch，并且发送多个GET请求到相关的shard
2. 每一个对应的shard读取对应的documents，返回给coordinating node
3. coordinating node返回结果
###
