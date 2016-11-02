# 02

## 变量
* 字母和数字，但是第一个字符不能是数字
* 不能是关键字：
  - TODO: 列出关键字，不需要死记
* 驼峰命令
## 基本类型
* 二进制，十进制
  - 什么是二进制，什么是十进制
  - 使用系统所带的计算器来进行转换
  ```
  2进制   10进制
  0       0
  1       1
  10      2
  11      3
  100     4
  ```
  ```
  10进制：
    - 1111 = 1*10^(4-1) + 1*10^(3-1) + 1*10^(2-1) + 1*10^(1-1)
  2进制：
      1111 = 1*2^(4-1) + 1*2^(3-1) + 1*2^(2-1) + 1*2^(1-1)
  ```
  - 八进制，十六进制
* 基本类型分成： 数字，字符，布尔，byte
* 数字分为整数和浮点数
 - 整数，short, int, long
 - 浮点数，float， double
   ```java
   // 整数
   int i = 10;
   short s = 10;
   long l = 10;

   // 浮点数
   double d = 11.0;
   float f = 11.0f;
   ```
* 字符
 - 字符，16位整数表示字符
 - ASCII, 让大家在网上搜索一下ASCII
   ```java
   char c = 'a';
   int i = c;
   System.out.println(i);
   ```
* 基本类型之间的转化
 - 小到大隐式转换
  ```java
  i = s;
  ```
 - 大到小就必须强制转，怎么样强制转？
  ```java
  s = (short)i;
  ```
 - 不同类型做运算的转换，转换自动转化为大的类型
  ```java
  // i = i + l; // 编译错误
  l = i + l;
  ```
 - 16位的不同类型进行计算的时候，会转换为32位的int类型
* 布尔就两个值`true`, `false`
* 数组
  - 数组是内存中一块连续的区域（画一下图）
  - 定义
  - 下标，可以理解为相对开始位置的距离
  ```java
  int[] arr = new int[10];
  arr[0] = 10;
  arr[1] = 11;

  System.out.println(arr[0]);
  ```
* 一个特殊的类型，`String`

## 运算符
* 加减乘除
  - 加号对于字符串来说是拼接
  - 除法，如果两个参数都是整数，结果也是整数，余数会被抛弃。如果有一个是浮点数，结果也是浮点数。
  - 求模
  ```java
  int a = 1 + 2;
  a = 1 * 2;
  a = 3 / 2;
  double d = 3 / 2.0;
  a = 3 % 2;
  ```
* `++`, `--`
  ```java
  int a = 0;
  System.out.println(++a);
  System.out.println(a);
  System.out.println(a++);
  ```
* 比较运算符
  ```java
  boolean t = 3 > 2;
  boolean f = 3 == 2;
  ```
* 逻辑运算符，短路
* 赋值运算符`+=`
* 三元运算符
* 优先级，结合性，加括号
  - 运算符是从左到右还是从右到左
  - 两个操作符，优先级高的先执行
  - 两个操作符优先级相同的时候，根据运算顺序决定谁先执行
  - 不需要特别去死记优先级，通过括号来改变优先级
  ```java
  int a = 1 + 2 * 3;

  a = (1 + 2) * 3;

  // 因为 = 是从右往左执行
  int b = a = 10; // int b = (a = 10);
  ```
* 基本不会用到的操作。（过掉，有兴趣自己看）
  - 位操作`!`, `&`, `|`, `^`, `~`
  - 位移运算符`>>`, `<<`, `>>>`

## 分支
* `if-else`, 不带大括号
* 强制自己写的时候带上大括号
* 大括号就是一个代码块
* `if-else if...`
  ```java
  public static void main( String[] args )
  {
    Scanner read = new Scanner(System.in);

    System.out.println("请输入分数：");
    int score = read.nextInt();

    if (score >= 90) {
      System.out.println("分数为优秀！");
    } else if (score >= 70) {
      System.out.println("分数为良好！");
    } else if (score >= 60) {
      System.out.println("分数为及格！");
    } else {
      System.out.println("分数为不及格！");
    }
  }
  ```

## 迭代
* `for`
  - 求100的阶乘
* `while`, `do-while`
  - 使用`while`改写100阶乘的例子
  - `do-while`，条件第一次就为假的情况下，也会被执行一次
* `for-each`
  - 遍历数组
* `break`, `continue`
* 遍历数组

## switch
* 使用`switch`改写分数的例子

## 方法
* 为什么有方法。重复代码提取方法
* 方法的格式， 返回参数，方法名，参数列表
* 方法调用
