# 生命周期和插件

## 基础

maven生命周期代表软件构建过程的各个阶段，但是它本身是抽象的，不作任何实际工作，实际的任务都是由和生命周期绑定的插件来完成。

#### 生命周期

生命周期分为三套，clean， default， site，clean负责清除工作，default是构件项目，site是构建站点，他们相互独立，而每个生命周期又分为各个phase，各个phase之间相互依赖。



- clean
  * pre-clean
  * clean
  * post-clean
- default
  * ...
  * process-sources: 处理项目的主资源，一般来说是对```src/main/resources```目录进行变量替换等工作后，复制到项目输出的主classpath目录中。  
- site
