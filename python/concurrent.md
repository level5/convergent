# concurrent

## process

## thread

线程安全的操作:
* reading or replacing a single instance attribute
* reading or replacing a single global variable
* fetching an item from a list
* modifying a list in place (e.g. adding an item using append)
* fetching an item from a dictionary
* modifying a dictionary in place (e.g. adding an item, or calling the clear method)


这个时候会存在竞争关系:
```python
import threading

count = 0

def inc():
    global count
    count += 1

def work():
    for i in range(0, 100000):
        inc()

# 启动并执行线程
threads = [threading.Thread(target=work) for i in range(0, 5)]
for t in threads:
    t.start()
for t in threads:
    t.join()        # 当前线程block等待t结束
print("count is %s" % count)

```

### lock
使用锁:

```python
lock = threading.Lock()

def inc():
    global count
    lock.acquire()
    count += 1
    lock.release()
```

```python
def inc():
    global count
    lock.acquire();
    try:
      count += 1
    finally:
      lock.release()

```

也可以使用`with`

```python
def inc():
    global count
    with lock:
        count += 1
```

不block
```python

if not lock.acquire(False):
  pass
else
  try:
    count += 1
  finally:
    lock.release()

```

WTF: if the lock is held, any thread that attempts to acquire the lock will block, even if the same thread is already holding the lock.

线程本身重复获取锁都会被block.

### RLock

这个时候就要使用RLock了.

### Events

### Conditions



### Thread local data


## coroutine
