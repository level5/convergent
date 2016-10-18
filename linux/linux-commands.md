```bash

# user 相关的命令
useradd huangshif
usermod huangshif
userdel huangshif

# sudo命令，使用root权限来执行命令，这个需要在/etc/sudoers中配置用户是否能够使用
sudo <command>

# su 切换用户
su -  # 默认切换到root用户，带 - 表示切换工作目录到用户目录，不带的话就不改变工作目录

# whoami 实际用户
whoami

# who 有效用户
who

# 速度比较快，因为这个命令是在本地数据库查找 /var/lib/mlocate/.这个数据库会每天通过updatedb
# 更新一次，所有结果可能有延时性。
# 只能搜索可执行文件，联机文件，源代码文件
whereis ls


# 和 whereis 一样的查找方式，可以使用复杂的匹配语法
locate ls     # 路径中有ls的文件
locate "\ls"  # 文件名是ls的

# which只在环境变量$PATH中指定的课目录中搜索可执行文件
which gcc


# 对于非shell内置的命令，type -p 和which效果一样
type -p gcc


# find


# tar 打包 z对应gz， j赌赢gz2， J对应xz # f一定要放在最后
tar -zcvf filename.tar.gz FILES
tar -jcvf filename.tar.gz2 FILES
tar -Jcvf filename.tar.xz FILES

# tar 解压
tar -vxf filename


```
