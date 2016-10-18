# 安装

## 基础

#### 前置条件

确定JDK安装，JAVA_HOME环境变量配置好
```bash
echo $JAVA_HOME
java -version
```
#### 安装

下载页面（汲取教训，下载之后养成做MD5验证的好习惯）

http://maven.apache.org/download.html

- 安装到指定目录
- 配置环境变量M2_HOME；PATH中加入$M2_HOME/bin
  * windows使用```%M2_HOME%/bin```
  * Unix在```~/.bashrc```中导入这两个环境变量
```bash
export M2_HOME=<dir>
export PATH=$PATH:$M2_HOME/bin
```
- 验证，执行
```bash
mvn -v
```

#### 其他

##### settings.xml
可选择的配置位置：
- ```$M2_HOME/conf/settings.xml```,对应的是这台机器的全局配置；
- ```~/.m2/settings.xml```，对应的是这个用户的配置。

推荐使用第二个配置，这样不会影响机器中其他用户的配置；方便升级maven。

##### ~/.m2

默认情况下，所有的maven构建都存放在```~/.m2/repository```下，方便重用

##### 代理配置
https://maven.apache.org/settings.html#Proxies
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">
  ...
  <proxies>
    <proxy>
      <id>myproxy</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>proxy.somewhere.com</host>
      <port>8080</port>
      <username>proxyuser</username>
      <password>somepassword</password>
      <nonProxyHosts>*.google.com|ibiblio.org</nonProxyHosts>
    </proxy>
  </proxies>
  ...
</settings>
```
- 可以配置多个proxy，默认情况下第一个被激活的proxy生效。
- active: true表示这个proxy是激活的
- nonProxyHosts:表示不使用代理的host

##### eclispe插件
m2eclipse环境默认使用的自带的maven版本，如果想在命令行使用maven，避免两者产生不一致的行为，可以修改m2eclipse的配置，导入安装的maven。

##### MAVEN_OPTS
可以使用环境变量```MAVEN_OPTS```来存放Java命令参数，例如设置为```-Xms128m -Xmx512m```来增大Java默认内存。

## 进阶
