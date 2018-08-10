# 基本命令


```bash

# 如果没有httpd，去仓库下载
# -d 后台模式运行
# -p 绑定端口到host
docker run -d -p 80:80 httpd

# 查看下载的images
docker images


# 显示运行的容器
docker container ls

docker ps


# 显示所有状态的container
docker ps -a
docker container ls -a


# 停止容器
docker stop <短ID/长ID/名字>

# 下载
docker pull httpd


```


### 镜像

#### 镜像分层


#### 构建镜像

1. docker commit
2. Dockerfile


##### docker commit

1. 运行容器
2. 修改容器
3. 将容器保存为新的镜像

```bash

docker run -it ubuntu

apt-get install -y vim

# 在其他窗口使用docker ps查看容器的名字,然后执行
docker commit <contianer-name> <new-image-name>


```

##### Dockerfile

* build context


```bash

# -t 指定新的image的ming
# . 指定build context为当前目录，docker会在buld context目录中查找Dockerfile。
# 也可以使用 -f 指定Dockerfile
docker build -t ubuntu-with-vim .

```

1. docker会将docker context中的所有文件发送给docker, 为构建提供需要的文件和目录
2. Dockerfile中的`ADD`, `COPY`会将docker context中的文件添加到镜像


```bash

FROM

MAINTAINER

COPY

COPY src dest

COPY ["src", "dest"]

# 不同于COPY的地方是，对于压缩文件，会自动解压
ADD

ENV

# 指定容器中的进程会监听某个端口，Docker 可以将该端口暴露出来 是在容器的网络上？？
EXPOSE

VOLUMNE

```
