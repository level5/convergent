# 03 类和对象
Java中万物皆对象（除了基本类型）

从***拟物***的角度来看类和对象。类就是对事物的抽象

还有其他角度，数据抽象的角度看的话。继承是对代码的复用，比如`Maths`这种工具类的话，没办法从拟物的角度来看吧。

* 比如说人是一个抽象的概念， 对应的是类，人有名字，还有性别。有这些属性来描述这个人。
* 具体的张三就是人这个抽象的一个具体实例，对应的就是类的实例。他的名字是张三，性别是男。人这个抽象
的属性到了一个具体的人就有具体的值了。
  - 名字： 张三
  - 性别： 男

```java
public class Person {             // 关键字 class，关键字public，说明对谁可见
	String name;     // 成员变量，类定义了成员变量，实例给成员变量不同的值
	int age;

	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

}

public static void main( String[] args )
{
  Person zhangSan = new Person("ZhangSan", 23);
  Person liSi = new Person("LiSi", 22);

  System.out.println(zhangSan.name);  // 每个实例对应的名字不一样，可以在强调一下驼峰命名。
  System.out.println(liSi.name);
}
```

## 例子来说明什么是类

吹牛软件公司成立了！

* 老板开了间软件公司，要雇佣几个职员给他干活， 职员这个就是一个抽象，张三李四就是具体的职员。

  ```java
  public class Employee {

  	String name;
  	int age;

  	public Employee(String name, int age) {
  		this.name = name;
  		this.age = age;
  	}
  }

  public class App
  {
    public static void main( String[] args ) {
      Employee zhangSan = new Employee("张三", 15);

    	System.out.println(zhangSan.name);
    	System.out.println(zhangSan.age);

      Employee liSi = new Employee("李四", 16);
    }
  }
  ```

  - class关键字
  - 类名`Person`,大写开头
  - 构造函数，区别于其他函数，没有返回值
  - `new`,创建一个对象，会执行构造函数
  - 成员变量，用来保存一个具体实例的状态
  	* 比如张三这个人，有姓名，年龄
  - `this`用来指代对象自己本身
  - 方法中可以使用成员变量


* 比如说老板找员工来是为了干活的，这个时候，员工需要提供一个干活的方法

  ```java
  package com.level5.quickstart;

  public class Employee {

  	String name;
  	int age;

  	public Employee(String name, int age) {
  		this.name = name;
  		this.age = age;
  	}

    public String work() {

  		return "我叫" + name + ", 我使劲写，今天写了200行代码！";
  	}
  }

  ```
  - 静态成员
  - 静态方法
  - 方法
  - 我名字，年龄，工资等东西其他人也不关系，需要知道的话查看我的员工信息就可以了。
  - 老板找员工来的话肯定是为了工作，不会关心你怎么写代码的，只关心让你干活挣钱。
  ```java
  private String name;
  private String age;

  public String description() {...}
  ```
  - 这种细节都保留在类的内部，叫做封装。
  - work方法也只是对外暴露签名，具体怎么实现的对于调用的人，老板来说，也是隐藏的。

* 这个时候，软件写得差不多了。老板又找了个销售来把软件买出去。这个时候，公司有了程序员和销售。他们职位不一样，干的活不一样.
  - 一种比较土的方式是：
  ```java

  ```
  - 程序员和销售也是对一个职业的抽象。同时他们都是职员。
    * 可以写成继承
    * super
    * `work`变成抽象方法， 抽象类
    * 老板不会去区分程序员和销售，只会命令他们干活挣钱。多态
* 销售觉得职员类给的这个描述太low，自己定义了一个更高大上的描述。重写
* 程序员经常被人叫去修电脑，可能他们不会修， 添加修电脑的功能，子类可以比父类提供更多方法。
* 程序员对公司外部的人来说是不需要打交道的，这个时候就可以不用定义成public的类，访问权限

总结一下上面讲到的语法（需要优化，安排一下顺序）
* 类的定义
* 实例化类
* 构造函数
* 成员变量
* 方法
* 抽象类, 抽象方法
* 父类，子类， 单继承

额外补充（需要优化，安排一下顺序）
  - 包，命名空间
  -
  - 方法的重载
  - 接口
    * 定义
    * 继承
    * 实现多个接口
    *
  - 引用类型的变量，值变量， - `==` 比较的是什么
  - ~~equals方法~~
  - 定义多个构造方法
  - 初始化程序块
  - 所有class的祖先
  - 默认构造方法
  - getter， setter， JavaBean
  - `final`字段


* 再举一个例子
* 补充剩余的没有讲过的语法
* ~~从另外一个角度来说明类和对象~~

* 总结面向对象的几个特征：
  1. 封装
  2. 继承
  3. 多态
#### String
* 不变对象
  - final关键字是不是在这里介绍比较好
* 正则表达式


## 补充

### 变量，说明值变量和引用变量

### `this`
