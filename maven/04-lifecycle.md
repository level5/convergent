# 生命周期和插件

## 基础

maven生命周期代表软件构建过程的各个阶段，但是它本身是抽象的，不作任何实际工作，实际的任务都是由和生命周期绑定的插件来完成。

### 生命周期

生命周期分为三套，clean， default， site，clean负责清除工作，default是构件项目，site是构建站点，他们相互独立，而每个生命周期又分为各个phase，各个phase之间相互依赖。


- clean
  * pre-clean
  * clean
  * post-clean
- default(省略不太关键的步骤，完整生命周期参考 http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)
  * ...
  * process-sources: 处理项目的主资源，一般来说是对```src/main/resources```目录进行变量替换等工作后，复制到项目输出的主classpath目录中。  
  * ...
  * compile: 编译项目的主源码
  * ...
  * process-test-resources:处理项目测试资源文件
  * ...
  * test-compile：编译测试代码
  * ...
  * test：使用单元测试框架运行测试代码，测试代码不会被打包或则部署
  * ...
  * package：打包编译好的文件
  * ...
  * install：安装到本地仓库
  * deploy：复制到远程仓库
- site
  * pre-site
  * site
  * post-site
  * site-deploy

执行maven命令的主要方式调用生命周期的各个阶段。生命周期是相互独立的，但是阶段是有前后依赖关系的。
```bash

mvn clean   # 调用clean生命周期的clean阶段。实际执行 pre-clean, clean

mvn test    # 调用default生命周期的test阶段。实际执行default生命周期中的phase到test。
            # 因为 compile在test前面，所以源码也会被编译。

mvn clean install   # 执行clean生命周期的clean阶段，以及default生命周期的install阶段
                    # 结合了两个生命周期。

mvn clean deploy sit-deploy # 结合了三个生命周期

```

### 插件

maven的生命周期和插件绑定，用来完成实际的工作。例如，项目编译，对应default生命周期的compile阶段。而```maven-compiler-plugin```插件的compile目标能够完成该任务，因此将他们绑定来完成项目编译的目的。


#### 内置绑定

maven内置了一些插件的绑定，所以不需要做什么配置就可以使用了。


#### 自定义绑定

将插件的目标绑定到特定生命周期上。

```xml
code...
```


对于插件目标，可以设定默认的绑定的生命周期。这样，在pom中，就可以省略phase元素，而是用默认的生命周期绑定。

#### 配置

##### 命令行配置

使用```-D```来配置参数

```bash
mvn install -Dmaven.test.skip=true
```

##### POM插件配置

对于参数配置在在pom文件中，使用```<configuration>```标签全局配置插件参数。

```xml
code...
```
也可以给插件任务来配置参数。

```xml
code...
```

#### 使用maven-help-plugin描述插件

```bash
mvn help:describe -Dplugin=<groupId>:<artifactId>:<version>
```

```bash
mvn help:describe -Dplugin=<groupId>:<artifactId>
```

```bash
mvn help:describe -Dplugin=<goalPrefix>
```

```bash
mvn help:describe -Dplugin=<goalPrefix> -Dgoal=<goal>
```

#### 命令行调用插件

类似于构建，插件构建基于坐标储存在maven的仓库中。通过```<pluginRepositories>```和```<pluginRepository>```配置。

```xml
code...
```

命令格式

```bash
mvn [options] [<goal(s)>] [<phase(s)>]
```

maven出了命令激活生命周期阶段，还支持直接调用插件的目标。

直接通过坐标:目标的方式来调用插件目标

```bash
mvn org.apache.maven.plugins:maven-help-plugin:2.1:describe -Dplugin=compiler
```

通过目标前缀(goal prefix)来调用插件。

```bash
mvn help:describe -Dplugin=compiler
```

pom中，如果插件是maven的官方插件。(groupId是maven.apache.maven.plugins),groupId可以省略。

如果配置没有提供版本，maven会自动解析插件版本。超级POM(所有maven项目的父pom)中为所有核心插件设定了版本。如果用户没有设定版本，又不是核心插件。maven回去查看所有仓库中可用的版本。然后做出选择。maven3使用的是```release```.

插件前缀和```groupId:artifactId```是意义对应的。这种匹配关系存储在仓库元数据中(groupId/maven-metadata.xml).默认检查的groupId有```org.apache.maven.plugins```和```org.codehaus.mojo```两个groupId。

可以通过settings.xml配置maven检查其他groupId

```xml
<settings>
    <pluginGroups>
        <pluginGroup>com.level.plugins</pluginGroup>
    </pluginGroups>
</settings>
```
