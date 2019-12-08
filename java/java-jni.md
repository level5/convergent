statically linked# JNI

```java

private native void aNativeMethod();

```

The `native` keyword transforms our method into a sort of abstract method. instead of being implemented by another Java class, it will be implemented in a separated native shared library.


#### components
* Java Code – our classes. They will include at least one native method.

  - `native` keyword: any method marked as native must be implemented in a native, shared lib.

  - `System.loadLibrary(String libname)`: a static method that loads a shared library from the file system into memory and makes its exported functions available for our Java code.

* Native Code – the actual logic of our native methods, usually coded in C or C++.

  - `JNIEXPORT`: marks the function into the shared lib as exportable so it will be included in the function table, and thus JNI can find it

  - `JNICALL`: combined with JNIEXPORT, it ensures that our methods are available for the JNI framework

  - `JNIEnv`: a structure containing methods that we can use our native code to access Java elements

  - `JavaVM`: a structure that lets us manipulate a running JVM (or even start a new one) adding threads to it, destroying it, etc…

* JNI header file – this header file for C/C++ (include/jni.h into the JDK directory) includes all definitions of JNI elements that we may use into our native programs.

* C/C++ Compiler – we can choose between GCC, Clang, Visual Studio, or any other we like as far as it's able to generate a native shared library for our platform.


#### code

java code:
```java
package com.baeldung.jni;

public class HelloWorldJNI {

    static {
        System.loadLibrary("native");
    }

    public static void main(String[] args) {
        new HelloWorldJNI().sayHello();
    }

    // Declare a native method sayHello() that receives no arguments and returns void
    private native void sayHello();
}

```


use the `-h` flag of the Java compiler:

```bash

javac -h . HelloWorldJNI.java

```

this will generate `com_baeldung_jni_HelloWorldJNI.h` file. the function name is automatically generated using the fully qualified package, class and method name:
```cpp

JNIEXPORT void JNICALL Java_com_baeldung_jni_HelloWorldJNI_sayHello
  (JNIEnv*, jobject);

```

```cpp

JNIEXPORT void JNICALL Java_com_baeldung_jni_HelloWorldJNI_sayHello
  (JNIEnv* env, jobject thisObject) {
    std::cout << "Hello from C++ !!" << std::endl;
}

```

compile:

```bash

# Ubuntu
g++ -c -fPIC -I${JAVA_HOME}/include -I${JAVA_HOME}/include/linux com_baeldung_jni_HelloWorldJNI.cpp -o com_baeldung_jni_HelloWorldJNI.o

# Windows
g++ -c -I%JAVA_HOME%\include -I%JAVA_HOME%\include\win32 com_baeldung_jni_HelloWorldJNI.cpp -o com_baeldung_jni_HelloWorldJNI.o

# MacOS
g++ -c -fPIC -I${JAVA_HOME}/include -I${JAVA_HOME}/include/darwin com_baeldung_jni_HelloWorldJNI.cpp -o com_baeldung_jni_HelloWorldJNI.o

```

link, name it is the argument passed into the method `System.loadLibrary`

```bash

# Ubuntu
g++ -shared -fPIC -o libnative.so com_baeldung_jni_HelloWorldJNI.o -lc

# Windows
g++ -shared -o native.dll com_baeldung_jni_HelloWorldJNI.o -Wl,--add-stdcall-alias

# MacOS
g++ -dynamiclib -o libnative.dylib com_baeldung_jni_HelloWorldJNI.o -lc

```

run:
```bash
java -cp . -Djava.library.path=/NATIVE_SHARED_LIB_FOLDER com.baeldung.jni.HelloWorldJNI
```
