# cluster

* node 一个运行的elasticsearch instance.
* cluster 一个或者多个node，他们有着相同的`cluster.name`
* master node, 一个cluster中有一个node被选为master node,负责index的建立和删除，node的加入cluster。
但是不需要卷入document级别的修改和查询。任何node都可以成为master node。

用户可以和cluster中的任意node通讯来查询


### health

```bash
GET /_cluster/health
```

* ***red***     
  Not all primary shards are active.
* ***yellow***  
  All primary shards are active, but not all replica shards are active.
* ***green***   
  All primary and replica shards are active.


### start a second node
可以在相同的位置启动一个新的elastic实例。（you can start a new node in exactly the same way as you started the first one, and from the same directory. Multiple nodes can share the same directory.）

When you run a second node on the same machine, it automatically discovers and joins the cluster as long as it has the same cluster.name as the first node

for nodes running on different machines to join the same cluster, you need to configure a list of unicast hosts the nodes can contact to join the cluster.
