# 依赖

## 基础

#### 项目坐标
- groupId: 定义当前maven项目所属的实际项目
- artifactId:定义实际项目中的一个maven项目（模块）。使用项目的实际名字来作为artifactId的前缀，因为默认情况下，包名会以artifactId开头，这样就很方便在lib文件中找到实际项目的模块。
- versions：定义项目的版本。
- packaging: 定义maven项目的打包方式。默认是jar。
- classifier: 用来定义输出一些附属包，比如一个jar生成了javadoc.jar和sources.jar.那么这些附属包的classifier就是javadoc和sources.

上述5个元素中，groupId、artifactId、version是必须定义的，packaging是可选的（默认为jar），而classifier是不能直接定义的。

#### 项目依赖

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                      http://maven.apache.org/xsd/maven-4.0.0.xsd">
  ...
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.0</version>
      <type>jar</type>
      <scope>test</scope>
      <optional>true</optional>
    </dependency>
    ...
  </dependencies>
  ...
</project>
```
- ```groupId```, ```artifactId```, ```version```:依赖的坐标
- ```classifier```:
- ```type```: 对应的是```packaging```,默认值是jar.
- ```scope```: 依赖范围是用来控制与三种classpath的关系（编译classpath，测试classpath，运行cclasspath）可能的值为：
  * ```compile```：默认的scope。三种classpath都生效。
  * ```provided```：编译和测试的classpath生效，但是运行时无效，典型的例子是servlet-api。因为他已经由容器提供了。
  * ```runtime```：只对运行时classpath生效。例子就是JDBC，编译时只需要JDK中带的JDBC的接口，运行才需要对应上述接口的具体实现。
  * ```test```：只对测试classpath生效。
  * ```system```：需要提供```systemPath```来指定依赖在本机的位置。和provide的依赖一致。
- ```systemPath```: 对应依赖在系统中的位置。
- ```optional```:  为true的时候，说明只对当前项目有影响，其他依赖此项目的项目不会依赖于这个包 让另外一个依赖于这个project的project知道，你不需要这个依赖也可以正常工作。


对于因为License等原因不能出现在中央仓库的jar，可以使用下面三种方式来处理
  1. 手动安装到本地仓库
```bash
mvn install:install-file -Dfile=non-maven-proj.jar                                    \
-DgroupId=some.group -DartifactId=non-maven-proj -Dversion=1 -Dpackaging=jar
```
  2. 建立自己的远程仓库
  3. 将```scope```设置为```system```，定义一个```systemPath```，这种方式不推荐。


##### scope的作用范围:

|scope|编译的classpath|测试的classpath|运行的classpath|例子
|-|-|-|-|-
|compile| Y | Y | Y | spring-core
|test| - | Y | - | JUnit
|provided| Y | Y | - | servlet-api
|runtime| - | - | Y | JDBC
|system| Y | Y | - | Maven仓库之外的jar


##### 项目依赖的传递性

如果A依赖B，B依赖于C，那么在Build A的时候，会自动依赖C。

scope的依赖

|           | compile   |   test        |  provided | runtime
|-----------|-----------|---------------|-----------|-----------
| compile   | compile   |       -       |     -     | runtime
| test      | test      |      -        |      -    | test
| provided  | provided  |        -      | provided  | provided
| runtime   | runtime   |        -      |       -   | runtime

##### 多条路径依赖同一个project
A -> B -> C(1.0); A -> D -> E -> C(2.0) ,会取哪个版本的C呢？

规则：
* 路径近者优先；上面会取得1.0版本的C
* 路径长度一样的情况下，POM中解析顺序在前的优先

##### 排除依赖

##### 使用property来定义变量

## 进阶

#### 分析依赖关系

```bash
mvn dependency:list

mvn dependency:tree

mvn dependency:analyze
```
