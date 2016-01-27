# 配置

`git config`工具设置git的行为和外观。这些变量保存在三个位置，使用`ini`文件来保存。


1. ```/etc/gitconfig```， 系统上每一个用户
2. ```~/.gitconfig```或者```~/.config/git/config```， 针对该用户
3. 当前仓库下的```.git/config```， 针对该仓库

> 在 Windows 系统中，Git 会查找 `$HOME` 目录下（一般情况下是 `C:\Users\$USER`）的 `.gitconfig` 文件。 Git 同样也会寻找 `/etc/gitconfig` 文件，但只限于 MSys 的根目录下，即安装 Git 时所选的目标位置。

```bash

# 对三个config文件进行编辑

git config -e

git config -e --global

git config -e --system

```

```bash
# 进行
git config --system
```

#### HTTP和HTTPS的代理配置
```ini

```

#### 和push相关的操作

`push.default`参数可以控制不带参数的`git push`的行为
- `nothing`: 什么也不push
- `matching`: push所有匹配的branch（所有branch相同名字的branch）
- `upstream`: push当前的跟踪分支到远程。（对于跟踪分支，tracking是以前的称呼，现在的称呼是upstream）
- `current`: push当前分支到相同名字的分支
- `simple`: 类似于`upstream`, 但是会拒绝不同名字的提交
#### 和merge相关的配置

```ini
[merge]
    conflictstyle = merge
    tool = kdiff3
[mergetool "kdiff3"]
    path = c:/Program Files/KDiff3/kdiff3.exe
[diff]
    tool = kdiff3
    guitool = kdiff3
[difftool "kdiff3"]
    path = c:/Program Files/KDiff3/kdiff3.exe
```

* `merge.conflictstyle`冲突文件中冲突的标记风格，有两种可用风格，`merge`和`diff3`
* `merge.tool` 设定执行`git mergetool`进行冲突解决时调用的图形化工具，
如果设定为其他没有内置支持的工具时，需要通过`mergetool.<tool>.cmd`来对自定义工具的命令行进行设置
* `mergetool.<tool>.path` 设置工具的暗转位置
* `mergetool.<tool>.cmd` 如果工具不在内置支持列表中，需要设置此命令
* `merge.log`
