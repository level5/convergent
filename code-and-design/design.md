# 设计

理想的设计特征：
- 最小的复杂度

  简单的说，就是易于理解的。

- 易于维护

  要考虑到其他维护的程序员可能会对你提问，需要有自明性(self-explanatory)

- 松散耦合

  各部件之间关联最小

- 可扩展性

  无需破坏底层结构。

- 可重用性
- 高扇入

  大量的类使用某个给定的类。

- 低扇出

  一个类少量或适中的使用其他类。

- 可移植性
- 精简性
- 层次性
- 标准技术


## 启发式方法

#### 找出现实世界中的对象 Find Real-World Objects

#### 形成一致的抽象 Form Consistent Abstractions

#### 封装实现细节 Encapsulate Implementation Details

#### 当继承能简化设计时就继承 Inherit When Inheritance Simplifies the Design

#### 隐藏密码 Hide Secrets(Information Hiding)

隐藏信息的障碍：
- 信息过度分散
- 循环依赖
- 把类内数据误认为是全局数据

#### 找出容易改变的区域 Identify Areas Likely to Change

- 业务规则
- 对硬件的依赖性
- 输入输出
- 非标准的语言特殊
- 困难的设计区域和构建区域
- 状态变量
  * 使用枚举类型
  * 使用access routine取代对状态变量的直接访问

#### 预料不同程度的变化 Anticipating Different Degreees of Change

#### 保持松散耦合 Keep Coupling Loose

#### 查阅常用的设计模式 Look for Common Design Patterns

#### 其他

- Aim for Strong Cohesion 高内聚性

  高内聚性：指的是类内部的子程序或者子程序内的所有代码在支持一个中心目标上的紧密程度-这个类的目标是否集中。
- Build Hierarchies 构造分层结构
- Formalize Class Contracts 严格描述类契约
- Assign Responsibilities 分配职责
- Design for Test 为测试而设计
- Avoid Failure 避免失误
- ...
