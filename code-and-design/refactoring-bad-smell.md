# Bad Smell

#### 重复代码 Duplicated Code

- 同一个class内的两个函数含有相同的表达式。

- 兄弟subclass内含有相同的表达式。

- 两个毫不相干的class有重复代码。

#### 过长的方法

每当感觉需要以注释来说明点什么的时候，我们就把需要说明的东西写进一个独立函数中，并以其用途（而非实现手法）命名。

确定该提炼哪一段代码？

- 寻找注释。他们通常是指出“代码用途和实现手法间的语义距离”的信号。

- 条件式和循环常常也是提炼的信号。

#### 过大的类

#### 过长的参数列表

#### 发散式的变化

如果某个class经常因为不同的原因在不同的方向上发生变化，Divergent Change就出现了。

#### 散弹式修改 Shotgun Surgery

与Divergent Change相反，如果每遇到某种变化，你都必须在许多不同的classes内做出许多小修改以响应。

#### 依恋情结 Feature Envy

对象技术的全部要点在于：将数据和加诸其上的操作行为包装在一起。

函数对某个class的兴趣高过对自己所处的host class的兴趣，这种孺慕之情最通常的焦点便是数据。

#### 数据泥团 Data Clumps

#### 基本型别偏执 Primitive Obsession

#### Switch Statement

#### 平行继承体系 Parallel Inheritance Hierarchies

#### Lazy Class

#### 夸夸其谈的未来性 Speculative Generality

#### Temporary Field

某个实例变量仅仅为某种特定情形而设。

#### 过度耦合的消息链 Message Chains

#### 中间转手人 Middle Man

#### Inappropriate Intimacy

两个class过于亲密，花费太多时间去探究彼此的private成分

#### 异曲同工的类 Alternative Classes with Different Interface

两个函数做同一件事，却有着不同的签名。

#### 不完美的程序库类 Incomplete Liberary Class

#### 纯稚的数据类 Data Class

#### 被拒绝的遗赠 Refused Bequest

subclass应该继承superclass的函数和数据，但如果他们不想或不需要继承，又改怎么办？


#### 过多的注释 Comments

***

- 在另一个对象的属性基础上运行switch语句。如果不得不使用，也应该在对象自己的数据上使用，而不是别人的数据上使用。

-
