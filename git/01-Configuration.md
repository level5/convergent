# 配置

`git config`工具设置git的行为和外观。这些变量保存在三个位置，使用`ini`文件来保存。


1. ```/etc/gitconfig```， 系统上每一个用户
2. ```~/.gitconfig```或者```~/.config/git/config```， 针对该用户
3. 当前仓库下的```.git/config```， 针对该仓库

> 在 Windows 系统中，Git 会查找 `$HOME` 目录下（一般情况下是 `C:\Users\$USER`）的 `.gitconfig` 文件。 Git 同样也会寻找 `/etc/gitconfig` 文件，但只限于 MSys 的根目录下，即安装 Git 时所选的目标位置。

```bash
# 进行
git config --system
```
