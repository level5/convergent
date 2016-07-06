# kibana

需要：
* elasticsearch 2.2或者更高版本
* 现代浏览器
* elasticsearch的信息：
    - URL
    - indices


## 安装

下载，解压，运行。默认端口是`5601`



## 运行

1. kibana需要使用elasticsearch的dynamic mapping功能。如果elasticsearch禁用了此功能。则需要在`.kibana`这个index上enable dynamic mapping。
2. 在使用之前，需要告诉kibana想要探索elastic的那些indices。第一次登陆kibana的时候，需要定义一个index pattern来match一个或者多个indices的名字。
3. 默认情况下，kibana连接的是localhost的elastic。可以在`kibana.yml`中配置。


#### index pattern
1. 连接Kibana，端口是`5601`
2. 必须至少配置一个index pattern。选择一个名字，用来匹配一个或者多个indices的名字。
3. 然后选取一个index的field来做time-based comparisons。kibana会列出所有包含timestamp的字段。如果文档中不包含time-based数据，可以禁掉这个选项。
4. 点击创建。当想要在创建新的index pattern。的时候，可以通过`setting -> indices`来创建。



## discover

## visualize

* bucket aggregations and metric aggregations. A bucket aggregation sorts your data according to criteria you specify. 
