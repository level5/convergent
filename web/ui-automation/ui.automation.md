# UI Automation

#### 准备采用 webdriverio，因为：
- 基于selenium的框架
- 提供了runner来运行case
- 从4.0起，webdriver都是同步操作，看上去是应该方便写出case。 因为之前尝试直接使用selenium来写，同步异步混合到一起，还要自己查看API，确实不太方便。

#### 使用page Objects
- 所有测试的页面都提供Page Object
- Page Object暴露页面提供的服务
- Page Object要隐藏dom的细节
- Page Object不应该做assert
- 因为是单页面应用，方法返回新的page object之前，需要等待页面切换完成。

因为是单页面应用， 关于一个操作发送出去，可能有下面三种或更多异步操作
* ajax返回
* 动画完成
* 组件出现

需要等他们执行完了，才能往下做assert操作。需要考虑等多久，这里肯定不能使用sleep， webdriver提供了一些方式。

#### case不应该相互依赖，可以并行执行
- 目前的integration test的case会前后依赖。这两天读了一下关于测试的文章，大家都不推荐使用这种Chain Link Pattern. 我自己在写group的case也感受到了，最开始还好。等到case变多，人家也添加了case之后，
  * 自己已经不知道一个case跑完之后，会保留一些什么数据在系统中。
  * 自己不敢往中间添加case，怕破坏中间状态。只敢往最后添加case

- 这样在运行case之前，可以准备一些基础的数据给所有的case使用。这里可以使用API创建数据，或者直接导入数据库。
  * 提前创建user
  * 提前添加一两个appliance

- assert使用数据通过OVGD的API获取，而不是去oneview获取，这样可以简化测试，因为是测试UI。这点可以大家看看有没有意见。

- 如果case不相互依赖的话，还有些问题需要考虑一下：
  - case创建的数据是保留在系统中不用管呢，还是需要每个case清楚自己的数据？
  - 如何测试第一次和第二次调用的时候不同的功能。比如说第一次登陆admin需要修改密码。
  - 部分case可能会受到并行运行的case的影响，比如list所有的server-hardware，这个时候，server-hard的数量可能会变化。
  - case之间独立，就等于整个流程都需要做，如果这个case是测试一个很长的流程的最后一步。前面的步骤失败的话，是不是会导致很多case失败

#### case 风格
* 现在integration风格的case
* cucumber风格的BDD

目前尝试了第一种风格，后面准备试试第二种

#### 坑
* 各种版本的chrome，firefox，selenium，webdriver经常不能共用。现在我电脑因为chrome和Firefox版本太高，写了case还没有跑起来....
