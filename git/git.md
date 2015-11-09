# Git基础操作

### git configuration

```bash
git config
```
### git ssh
```bash

```

### git 获取仓库

#### 初始化仓库
```bash
git init
```

#### 克隆现有仓库
```bash
git clone <url>
```

### git 记录更新

`.gitignore`

```bash
git status # 查看当前文件状态

# 紧凑的格式
git status -s
git status --short

git add <file> # 将文件修改加入暂存区
git add . # 当前目录下所有的文件加入暂存区

git rm <file> #移除文件
git rm --cached <file> # 从仓库中移除文件，但是本地保留此文件

# 也可以使用 -u 将所有改动添加到暂存区
git add -u .

git mv <file> <file>


git diff # 暂存区和未暂存的文件的比较

# 暂存区和HEAD的比较，也就是暂存区的改动
git diff --cached
git diff --staged

git commit
git commit -m "<comment>"
git commit -a # 跳过暂存区， 直接将所有已跟踪文件直接提交

```

### git 查看提交历史

```bash
git log

git log -p -2
#       ^   ^ 显示最近两次提交
#       显示每次提交的差异    

git log --pretty=oneline

git log --pretty=format:"%h - %an, %ar : %s"

git log --graph

```
`git log --pretty=format`常用选项：
- %H 提交对象（commit）的完整哈希字串
- %h 提交对象的简短哈希字串
- %T 树对象（tree）的完整哈希字串
- %t 树对象的简短哈希字串
- %P 父对象（parent）的完整哈希字串
- %p 父对象的简短哈希字串
- %an 作者（author）的名字
- %ae 作者的电子邮件地址
- %ad 作者修订日期（可以用 --date= 选项定制格式）
- %ar 作者修订日期，按多久以前的方式显示
- %cn 提交者(committer)的名字
- %ce 提交者的电子邮件地址
- %cd 提交日期
- %cr 提交日期，按多久以前的方式显示
- %s 提交说明

### git 撤销
```bash
git commit --amend

git reset HEAD [<file>]

git checkout -- [<file>]

git checkout [<point>] [-- files]

# --force When switching branches, proceed even if the index or the working tree differs from HEAD. This is used to throw away local changes.
git checkout -f step-0
```

### git 远程操作
```bash

git remote

git remote -v # 读写远程仓库使用的git保存的简写与对应的URL
git remote -vv

git remove show <remote-name>

git remote add <shortname> <url> # 添加远程仓库

git remote rename <remote-name> <new-remote-name>

# fetch不会自动合并修改当前的工作，需要自己手动并入。
git fetch <remote-name>
git retch origin


git pull

git push <remote-name> <branch-name>
git push origin master # 将master分支推送到origin服务器（这两个名字都会在克隆时自动设置好）

```

### git 标签

```bash
git tag # 列出已有的标签
git tag -l 'v1.8.5*' # 列出所有v1.8.5开头的标签

# 打标签

# 附注标签
git tag -a v1.4 -m 'my version 1.4'
#       ^ 附注标签 ^ 储存在标签中的信息
git show v1.4 # 查看标签信息

# 轻量标签
git  tag v1.4-lw # 不需要使用-a -m选项，生成轻量标签
git  show v1.4-lw

# 特定提交打标签
git tag -a v1.2 <commit-id>


# 默认情况下，标签不会传送到远程仓库，必须显式的推送标签到服务器
git push <remote-name> <tag-name>
git push tags # 推送多个标签


git checkout -b <branch-name> <tag-name>
```

### git 别名

```bash
git config --global alias.st status

git config --global alias.unstage 'reset HEAD --'

git config --global alias.last 'log -1 HEAD'

git config --global alias.visual '!gitk' # !来执行外部命令
```

### git 分支

```bash


# HEAD 指向当前分支的一个特殊的指针

git branch <branch-name> # 创建新的分支，但是不会切换到新的分支上

git checkout <branch-name> # 切换到指定分支

# 合并分支
git checkout -b feature54
git commit -m "add feature54"
git checkout master
git checkout -b hotfix
git commit -m "fixed null address"
git checkout master
git merge hotfix # fast-foward
git merge feature54 # 合并两个分支，git自行决定使用哪个作为祖先来合并
# 如果产生冲突，此时需要解决冲突
# ...
# 解决冲突之后
git commit

```

