## PostgreSQL

### 表

```sql
CREATE TABLE logs (
  log_id serial PRIMARY KEY,
  user_name varchar(50),
  description text,
  log_ts timestamp with time zone NOT NULL DEFAULT current_timestamp
);

CREATE INDEX idx_logs_log_ts ON logs USING btree (log_ts);
```

#### 继承

* 如果创建一张表（子表）时指定为继承自另一张表（父表），则建好的子表除了含有自己的字段外还会含有父表的所有字段。
* PostgreSQL 会记录下这个继承关系， 这样一旦父表的结构发生了变化，子表的结构也会自动跟着变化。
* 当查询父表时， PostgreSQL 会自动把子表的记录也取出来
* 主表的主键约束、唯一性约束以及索引就不会被继承，Check 约束会被继承


```sql

CREATE TABLE logs_2011 (PRIMARY KEY(log_id)) INHERITS(logs);


```


#### 无日志表

```sql
CREATE UNLOGGED TABLE web_sessions (
  session_id text PRIMARY KEY,
  add_ts timestamptz,
  upd_ts timestamptz,
  session_state xml
);
```

#### 类型

PostgreSQL 在创建一张表时，会自动在后台创建一个结构完全相同的复合数据类型

```sql
CREATE TYPE basic_user AS (user_name varchar(50), pwd varchar(10));

CREATE TABLE super_users OF basic_user (
  CONSTRAINT pk_su PRIMARY KEY (user_name)
);
```

为复合数据类型新增或者移除字段时， PostgreSQL 会自动修改相应的表结构

```sql

ALTER TYPE basic_user ADD ATTRIBUTE phone varchar(10) CASCADE;

```

通常，如果表依赖于某个类型，那么你就不能更改该类型的定义。 CASCADE 修饰符凌驾于此限制之上，对所有相关表应用相同的更改。


### 约束


##### 外键约束

PostgreSQL 在建立主键约束和唯一性约束时，会自动为相应字段建立索引，但在建立外键约束时却不会， 这一点需要注意。

```sql

ALTER TABLE facts ADD CONSTRAINT fk_facts_1 FOREIGN KEY (fact_type_id)
  REFERENCES lu_fact_types (fact_type_id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

```

我们定义了一个级联规则，实现了以下功能：

1. 如果主表 lu_fact_type 的 fact_type_id 字段值发生了变化，那么从表 fact 中相应记录的 fact_type_id 字段值会自动进行相应修改， 以维持外键引用关系不变

2. 如果从表 fact 中还存在某 fact_type_id 字段值的记录，那么主表 lu_fact_type 中相同 fact_type_id 字段值的记录就不允许被删除

##### 唯一性约束

##### check约束

##### 排他性约束

### 索引

```sql

CREATE TABLE test1 (
    id integer,
    content varchar
);

CREATE INDEX test1_id_index ON test1 (id);

```

大表创建索引可能花时间比较长，`select`可以和索引创建并行执行，但是`insert`, `delete`, `update`会被block。

默认创建的是`B-tree`索引

可以使用`B-tree`索引的操作：
- `<`
- `<=`
- `=`
- `>=`
- `>`
- `BETWEEN` and `IN`
-  `IS NULL` or `IS NOT NULL`
- `LIKE 'foo%'`

`Hash`索引,只支持
- `=`

```sql

CREATE INDEX name ON table USING HASH (column);

```

`GiST`索引，
