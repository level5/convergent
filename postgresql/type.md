## 数据类型

###### 数值类型

* serial类型

  `ALTER SEQUENCE `

  `CREATE SEQUENCE`

###### 字符和字符串

* character

  char 类型占用的存储空间是固定的

  在 PostgreSQL 中 char 和 varchar 没有别的性能差别。

* character varying (varchar)
* text

  没有大小修饰符的 varchar 与 text 之间几乎没什么差别。


字符串函数：
* 填充（lpad、 rpad）

  如果字符串超过指定长度的话， lpad 不但不会填充，反而会对其进行截断

* 修整空白（rtrim、 ltrim、 trim、 btrim）
* 提取子字符串（substring）
* 连接（||）
* 将字符串拆分为数组、 表或者子字符串
* 正则表达式和模式匹配


###### 时间类型

* ...
* ...
* timestamp
* timestampz
* ...
* interval
* tsrange
* tszrange
* ...

###### 数组类型

每种数据类型都有相应的以该类型为基础的数组类型.

  ```sql
  SELECT ARRAY[2001, 2002, 2003] As yrs;
  ```

```sql
SELECT array(
  SELECT DISTINCT date_part('year', log_ts) FROM logs ORDER BY date_part('year', log_ts)
);
```

```sql
SELECT '{Alex,Sonia}'::text[] As name, '{43,40}'::smallint[] As age;
```

```
name         | age
-------------+--------
{Alex,Sonia} | {43,40}
```

```sql
SELECT string_to_array('ca.ma.tx', '.') As estados;
```

```sql
SELECT array_agg(log_ts ORDER BY log_ts) As x
FROM logs
WHERE log_ts BETWEEN '2011-01-01'::timestamptz AND '2011-01-15'::timestamptz;
```

```
x
------------------------------------------
{'2011-01-01', '2011-01-13', '2011-01-14'}
```

###### JSON

* json
* jsonb


创建表存储json：
```sql
CREATE TABLE families_j (id serial PRIMARY KEY, profile json);
```

PostgreSQL 会自动对插入的 JSON 文本进行格式检查


函数：
* `json_extract_path`
* `json_array_elements`
* `json_extract_path_text`


```sql
SELECT
  json_extract_path_text(profile, 'name') As family,
  json_extract_path_text(
    json_array_elements(
      json_extract_path(profile,'members')
    ),
    'member',
    'name'
  ) As member
FROM families_j;

```

* `->` Get JSON object field by key

  ```
  '{"a": {"b":"foo"}}'::json->'a'

  {"b":"foo"}
  ```
* `->>` Get JSON object field as text

  ```sql
  '{"a":1,"b":2}'::json->>'b'

  2
  ```
* `#>` Get JSON object at specified path

  ```
  '{"a": {"b":{"c": "foo"}}}'::json#>'{a,b}'

  {"c": "foo"}
  ```

* `#>>` Get JSON object at specified path as text

  ```sql
  '{"a":[1,2,3],"b":[4,5,6]}'::json#>>'{a,2}'

  3
  ```


```sql
SELECT row_to_json(f) As x
FROM (SELECT id, profile->>'name' As name FROM families_j) As f;
```

###### 自定义类型

```sql

# 创建自定义类型
CREATE TYPE complex_number AS (r double precision, i double precision);

# 自定义类型当做表的字段
CREATE TABLE circuits (circuit_id serial PRIMARY KEY, ac_volt complex_number);

# 查询 加括号的原因是为了不让 PostgreSQL 将其理解为表名
SELECT circuit_id, (ac_volt).* FROM circuits;

SELECT circuit_id, (ac_volt).r, (ac_volt).i FROM circuits;
```
