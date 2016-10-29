# 03 类和对象
Java中万物皆对象（除了基本类型）， 从拟物的角度来看类和对象。类就是对事物的抽象

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

* 比如说老板找员工来是为了干活的，这个时候，员工需要提供一个干活的接口

  ```java
  package com.level5.quickstart;

  public class Employee {

  	String name;
  	int age;

  	public Employee(String name, int age) {
  		this.name = name;
  		this.age = age;
  	}

    public void work() {
  		System.out.println("我叫" + name + ", 我使劲写代码！");
  	}
  }

  ```
  - 老板找员工来的话肯定是为了工作，不会关心你怎么写代码的，只关心让你干活挣钱。
  - 我名字，年龄，工资等东西其他人也不关系，需要知道的话查看我的员工信息就可以了。
  ```java
  private String name;
  private String age;

  public String description() {...}
  ```
  - 这种细节都保留在类的内部，叫做封装。

* 这个时候，软件写得差不多了。老板又找了个销售来把软件买出去。这个时候，公司有了程序员和销售。他们职位不一样，干的活不一样.
  - 一种比较土的方式是：
  ```java

  ```
  - 程序员和销售也是对一个职业的抽象。同时他们都是职员。可以写成继承
  - 老板不会去区分程序员和销售，只会命令他们干活挣钱。多态
* 再举一个例子
* 补充剩余的没有讲过的语法
* 从另外一个角度来说明类和对象
  - 代码组织和复用
* 变量，引用变量，值变量的区别
* 总结面向对象的几个特征：
  1. 封装
  2. 继承
  3. 多态
#### String
* 不变对象