#### 分支管理

```bash
git branch # 当前分支列表
git branch -v # 显示当前分支最后一次提交

# 合并/没有合并到当前分支的分支
git branch --merged
git branch --no-merged

git branch -d <branch-name>




```

#### 远程分支

表示做`git fetch origin`的时候，强制进行引用替换。引号前面的是远程库的引用，引号后是本地库的引用。
当执行`git fetch origin`的时候，远程库的所有分支复制到本地的远程分支
```ini
[remote "origin"]
fetch = +refs/heads/*:refs/remotes/origin/*
url = <url>
```

```bash
git show-ref # 查看全部的本地引用

git branch -r # 查看远程分支
```



```bash
git ls-remote

git remote show

# 远程分支跟踪， 上一次网络连接远程服务器的状态的书签
# origin/master

#origin 是默认的 git clone的默认远程仓库名
git clone -o <remote-name> ... # 更改默认远程仓库名


```

假设你的网络里有一个在 git.ourcompany.com 的 Git 服务器。 如果你从这里克隆，Git 的 clone
命令会为你自动将其命名为 origin，拉取它的所有数据，创建一个指向它的 master 分支的指针，
并且在本地将其命名为 origin/master。 Git 也会给你一个与 origin 的 master 分支在指向同一个地方的本地 master 分支，
这样你就有工作的基础。


```bash
git push <remote-name> [<local-ref>:]<remote-ref>

git push origin HEAD:refs/heads/new-branch
git push origin new-branch # 将本地的new-branch推送到服务器上生成new-branch

git push origin :<remote-ref> # 可以采用这样的方式来删除一个引用，可以删除一个远程分支或者标签

# 获取新生成的远程分支
git fetch origin

# 远程分支refs/romotes/origin/hello-1可以简写为origin/hello-1
# 这个时候new-branch是不可编辑的，可以

git merge origin/new-branch # 来合并到当前分支

git checkout -b <new-branch> <start-point> # 创建并且换到新的分支

git checkout -b new-branch origin/new-branch # 来建立自己的分支， 这个新的分支叫做跟踪分支
git checkout --track origin/new-branch # 创建一个本地分支名为new-branch的跟踪分支
# 设置或者修改一个已存在的本地分支跟踪的上游分支
git checkout new-branch
git branch -u origin/new-branch2
# 或者
git branch --set-upstream-to origin/new-branch2

# 跟踪分支在执行pull和push和检查状态的时候，会和远程仓库交互。
# 而普通的分支执行pull和push操作的时候是会报错的。

# origin/new-branch是一个远程分支，不存在其他远程库上有这个分支，可以使用下面的命令创建分支
git checkout new-branch # 这样可以同时完成分支的创建和切换

# 这个新的分支叫做跟踪分支，可以自动识别去哪个服务器抓取，合并
git pull

git branch -vv # 列出所有的跟踪分支

git fetch # 只是拉取，等待自己手动合并

git pull # 相当于 git fetch; git merge;

git push origin --delete new-branch2 # 删除一个远程分支（可以找回）
```

```ini
[branch "master"]
    remote = origin
    merge = refs/heads/master
[branch "hello-1.x"]
    remote = origin
    merge = refs/heads/hello-1.xs
```

```bash
# 也可以使用 --track来要求建立跟踪
git checkout --track -b hello-j.x hello-1.x
```

```ini
[branch "hello-j.x"]
    remote = .
    merge = refs/heads/hello-l.x
```


```bash

git remote add new-remote <url> # 添加新的远程仓库

git fetch # 默认从origin获取

# 如果要从new-remote获取，需要指定
git fetch new-remote

```

这个时候，会新增加config配置

```ini
[remote "new-remote"]
    url = <url>
    fetch = +refs/head/*:refs/remotes/new-remote/*
```

