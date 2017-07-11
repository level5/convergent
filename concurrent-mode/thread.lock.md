# thread

```java

class HelloWorld {

  public static void main(String[] args) {

    Thread myThread = new Thread(new Runnable() {

      public void run() {
        System.out.println('hello from new thread');
      }
    });

    myThread.start();
    Thread.yield();

    System.out.println('hello from main thread');

    myThread.join();

  }
}

```


# 锁

### 竞争

### 读和写

### 死锁

```java
class Philosopher extends Thread {

  private Chopstick left, right;
  private Random random;

  public Philosopher(Chopstick left, Chopstick right) {
    this.left = left;
    this.right = right;
    random = new Random();
  }

  public void run() {
    try {
      while(true) {
        Thread.sleep(random.nextInt(1000));
        synchronized(left) {
          synchronized(right) {
            Thread.sleep(random.nextInt(1000));
          }
        }
      }
    } catch(InterruptedException e) {}
  }

}
```

### 解决多把锁死锁

将锁排序,都按相同的顺序来获取锁

### 对外部方法的调用,可能引入未知的锁

### 复制来解决锁的问题


# 外置锁

* 内置锁进入阻塞之后,无法中断该线程
* 无法设置超时

```java

Lock lock = new ReentrantLock();
lock.lock();
try {

} finally {
  lock.unclok();
}

```

### 可以中断

```java

final ReentrantLock l1 = new ReentrantLock();

try {
  l1.lockInterruptibly();
} catch(InterruptedException e) {
  System.out.println('t1 interrupted');
}

```


### 超时

```java

final ReentrantLock l1 = new ReentrantLock();

try {
  l1.tryLock(1000, TimeUnit.MILLSECONDS);
} catch(InterruptedException e) {}

```

### 交替锁

使用多把锁

### 原子变量

volatile只能保证读或者写原子
