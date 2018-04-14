# Spring Cloud Config

```

config-client       config-server        git-server

                                --------->

                                <--------

             ------->


             <-------

```


### config server

提供一个服务，默认将git上的配置文件映射到rest接口上。

```
host:port/application/profile/label
--------- ------------------- -----
   |                |           |
   |                |           ------> git的branch
   |                |-----> git中文件application-profile.properties
   |
   --------->  对应的config server

```

### config client

需要config server的服务，需要依赖config-client这个包。

然后会把当前服务`bootstrap.yml`的一些属性对应到`applianction`, `profile`和`label`上
* application: `spring.application.name`
* profile: `spring.profiles.active`, 或者`spring.cloud.config.profile`??
* label: `spring.cloud.config.label`


### 自动刷新配置

客户端还不能自动刷新配置，需要手动触发客服端的`/refresh`来让客护端去config server更新配置


* 添加spring cloud bus来同步消息
* 灰度发布时，通过制定applicationContextId来指定需要更新配置的服务
