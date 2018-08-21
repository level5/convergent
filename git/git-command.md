
```bash

git init

git add *.js
git add README.md
git commit -m 'inital project'


git clone <url> <mydir>


git status

git status -s 
git status --short

cat .gitignore

# sample of .gitignore

# no .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf



# 尚未暂存的文件更新部分，git diff不带参数
git diff

# 暂存的将要添加到下次提交里的内容
git diff --cached
git diff --staged

git commit
git commit -m

# 跳过暂存这个步骤
git commit -am

git rm
# 如果删除之前修改过，并提交暂存区了，需要使用-f强制删除
git rm -f

# 想把文件从git仓库删除，但是希望保留在工作目录中
git rm --cached *.a

```
