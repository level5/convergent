# Eureka


### Eureka Server

* 提供服务注册和发现


在默认设置下，该服务注册中心也会将自己作为客户端来尝试注册它自己。

***集群***

配置时指向其他的机器就可以了。如果是这样，k8s中发布多台机器怎么弄呢？

### Service Provider

* 将自身服务注册到Eureka

配置好Eureka server的URL， `eureka.client.serviceUrl.defaultZone`

通过`@EnableDiscoveryClient`注解来注册服务，注册使用的名字是`spring.application.name`

### Service Consumer

* 从Eureka获取注册服务列表

同样配置好Eureka server, `eureka.client.serviceUrl.defaultZone`

`@EnableDiscoveryClient`, 启用服务发现

`@EnableFeignClients`, 启用feign进行远程调用。

feign，类似于swagger吧，可以自动生成客户端吧。

```java

@FeignClient(name= "spring-cloud-producer")
public interface HelloRemote {
    @RequestMapping(value = "/hello")
    public String hello(@RequestParam(value = "name") String name);
}

```

```java
@RestController
public class ConsumerController {

    @Autowired
    HelloRemote HelloRemote;

    @RequestMapping("/hello/{name}")
    public String index(@PathVariable("name") String name) {
        return HelloRemote.hello(name); // java8的新语法？接口方法？
    }

}
```

#### Eureka + Feign + Ribbon 来实现负载均衡

原理是什么？
