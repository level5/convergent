# Restful

使用HTTP协议

使用URL来表示一个resource

使用Http Method来表示动作

response返回的是数据

example：

创建一个用户


# 团队开发

## 版本管理

### 代码管理

### 数据库管理

- 无论什么环境都能用相同的步骤来构建数据库
- 能够反复执行多次
- 文本文件

## 缺陷管理

## 持续集成

### CI必备条件

- 版本管理工具

  git

- build工具

  maven

- 测试代码

  TDD, BDD
  JUnit

  * 单元测试
  * 集成测试
  * 用户验收测试
  * 回归测试
  * UI测试

- CI工具

  jenkins

  * 下载代码
  * 自动build并运行测试
  * 统计结果，制作报表
    - 测试结果
    - 代码覆盖率
    - 代码静态分析
  * 通知
