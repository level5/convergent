# Linux


## 知识点


#### ps



#### user

```bash

useradd huangshif
usermod huangshif
userdel huangshif

passwd
```

`/etc/passwd` 文件。

```bash
# 用户名:密码:UID:GID:用户全名:home 目录:shell
# 0 root; 1 - 499 系统用户; 500+ 用户
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
jagen:x:500:500:jagen Zhao:/home/jagen:/bin/bash
```

#### sudo

```bash
sudo <command>
```

`/etc/sudoers` 文件
```bash
## Allow root to run any commands anywhere
root ALL=(ALL) ALL
……
## Allows people in group wheel to run all commands
# %wheel ALL=(ALL) ALL
## Same thing without a password
# %wheel ALL=(ALL) NOPASSWD: ALL
## Allows members of the users group to mount and unmount the
## cdrom as root
# %users ALL=/sbin/mount /mnt/cdrom, /sbin/umount /mnt/cdrom

# 允许users用户组执行所有的命令，除了adduser和useradd
%users ALL=(ALL) ALL,!/usr/sbin/adduser,!/usr/sbin/useradd
```
`jagen`表示用户， `%wheel`表示用户组。


#### su

用来切换用户，默认切换到`root`用户。

```bash
# 切换到root用户，不改变工作目录
su

# 切换到root用户，切换工作目录到/root
su -

# 切换到jegan用户
su jegan -

```

#### whoami & who

* 实际用户
* 有效用户

`whoami` 显示的实际用户。

`who` 显示的是有效用户

### 文件权限

`rwx`权限对于目录和文件：
* 对于文件来说，很明显
* 对于目录，`r`可以读取目录下的文件列表，`w`可以在目录中创建文件，`x`可以打开目录。

```bash

chown [-R] username[:group] filename
chmod xxx filename

```


`s`(SUID), (SGID)权限:
* SUID, 设置为`u+s`,仅对二进制
* SGID，设置为`g+s`
  - 对二进制
  - 对目录

`t`(SBIT)
* SBIT，对目录有效，设置为`o+t`,对目录有`w`, `x`权限。在目录中创建的文件只有用户自己和root可以删除。

将`777`扩充到4位，第一位表示特殊权限,SUID用4代表， SGID用2代表，SBIT用1代表

## 使用源代码安装软件

## rpm

Red Hat开发的一种包管理工具。

### 创建rpm
rpm创建步骤：
1. 按照rpmbuild规范创建一个目录；
2. 将源代码和附带文件放在目录中合适的位置；
3. 创建`spec`文件；
4. 编译rpm。


### wget

`~/.wgetrc`中:

```
use_proxy=yes
http_proxy=127.0.0.1:8080
```


```bash
wget ... -e use_proxy=yes -e http_proxy=127.0.0.1:8080 ...
```
