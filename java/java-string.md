# Java String

首先要明确String是一个类。是JDK 提供的类，用来表示字符串，并且提供了一些方法来操作字符串。

## 构造String对象：
* 字面量声明构造
``` java
String myStr = "this is a String";
```

* 通过构造方法构造
```java
String myStr = new String("this is a String")
```

## String类提供的方法
* length() 返回字符串长度；

``` java
String str1 = "this is a String"
int length = str1.length()        // ?
```

* equals(String anotherString) 用来比较两个String的值是否相等, equalsIgnoreCase(String anotherString) 比较值是否相等忽略大小写；

``` java
String str1 = "This is a String"
String str2 = "This is a String"
String str3 = "this is a string"

str1.equals(str2);      // true
str2.equals(str1);      // true
str1.equals(str3);      // false
"another string".equals(str1);        // false
str1.equalsIgnoreCase(str3)      // true
```

* contains(CharSequence subString) 判断一个字符串是否包含另一个字符串 CharSequence是个接口。 可以先理解为String， String， StringBuffer，StringBuilder都实现可这个接口\

``` java
String str1 = "This is a String"
String subStr1 = "is a String"
String subStr2 = "This"
String subStr3 = "another"

str1.contains(subStr1)    //true
str1.contains(subStr2)    //true
str1.contains(subStr3)    //false
```

* subtring(int beginIndex, int endIndex) or substring(int beginIndex) beginIndex和endIndex范围是0~length(), endIndex>=beginIndex. 结果会包含beginIdex对应下标的字符， 但不包含endIndex下标对应的字符（包前不包后）

``` java
String str = "hello world";
String testResult1 = str.substring(0, 5);  // hello
String testResult2 = str.substring(6, 11); // world
String testResult3 = str.substring(4, 11); // o world
String testResult4 = str.substring(0, 11); // hello world
String testResult5 = str.substring(6)  // world
```

* indexOf(String subString)  判断字串第一次出现的下标；

``` java
String str = "hello world";
int index1 = str.indexOf("he");  //0
int index2 = str.indexOf("l");  // 2
int index3 = str.indexOf("l", 3)  //3
int index4 = str.indexOf("abc") // 不存在返回-1
```

* trim() 去掉字符串前面 和 后面的空格, 一般用来与处理用户输入字符串

``` java
String str = "  abc def   ";
String result = str.trim(); // "abc def"
```

* split(String regex) 根据给定的正则表达式切分字符串， 返回一个字符串数组

``` java
String str1 = "this is a string";
Spring[] wordsInStr = str1.split(" ");  //根据空格来切分字符串
Spring[] charsInStr = str1.split("");  //根据空字符串来切分

String str2 = "this is a string, just for learning, and test";
Spring[] sentencesInStr2 = str2.split(",");  //根据逗号来切分

String str3 = "this is a string,just for learning,and test";
Spring[] charsInStr3 = str3.split(",| ")
```

* 其他方法
  - charAt(int index) 返回字符串指定下表的 字符
  - concat(String str) 在原字符串的结尾追加新的字符串， 相当一 string1+ string2
  - startsWith(String prefix) 判断字符串是否已给定的字符串开头
  - endsWith(String prefix) 判断字符串是否已给定的字符串结尾
  - compareTo(String anotherStr) 比较两个字符串大小， 从第一个字符开始比较 asic码的大小并返回第一个不一样字符的差值
  
 
 * 字符串比较
 - equals() 是用来比较字符串值是否相同
 - == 是比较两个对象是否相等
 
 ``` java
String str1 = "test string";		
String str2 = new String("test string");
String str3 = "test string";	
String str4 = "test "+ "string";

System.out.println(str1 == str2);
System.out.println(str1 == str3);
System.out.println(str1 == str4);
```
