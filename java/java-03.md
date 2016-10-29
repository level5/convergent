# 03 类

基本数据类型之外，高级数据类型

##　类的定义
```java
package com.zzty.quickstart;

public class Point {

	public double x;
	public double y;
	
	// 默认构造方法
	public Point(double x, double y) {
		this.x = x;
		this.y = y;
	}
	
	public double distanceFromOrigin() {
		return Math.sqrt(x*x + y*y);
	}
}
```

* 成员变量
* 构造函数
* this
* 方法

## 使用对象

```java
public static void main( String[] args )
{
    Point p = new Point(3, 4);
    System.out.println(p.distanceFromOrigin());
}
```

* 引用变量，值变量
* `null`
* 类方法调用

## String是一个类
