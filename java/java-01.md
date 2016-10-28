# 01

### 安装必要软件

#### Java

* 检查java是否安装:
  ```bash
  java -version
  ```
* 下载安装包, 并且安装好。这里注意32位和64位的区别
* 配置并解释环境变量一下`JAVA_HOME`, `PATH`
* 重新检测一下java是否安装


#### IDE

* 下载并解压eclipse，注意Java和Eclipse的是相同的版本

#### Maven

* 下载，解压Maven
* 配置环境变量`PATH`, `M2_HOME`, `M2_OPTS`(Xmx1024m -Xss2048k -Xms256m -XX:PermSize=64m -XX:MaxPermSize=256m -XX:ReservedCodeCacheSize=64m )
* `~/.m2`
* `settings.xml`

#### Git

这个可以现在先不介绍

### 简单的介绍

#### 第一个HelloWord的例子

* 使用maven生成第一个hello world项目
* 运行项目

```java
package com.level5.java;

/**
 * Hello world!
 *
 */
public class App
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }
}
```
一个基本的解释：
* `package com.level5.java;` 包
* 注释
* 类(这个是不是需要解释？解释结构)
  - java代码写在一个类中
  - static
  - 方法，成员变量
* 大小写敏感
* 解释`main`是程序的启动入口
* `;`的作用
* `System.out.println` 标准输出
* 字符串
* 通过IDE中语法高亮解释关键字？ (***怎么解释？***)
* 常量

#### 改动例子，加入变量，例如打印，
（***需要加入怎么读取标准输入吗？***）

```java
  int a = 10; // 赋值语句
  int b = 20;
  System.out.println(a + b);

  if (a > b) {
    System.out.println("a大于b");
  } else {
    System.out.println("a小于等于b");
  }
```

```java
  Scanner reader = new Scanner(System.in);
  System.out.println("请输入你的名字：");
  String name = reader.nextLine();

  System.out.print("你好，");
  System.out.println(name);

```

```java
  int sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
  System.out.println(sum);
```

```java
int i = 1;
int sum = 0;
while (i <= 10) {
  sum = sum + i;
  i = i + 1;
}
System.out.println(sum);
```

* 程序有输入，输出，处理
  - 标准输出 `System.out.println()`
  - 输入要处理，就需要要保存起来，保存在内存中
    - 变量
      * 类型， `int`， `String`
* 语法
  * statement
    - 赋值
    ```java
    int a = 10;
    ```
    - 运算符 （这里都大概讲一下好了吧，不用深入）
    ```java
    System.out.println(1 > 2);

    System.out.println(true && false);
    ```
  * Loop
    - 暂时只讲while
  * branching
    - if-else
* 方法（因为后面的例子要调用方法，需要一个例子引出为什么需要方法吗？）
  - 参数
  - 返回值

## 写第一个程序
现在应该已经有足够的知识来写一个猜数字的程序了吧？

版本1，只能猜一次：
```java
package com.level5.java;

import java.util.Random;
import java.util.Scanner;

public class App
{
    public static void main( String[] args )
    {
        Random random = new Random(0);
        Scanner reader = new Scanner(System.in); // reader没有close
        int secret = random.nextInt(101);

        int guess;
        System.out.println("我有一个在1到100之间的数字，你有1次机会来猜一猜是多少");

        System.out.println("请输入你猜的数字：");
        guess = reader.nextInt();

        if (secret == guess)
        {
            System.out.println("恭喜你，你猜对了！");
        } else {
            System.out.println("你猜错了！");
        }
    }
}
```

* 需要提前讲什么是类和实例吗？

扩展题目1，告知猜大了还是猜小了。

题目2：求从１加到100的和
```java
    public static void main( String[] args )
    {
    	int sum = 0;
    	for(int i = 1; i <= 100; i = i+1) {
    		sum = sum + i;
    	}
    	System.out.println(sum);
    }
```

#### 练习
1. n!
2. 60~70分及格，70~90分良好，90分以上优秀。让用户输入一个分数，提示等级。

版本2，可以猜n次，并且每次提心到底是大还是小了：

```java
public class App
{
    public static void main( String[] args ) {
        Random random = new Random(0);
        Scanner reader = new Scanner(System.in);
        int secret = random.nextInt(101);

        int guess = -1;
        System.out.println("我有一个在1到100之间的数字，你有1次机会来猜一猜是多少");

        int i = 0;
        while (guess != secret && i < 6) {
        	System.out.println("请输入你猜的数字：");
            guess = reader.nextInt();

            if (guess > secret) {
            	System.out.println("太大了！");
            } else {
            	System.out.println("太小了！");
            }

            i = i + 1;
        }

        if (guess == secret) {
        	System.out.println("恭喜你，答对了！");
        } else {
        	System.out.println("对不起，你的机会用完了！");
        	System.out.println("正确答案是: " + secret);
        }

        reader.close();
    }
}
```


