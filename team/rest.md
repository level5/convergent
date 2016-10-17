# Restful

* separating your API into logical resources. These resources are manipulated using HTTP requests where the method (GET, POST, PUT, PATCH, DELETE) has specific meaning.

  - nouns， not verbs

* Once you have your resources defined, you need to identify what actions apply to them and how those would map to your API. RESTful principles provide strategies to handle CRUD actions using HTTP methods


例子：

1. 创建用户

```
POST /users

{
  "name": "Leon",
  "gender": "male",
  "age": 32
}

HTTP/1.1 201 Created
location: /users/1

{
  "id": 1,
  "name": "Leon",
  "gender": "male",
  "age": 32
}
```

2. 修改用户

```
POST /users/1

{
  "name": "Leon",
  "gender": "male",
  "age": 33
}

PUT /users/1

{
  "name": "Leon",
  "gender": "male",
  "age": 33
}
```

`POST` vs. `PUT`

`PATCH`


3. 查找用户

4. 删除用户


分页，
打破规则，
版本


# UI



你们使用的架构

```
user agent                  server

--------------------------->

                          动态生成html
<----------------------------

```

单页面应用

user agent                  server
---------------------------->
                            返回静态HTML
<----------------------------
js代码
发送ajax请求
----------------------------->
                             restful 接口
                             返回数据
<----------------------------
js将数据渲染
到页面

# Unit Test

# JS
