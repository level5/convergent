# 01

### 学习JAVA的优势

#### TIOBE 编程语言社区排行榜 JAVA流行程度达到18.2%(对比第二名C语言的11%)
#### 就业前景广泛
* 传统的企业级应用
* 广泛应用于 web service 开发中(互联网, 以及企业应用开发)
* 大数据相关行业 (流行的大数据框架 Hadoop 开发语言JAVA，促使大数据行业JAVA开发有着广泛前景)
* 新兴语言 scala groovy等 依赖于 JAVA虚拟机，更好 更快的学习理解新兴语言

#### 对于初学者 相较其他语言更容易理解和学习



### 安装必要软件

#### Java

* 检查java是否安装:
  ```bash
  java -version
  ```
* 下载安装包, 并且安装好。
  - JDK, java SE Development Kit
  - JRE, java SE Runtime Environment
  - 这里注意32位和64位的区别
* 配置并解释环境变量一下`JAVA_HOME`, `PATH`
* 重新检测一下java是否安装

#### IDE

* 下载并解压eclipse，注意Java和Eclipse的是相同的版本
* 修改快捷键

#### ~~Maven(这部分可以先不用管了，因为可以使用Eclipse内置的maven)~~
* 下载，解压Maven
* 配置环境变量`PATH`, `M2_HOME`, `M2_OPTS`(Xmx1024m -Xss2048k -Xms256m -XX:PermSize=64m -XX:MaxPermSize=256m -XX:ReservedCodeCacheSize=64m )

### 简单的介绍

#### 第一个HelloWord的例子

* 使用maven生成第一个hello world项目
* 运行项目

```java
package com.zzty.quickstart;

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
* 类
  - java代码写在一个类中
* 大小写敏感
* 解释`main`是程序的启动入口
* `;`的作用
* `System.out.println` 标准输出

新的大纲，介绍三点：
* main
* println
* "Hello World"

#### 改动例子，输出： 欢迎加入自在天涯训练营
#### 改动例子，读取输入的名字xxx，输出： xxx，欢迎加入自在天涯训练营
```java
  Scanner reader = new Scanner(System.in);
  System.out.println("请输入你的名字：");
  String name = reader.nextLine();

  System.out.print("你好，");
  System.out.println(name);

```
* 字符串
* 变量
* 程序有输入，输出，处理
  - 标准输出 `System.out.println()`
  - 输入要处理，就需要要保存起来，保存在内存中
    - 变量
      * 类型， `int`， `String`


## 写第二个程序
版本1，随机生成一个0~9的数字，然后读取用户的输入，并提示用户输入的结果是否正确。
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
        int secret = random.nextInt(10);

        int guess;
        System.out.println("我有一个在0到9之间的数字，你有1次机会来猜一猜是多少");

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
新知识点：
* `if-else`
#### 练习
1. 扩展题目1，告知猜大了还是猜小了。

## 第三个程序
求从１加到100的和
改成while
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
2. 60分一下不及格，60~70分及格，70~90分良好，90分以上优秀。让用户输入一个分数，提示等级。
3. （根据大家的反馈决定是否需要）版本2，随机生成一个0~99的数字，然后读取用户的输入，并提示用户输入的结果是否正确，用户有6次机会来猜数字是多少。

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
    }
}
```
