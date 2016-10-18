```bash
# --amend
# --allow-empty
# --reset-author
git commit --amend --allow-empty --reset-author

```

```bash

# 清除当前工作区中没有加入版本库的文件和目录，可以删除新增的文件
git clean -fd

git rm --cached

git checkout .
git checkout --

git checkout HEAD

git reset HEAD

```

```bash

# 工作区与暂存区比较
git diff

# 工作区与HEAD的比较
git diff HEAD
git diff master

# 暂存区和HEAD的比较
git diff --cached
git diff --cached HEAD



```
```bash

git log

git log --pretty=oneline
git log --oneline

git log --graph

git log --pretty=

```

### reset

```bash

git reset

git reset --hard

git reset --soft

git reset --mixed

```

### stash

```bash
# 保存当前的工作进度到stash栈中，工作区和暂存区的都保存，
# 这里，如果文件没有关联进来(新文件没有add)，就不能够stash
git stash
git stash list # 显示stash栈列表

# 如果带上<stash>的话，操作的就是引用指定的<stash>，否则就是默认的最新的进度
# 比如：
git stash pop stash@{1}

git stash pop [<stash>] # 恢复stash栈顶的工作进度,从栈中删除这条记录, 这个时候，原来属于暂存区退到工作区
git stash pop --index [<stash>] # 除了恢复工作区，还恢复暂存区的进度,从栈中删除这条记录

git stash apply --index [<stash>] # 除了不删除这条记录，和pop一样

git stash drop [<stash>] # 删除最新的一条记录

git stash clear # 删除所有的记录

# 基于stash来创建分支
git stash branch <branch-name> [<stash>]

# git stash 是通过变更日志reflog来实现的
git reflog show refs/stash # 可以查看stash list


# 所以说，git stash其实是refs/stash所引用的提交，然后变化由reflog记录下来了

```



```bash

git add -i # 进入交互式界面

```
