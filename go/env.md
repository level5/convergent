# go


需要知道的一些基本知识


#### 文档

启动一个文档服务器

```

godoc -http=：6060

```
go包的文档 [http://godoc.org](http://godoc.org)

#### 工具

`go fmt` 格式化代码




#### go工具链使用的本地目录结构



#### go语言的一些基本约定

###### 程序的主入口`main.go`

```go
package main // 包名是main

// 导入，下划线
import (
  "log" // 从标准库中导入只需要写模块名，会在GOROOT和GOPATH引用的位置查找
  "os"
  _ "github.com/goinaction/code/chapter2/sample/matchers"
)

// init在main之前调用
func init(){
  log.SetOutput(os.Stdout) // 大写表示公有方法
}

func main() {

}

```
