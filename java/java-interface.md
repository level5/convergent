# java interface

interface 中文译接口，是用来规范具有相同操作的一组类。例如 有一组类Car， Plane， Bike， Bus。 
他们作为交通工具的一种都具有 指定司机，驾驶，以及获取昨座位数量的功能。
但是各个类的功能具体实现又各不相同， Car(启动， 拉开手刹车， 踩油门 等等)， Bike（上车蹬就可以了）。

这样我们就可以定义一个 叫做Vihecle的接口， 接口里指明 我需要有 setDriver, dirve, getSeatNum等方法。 但是不做具体的实现。
具体的类Car Plane 可以实现我的接口， 在各自方法里写自己需要的逻辑。

## 语法
跟类的定义比较相似， 关键字class变为 interface， 方法只需要声明不需要真正的实现。
```java
public interface Vehicle {

	public void setDriver(Driver driver);
	public int getSeatNumber();
	public void drive();
}
```

## 使用
定义类的时候 后面用implements 关键字再加上接口名字, 并且实现相关方法的逻辑
```java
public class Car implements Vehicle {

	Driver driver;

	@Override
	public void setDriver(Driver driver) {
		this.driver = driver;

	}

	@Override
	public int getSeatNumber() {
		return 4;
	}

	@Override
	public void drive() {
		if (driver == null) {
			System.out.println("no driver");
		} else {
			driver.driveCar();
		}
	}
  
  prublic public getCarLicenceNum(){
    return "沪 123456";
  }
}
```

##举例说明为什么要用到interface
比如你自己写了一个程序，其中有一项功能就是下载一个文件，当下载完成后可以用QQ或者email 通知用户下载完成。
一般网上都会有各种先成的jar包来做这项工作，我们不需要自己写。
现在你找到了一个jar 提供相关功能. 查看文档后发现调用 FileDownloader.downloadAndNotifyWhenFinished(String url, NotifyTool notifyTool)就可以做这件事
因为文件下载时很通用的事情，所以jar会实现相关的代码， 但是通知方式有多种qq weixin email，
别人写的代码并不知道你用哪一种，不可能都实现，所以他就会把第二个参数 NotifyTool 定义为一个接口类型
你需要用什么方式，发什么消息都是自己写一个实现这个接口的类，然后传给这个方法就可以。

```java
public class FileDownloader {

	/**
	 *  This method is used to download file and send you a message when file download finished.
	 *  
	 * @param url   file url.
	 * @param notifyTool is interface, means a communication tool used to send you the message. 
	 */
	public static void downloadAndNotifyWhenFinished(String url, NotifyTool notifyTool){
		
		// do file download
		
		
		notifyTool.notify();
	}
}
```

```java
package com.zizaitianyuan.javac2.lesson.example.javainterface.example2;

public interface NotifyTool {
	
	public void notifyUser();
	
}
```


```java
public class TestMain {

	public static void main(String[] args) {
		
		NotifyTool notifyTool = new QQNotifier();
		
		FileDownloader.downloadAndNotifyWhenFinished("www.yunpan.com/batman.rmvb", notifyTool);
	}

}
```

```java
public class EMailNotifier implements NotifyTool{

	@Override
	public void notifyUser() {
		sendMail("weiwei@163.com", "下载完成");
	}

	public void sendMail(String address, String msg){
		
	}
}
```


