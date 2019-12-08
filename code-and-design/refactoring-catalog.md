# Catalog of Refactorings

格式：
- 名称
- 简介
- 动机
- 做法
- 范例

## 重新组织你的代码 Composing Method

#### Extract Method

##### Motivation

- 过长的函数
- 需要注释才能看懂的代码

##### Mechanics

关键是处理局部变量：
- 没有局部变量。
- 有局部变量，但是只是使用，没有赋值，这个时候提取出来可以简单的当参数传入。
- 对局部变量赋值：
  - 如果只是在被提取代码中使用，提炼到被提取代码中。
  - 被提炼代码之外也使用了这个变量：
    - 在被提炼代码之后没有使用，那就无所谓。在提炼出来的函数直接修改就可以了。
    - 如果在被提炼代码之后也使用了。就需要让提炼出来的函数返回该变量改变后的值。
      - 如果要返回的变量有多个呢，有几种选择：
        - 挑选另外一段代码来提炼。让每个函数都只返回一个值。
        - 先使用 ***Replace Temp with Query*** 来减少临时变量
        - 使用 ***Replace Method with Method Object*** 来重构


#### Inline Method

##### Motivation

- 内部代码和函数名同样清晰可读
- 函数组织不合理，先inline成一个大型函数，再从中提炼出组织合理的小型函数。例如实行 ***Replace Method with Method Object*** 之前先这么做
- 使用了太多的间接层，几乎所有函数都是对另一个函数的简单委托（delegate）。去除无用的间接层。

##### Mechanics

- 确保函数不具备多态性。如果subclass继承了这个函数，就不要将次函数inline。


#### Inline Temp

```java

double basePrice = anOrder.basePrice();
return basePrice > 1000;

// 替换为
return anOrder.basePrice() > 1000;

```


#### Replace Temp with Query

将这个表达式提炼到一个独立函数，将对这个临时变量的所有引用替换成对新函数的调用。


```java

double basePrice = _quantity * _itemPrice;
if (basePrice > 1000) {
  return basePrice * 0.95;
} else {
  return basePrice * 0.98;
}

// 替换为
if (basePrice() > 1000) {
  return basePrice() * 0.95;
} else {
  return basePrice() * 0.98;
}

double basePrice() {
  return _quantity * _itemPrice;
}

```

#### Introduce Explaining Variable
