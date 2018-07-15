# go diff



###### env

* `GOROOT`
* `GOPATH`


######

* 直接把代码放在公用代码库的根目录


###### main

* `main`包
* `main.go`
* `main`函数
* `init`函数

###### package

###### import

```go

import (
  "fmt"
  myfmt "mylib/fmt"
  _ "github.com/goinaction/code/dbdriver"  // 只为了执行init函数，使用_避免报错
)

```

1. `GOROOT`
2. `GOPATH`


###### 常用命令

`go build`

`go run`

`go vet`

`go fmt`

`godoc -http=:6060`

###### 简单变量声明运算符

```go

feeds, err := RetrieveFeeds()

```

#### 变量类型

###### 引用类型

###### 值类型
