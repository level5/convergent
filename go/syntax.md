# Syntax

总体和C更像。


## diff

声明变量时，使用零值来初始化变量


## 基本语法

#### 引用类型

每个引用类型创建的标头值是包含一个指向底层数据结构的指针。标头值里包含一个指针，因此通过复制来传递一个引用类型的值的副本，本质上就是在共享底层数据结构。


`slice`, `map`, `channel`, `interface`, `function type`都是引用类型，严格来说`string`也是。

```go

type IP []byte // 声明为byte类型的slice，是slice，不是数组

```

#### 数组

赋值：

```go

var array [5]int // 初始化为 [0, 0, 0, 0, 0]

array := [5]int {1, 2, 3, 4, 5}

array := [...]int {1, 2, 3, 4, 5} // 由实际个数决定数组长度

array := [5]int {1: 10, 4: 40} // array[1]初始化为10， array[4]初始化为40，其余的都为0

array [5]*int

```

使用：

```go

var array1 [5]string  // 创建了一个数组

array2 := [5]string{"Red", "Green", "Blue", "Yello", "Black"} // 创建了另外一个数组

array1 = array2 // 把array2整个复制了一遍，["Red", "Green", "Blue", "Yello", "Black"]现在在内存中有两份

```


数组变量的类型包括数组长度和每个元素的类型。只有这两部分都相同的数组，才是类型相同的数组。

```go

var array1 [4]string

array2 := [5]string{"Red", "Green", "Blue", "Yello", "Black"}

array1 = array2 // 编译错误

```

多维数组：

```go



```

#### 切片 slice


```go

// 长度和容量都是5
slice := make([]string, 5)


// 长度为3， 容量为5
slice := make([]string, 3, 5)

slice := []string {"Red", "Green", "Blue", "Yello", "Black"}

var slice []int // nil切片

slice := []int{} // 和nil的区别？

```

```go

slice := []string {"Red", "Green", "Blue", "Yello", "Black"}

newSlice = slice[1:3]

newSlice := append(slice, 60)

```


#### 映射 map


## struct

```go

type Time struct {
  sec int64
  nosec int32
}

```

###### 嵌入类型


```go

type user struct {
  name string
  email string
}

func (u *user) notify() {
  fmt.Printf("Sending user email to %s<%s>", u.name, u.email)
}

type admin struct {
  user // 嵌入
  level string
}

func main() {
  ad := admin {
    user: user{
      name: "John Smith",
      email: "john@email"
    },
    level: "super"
  }

  ad.user.notify()

  ad.notify()
}

```

```go

func (a *admin) notify() {
  fmt.Printf("Sending admin email to %s<%s>", a.name, a.email)
}

//
ad := admin {
  user: user{
    name: "John Smith",
    email: "john@email"
  },
  level: "super"
}

ad.user.notify() // 直接访问内部类型的方法

ad.notify() //内部类型的方法没有被提升

```

###### 包访问级别

当一个标识符的名字以***小写字母开头***时，这个标识符就是***未公开***的，即包外的代码不可见。如果一个标识符以***大写字母开头***，这个标识符就是公开的，即被包外的代码可见。

## method

```go

type user struct {
  name string
  email string
}


func (u user) notify() {
  fmt.Printf("Sending email to %s<%s>\n", u.name, u.email)
}

func (u *user) changeEmail(email string) {
  u.email = email
}

```

* 值接收者

  ***这个时候会创建一个值的副本***

* 指针接收者

  ***指针接受者使用实际值来调用方法***

## interface

变量：

* 值赋值给接口变量，接口值是一个两个字长度的数据结构，第一个字节指向内部表的指针，包含值的类型信息和方法集，第二个字节是指向值的指针。

* 指针赋值给接口变量，第一个字节保存值得指针类型信息和方法集

```go
package main

import (
  "fmt"
)

type notifier interface {
  notifiy()
}

type user struct {
  name string
  email string
}

func (u *user) notify() {
  fmt.Printf()
}


func main() {

  u := user{"Bill", "bill@gmail.com"}

  sendNotification(u) // 编译报错， user类型没有实现notify方法

  sendNotification(&u) // 能够正常编译
}

func sendNotification(n notifier) {
  n.notify()
}

```

为啥会报错？

方法集：

| Value | Method Receivers |
|---|-------|
| T | (t T) |
|*T | (t T) and (t *T)|

为什么要这样定义呢？

```go

type duration int

func (d *duration) pretty() string {
  return fmt.Printf("Duration: %d", *d)
}

func main() {
  duration(42).pretty() // 不能获取duration(42)的地址。 why？？
}

```

## 并发

并发 vs. 并行

并行的关键是同时做很多事情，而并发是指同时管理很多事情

* 进程
* 线程
* 协程

***goroutine***

```go

package main

import (
  "fmt"
  "runtime"
  "sync"
)

func main(){

  // 分配一个逻辑处理器给调度器使用
  runtime.GOMAXPROCS(1)

  var wg sync.WaitGroup
  wg.Add(2)

  fmt.Println("Start Gorutines")

  go func() {
    defer wg.Done()

    for count := 0; count < 3; count++ {
      for char := 'a'; char < 'a' + 26; char++ {
        fmt.Printf("%c ", char)
      }
    }
  }()

  go func() {
    defer wg.Done()

    for count := 0; count < 3; count++ {
      for char := 'A'; char < 'A' + 26; char++ {
        fmt.Printf("%c ", char)
      }
    }    
  }()

  fmt.Println("Waiting To Finish")
  wg.Wait() // 等待gorutine结束

  fmt.Println("\nTerminating Program")
}

```

`defer`: 函数返回时才执行，压栈的方式。


***race condition***

对共享资源的读和写操作必须是原子化的。

```go

import (
  "sync/atomic"
)

count int64

atomic.AddInt(&count, 1)

```


```go

// mutex

mutex.Lock()
// ...
mutex.Unlock()

```

***channel***

```go

unbuffered := make(chan int)

buffered := make(chan string, 10)
buffered <- "Gopher"
value := <- buffered

```

* unbuffered channel，双方都准备好了，否则会block
* buffered channel


***runner***
