# Zuul



```
                         internet
                          |   ^
                          |   |
                          V   |
     ----------  Netty Server Handlers  <-----------
     |                                             |
     |                                             |
     V                                             |
  Inbound Filter ---> EndPoint Filter  ---> Outbound Filter
                       |       ^
                       |       |
                       V       |
                       Netty Client
                       |       ^
                       |       |
                       V       |
                       Services


```


* 服务发现， 和Eureka集成
* 提供负载均衡，这个时候是使用Eureka的负载均衡吗？
* 连接池，为每个host创建一个连接池， Netty Client
* retry机制

### 反向代理
- 配置URL转发
```
zuul.routes.hello.path=/hello/**
zuul.routes.hello.url=http://localhost:9000/
```
- zuul和Eureka的集成, 转发到对应的服务
```
zuul.routes.api-a.path=/producer/**
zuul.routes.api-a.serviceId=spring-cloud-producer
```
- 默认配置，会对所有注册的服务进行下面的默认转发
```
zuul.routes.api-a.path=/spring-cloud-producer/**
zuul.routes.api-a.serviceId=spring-cloud-producer
```


### Netty