修改远程仓库，一种方式是修改`.git/config`文件，使用`git config`命令。
一种是使用`git remote`命令

```bash
git remote set-url new-remote <url>

# fetch和push可以分开设置
git remote set-url --push new-remote <url2>
```

这个时候,config配置会新增`pushurl`

```ini
[remote "new-remote"]
    url = <url>
    fetch = +refs/head/*:refs/remotes/new-remote/*
    pushurl = <url2>
```


```bash

# 重命名为user2
git remote rename new-remote user2

# 多个版本库同时更新
git remote update
# 如果想让某个版本库在执行git remote update时忽略跟新
git config remote.user2.skipDefaultUpdate true

# 删除注册的远程仓库
git remote rm user2
```

### git 分支的合并

```bash
git merge <branch> # 将两个branch的最新快照和他们的共同祖先三者合并

# 另外一种合并方式：
git checkout fix53
git rebase master
# 上面两步的操作过程是， 先找到fix53和master的共同祖先，然后对比fix53和此祖先的历次提交，
# 提取相应修改生成临时文件。然后将当前分支指向master，在再此基础上应用生成的临时文件

git checkout master
git merge fix53 # 这是就可以进行一次fast-foward的合并了。

# onto操作 git rebase --onto <newbranch> <since> <till>
# <since> <till> 类似于 since..till
#
# server是从master出来的分支，client是在server数次提交之后上出来的分支，然后也有数次提交
# 取出 client 分支，找出处于 client 分支和 server 分支的共同祖先之后的修改，然后把它们在 master 分支上重演一遍
# 这个时候，client分支上做的修改，但是不包括server分支上的修改，rebase到了master分支上
git rebase --onto master server client
git checkout master
git merge client # 此时可以fast-foward到client

git rebase master server # 再将server分支rebase到master上

###########################################
# 不要对存在与本地仓库之外的commit进行rebase！！
#
# 因为rebase实质是丢弃一些现有的提交，然后相应地
# 新建一些内容一样但实际上不同的提交。如果别人已经
# 使用你的这些提交，就会变得很混乱，需要重新合并
# rebase的提交
#
#
# 只对尚未推送或分享给别人的本地修改执行rebase操作清理历史，
# 从不对已推送至别处的提交执行rebase操作
###########################################


# merge的时候如果conflict了的话
# git reset 重置暂存区
git reset


```

什么是`git push --force`? 服务器上一般只允许fast-foward,这里是强制做非fast-foward.

### git 服务器上的协议

#### local protocol
```bash
git remote add local_proj /opt/git/project.git # 增加一个本地仓库

git clone /opt/git/project.git # 克隆本地仓库，Git 会尝试使用硬链接（hard link）或直接复制所需要的文件
git clone file:///opt/git/project.git # 稍微不同，Git 会触发平时用于网路传输资料的进程

```

#### HTTP protocol

##### Smart HTTP protocol

### git tools

```bash

git log --abbrev-commit --pretty=oneline # --abbrev-commit 显示SHA1简短形式

git rev-parse branch

# 引用日志
git reflog
git show HEAD@{5} # HEAD在5次前的操作

git show HEAD^ # HEAD的祖先
git show HEAD~ # 和上面等价
git show HEAD~2 # 等价 git show HEAD^^

```

```bash
git checkout master
git reset --soft HEAD^^ # 回退到倒数第三个commit，但是不改变当前的工作区和暂存区
# 这个时候因为暂存区还是之前的最后一个提交的代码，这个时候commit就将最后两次提交的代码合并成为一个了
git commit
git checkout master
git reset --hard HEAD@{1} # 这里是为了恢复引用到合并的提交

git cherry-pick <commit> # 将指定的commit合并到当前分支上
```

```bash

git commit --amend

# -i 交互式 rebase
git rebase -i HEAD~3

# 这里的HEAD~3是想修改的父提交


```

```bash

# --depth=14 表示只下载最后14次提交，这样就可以让下载速度更快，体积更小
git clone --depth=14 https://github.com/angular/angular-phonecat.git


```
