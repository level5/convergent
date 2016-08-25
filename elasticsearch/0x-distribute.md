# Distribute


## Routing a document to a shard

```
shard = hash(routing) % number_of_primary_shards
```

`routing`是任意的string。默认是使用document的`_id`,也可以设定自定义的值

这就是为什么一个index的shard数量只有在定义的时候可以指定而不能修改了。

All document APIs (get, index, delete, bulk, update, and mget) accept a routing parameter that can be used to customize the document-to- shard mapping.

A custom routing value could be used to ensure that all related documents—for instance, all the documents belonging to the same user—are stored on the same shard.


#### quorum


the requirement for a quorum is enforced only when number_of_replicas is greater than 1.
