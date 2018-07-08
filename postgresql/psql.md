# Postgresql


## 管理

### 配置文件

#### `postgresql.conf`

#### `pg_hba.conf`

#### `pg_ident.conf`

### 连接

### 角色


### PSQL

环境变量：
* `PGHOST`
* `PGPORT`
* `PGUSER`

设定这些环境变量之后，使用psql就可以不需要显示指定主机，端口和用户跟 PostgreSQL 自带的其他命令行工具是一样的。

* `PSQL_HISTORY`

  该变量用于设置 psql 历史日志文件名。

  该日志中记录了近期通过 psql 执行过的所有命令行，其默认值为`~/.psql_history`

* `PSQLRC`

  该变量用于设置配置文件的路径和文件名

* `HISTSIZE`

  环境变量决定了系统存储的历史命令行的数量

  psqlrc配置：
  ```
  \set HISTSIZE 10
  ```

psql 在启动阶段会搜索一个名为 psqlrc 的配置文件，如果找到则会顺序执行其中的配置动作，这些配置决定了 psql 的一些行为模式。

* 在 Linux/Unix 环境中，该文件一般会被命名为 .psqlrc 并放置在 postgres 用户的 home 目录下.
* 在 Windows 上， 该文件叫作 psqlrc.conf 并被放置于 %APPDATA%\postgresql 文件夹下.
  - ` c:\Users\username\AppData\Roaming\postgresql`

设置：
* 语句执行时间统计
* 事务自动提交：AUTOCOMMIT（自动提交）是开着的，也就是说任何一个 SQL 语句执行完毕后，它所做的数据修改都会被立即提交，这种情况下每个语句都是一个独立的事务，一旦执行完毕后其结果就不可撤销。
* 命令别名。

  你可以使用 `\set` 来为某个命令创建别名.

  psqlrc配置：
  ```
  \set eav 'EXPLAIN ANALYZE VERBOSE'
  ```

  实际使用：
  ```shell
  :eav SELECT COUNT(*) FROM pg_tables;
  ```




#### 操作模式

###### 交互模式

###### 非交互模式


使用`-f`执行脚本：
```shell
psql -f some_script_file
```

使用`-c`执行sql语句， 如果要一次执行多个语句，语句之间请用分号分隔：
```shell
psql -d postgresql_book -c "DROP TABLE IF EXISTS dross; CREATE SCHEMA staging;"
```
#### 使用技巧

* ` \?` 列出交互模式下支持的所有命令
* `\h <keyword>` 帮助文档
* `\!` 直接执行操作系统命令
* `\watch` 它可以实现以固定的频率反复执行某个语句
* 显示对象信息
  - `\dt+`

    列出 pg_catalog 中以 pg_t 打头的所有表的信息:

    `\dt+ pg_catalog.pg_t*`

  - `\d+` 查询某个特定对象的详细信息

    `\d+ pg_ts_dict`
* `\copy` 数据的导入和导出







###### `\watch`

实现以固定的频率反复执行某个语句
```sql
# 以 pg_stat_activity 为模板新建一张结构和数据都完全相同的 log_activity 表
SELECT \* INTO log_activity FROM pg_stat_activity;

# 每 5 秒重复一次将 pg_stat_activity 最新数据导入 log_activity 的动作
INSERT INTO log_activity SELECT * FROM pg_stat_activity; \watch 5
```

如果需要终止 watch 进程，请执行 `CTRL-X` 加 `CTRL-C`


###### `\copy`

* 该命令可以将数据导出到文本文件中，同时也可以从文本文件中导入数据
* 文本文件中默认使用制表符作为分隔符， 当然你也可以指定使用其他分隔符
* 文本中必须使用换行符来分隔不同的行




导入数据操作步骤：

1. 新建一个独立的 schema 来作为数据过渡区，然后将新数据导入此 schema 中
2. 通过一些查询来摸清这些数据的特性；最后才把这些数据分门别类导入到正式的产品表中并删除之前建立的过渡区 schema


```
\connect postgresql_book
\cd /postgresql_book/ch03
\copy staging.factfinder_import FROM DEC_10_SF1_QTH1_with_ann.csv CSV
```


导出数据操作步骤：

1. ...
2. ...
