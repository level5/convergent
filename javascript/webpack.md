# Webpack
1. 配置
  * 拆分成多个配置文件， 通过`--config`来指定所使用的config文件
  * 使用一个单一的配置文件，但是包含多个分支，通过npm的环境变量来决定最终产生的配置
2. 执行
3. 设置dev server


## 插件

> 我的问题：
> 1. Plugin本质是什么？
> 2. Plugin的输入是什么，输出是什么？
> 3. Plugin什么时候被执行？什么顺序被执行？


预备知识：

* `compiler` 就是一个关于webpack的对象，在webpack运行的时候创建起来，包含了webpack的各种配置，loaders，plugins的信息。当一个plugin被执行的时候。这个对象的引用会被传递给这个plugin。
* `compilation`
