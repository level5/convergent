# SQL

### 特色SQL


#### `DISTINCT ON`

类似于`DISTINCT`，distinct是将结果集中重复的行删除。

`DISTINCT ON`是指定特定的列，先按这个列排序，然后选择这个列相同的数据第一次出现的行，其余的行删除掉。

`DISTINCT ON`修饰符支持设置多列，运算时将基于这多个列的总体唯一性来进行去重操作

同时查询语句中 `ORDER BY` 子句的排序字段列表的最左侧必须是 `DISTINCT ON` 指定的字段列表

```sql

SELECT DISTINCT ON (left(tract_id, 5))
  left(tract_id, 5) As county, tract_id, tract_name
FROM census.lu_tracts
ORDER BY county, tract_id;

```


#### `LIMIT`和`OFFSET`关键字

```sql

SELECT DISTINCT ON (left(tract_id, 5))
  left(tract_id, 5) As county, tract_id, tract_name
FROM census.lu_tracts
ORDER BY county, tract_id LIMIT 3 OFFSET 2;

```

#### `CAST`

`CAST('2011-1-11' AS date) `

简写：

`'2011-1-1'::date`

#### 一次性插入多条记录

```sql

INSERT INTO logs_2011 (user_name, description, log_ts)
VALUES
  ('robe', 'logged in', '2011-01-10 10:15 AM EST'),
  ('lhsu', 'logged out', '2011-01-11 10:20 AM EST');

```

`VALUES`是一个动态生成的临时结果集


```sql

SELECT *
FROM (
  VALUES
    ('robe', 'logged in', '2011-01-10 10:15 AM EST'::timestamptz),
    ('lhsu', 'logged out', '2011-01-11 10:20 AM EST'::timestamptz)
  ) AS l (user_name, description, log_ts);

```


#### 使用`ILIKE`实现不区分大小写的查询

```sql

SELECT tract_name FROM census.lu_tracts WHERE tract_name ILIKE '%duke%';

```

#### 可以返回结果集的函数

```sql

# 创建表：
CREATE TABLE interval_periods (i_type interval);
INSERT INTO interval_periods (i_type)
  VALUES('5 months'), ('132 days'), ('4862 hours');

# 每行记录变多行：
SELECT i_type,
  generate_series('2012-01-01'::date,'2012-12-31'::date,i_type) As dt
FROM interval_periods;

```

#### 限制对继承表的DELETE、 UPDATE、 INSERT操作的影响范围

如果表间是继承关系，那么查询父表时就会将子表中满足条件的记录也查出来

`DELETE` 和 `UPDATE` 操作也遵循类似逻辑，即对父表的修改操作也会影响子表的记录


#### 将修改影响到的记录行返回给用户

```sql
UPDATE census.lu_fact_types AS f
SET short_name = replace(replace(lower(f.fact_subcats[4]),' ','_'),':','')
WHERE f.fact_subcats[3] = 'Hispanic or Latino:' AND f.fact_subcats[4] > ''
RETURNING fact_type_id, short_name;
```

#### 在查询中使用复合数据类型

```sql

SELECT x FROM census.lu_fact_types As x LIMIT 2;

```

#### 适用于聚合操作的FILTER子句

```sql

SELECT student,
  AVG(CASE WHEN subject ='algebra' THEN score ELSE NULL END) As algebra,
  AVG(CASE WHEN subject ='physics' THEN score ELSE NULL END) As physics
FROM test_scores
GROUP BY student;

```
等价：

```sql

SELECT student,
  AVG(score) FILTER (WHERE subject ='algebra') As algebra,
  AVG(score) FILTER (WHERE subject ='physics') As physics
FROM test_scores
GROUP BY student;

```

#### 窗口函数

...

窗口函数包含一个`OVER`子句, 跟着函数名和参数。

通过使用窗口函数，可以在当前记录行中访问到与其存在特定关系的其他记录行。

```sql

SELECT tract_id, val, AVG(val) OVER () as val_avg
FROM census.facts
WHERE fact_type_id = 86;

```

`AVG`的记录是所有满足`fact_type_id`等于86的记录。

###### `PARTITION BY`

```sql

SELECT tract_id, val, AVG(val) OVER (PARTITION BY left(tract_id,5)) As val_avg_county
FROM census.facts WHERE fact_type_id = 2 ORDER BY tract_id;

```

看上去是过滤所有查询经过中的`left(tract_id, 5)`和当前行的`left(tract_id, 5)`相同的行。


对比员工和他所在部门的平均工资：
```sql


SELECT depname, empno, salary, avg(salary) OVER (PARTITION BY depname) FROM empsalary;

```

##### `ORDER BY`

`ORDER BY` 子句，其作用可以理解为对窗口可见范围内的所有记录进行排序, 窗口可见记录域是从结果集的***第一条记录开始到当前记录为止的范围内***

```sql

SELECT depname, empno, salary, rank() OVER (PARTITION BY depname ORDER BY salary DESC) FROM empsalary;

```

```sql

SELECT ROW_NUMBER() OVER (ORDER BY tract_name) As rnum, tract_name
FROM census.lu_tracts
ORDER BY rnum LIMIT 4;

```

#### CTE

```sql

WITH cte AS (
  SELECT
    tract_id, substring(tract_id,1, 5) As county_code,
    COUNT(*) OVER(PARTITION BY substring(tract_id,1, 5)) As cnt_tracts
  FROM census.lu_tracts
)
SELECT MAX(tract_id) As last_tract, county_code, cnt_tracts
FROM cte
WHERE cnt_tracts > 100
GROUP BY county_code, cnt_tracts;

```

#### `LATERAL`

```sql

SELECT * FROM census.facts L INNER JOIN LATERAL
  (SELECT * FROM census.lu_fact_types
    WHERE category = CASE WHEN L.yr = 2011 THEN 'Housing' ELSE category END) R
  ON L.fact_type_id = R.fact_type_

```
