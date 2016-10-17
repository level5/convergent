## Session Layer(Layer 5)

The name session layer is telling: It is designed to allow devices to establish and manage sessions. In general terms, a session is a persistent logical linking of two software application processes that allows them to exchange data over time. they are roughly analogous to a telephone call made between two people.



## TCP/IP Address Resolution Protocol (ARP)

* 静态mapping
* 动态获取

  举的例子就是一个豪车司机去机场接人，他只知道对方的名字，而不知道对方的相貌。这个时候，他举一个有对方名字的牌子，机场的其他人都会忽略这个牌子，之后牌子上提到的人才会到司机那去。


Since you don't know the layer 2 identity of the recipient, you must use a broadcast message (or at least a multicast), which means that many devices on the local network must take resources to examine the data frame and check which IP address is being resolved.

 After a device's network layer address is resolved to a data link layer address, the link between the two is kept in the memory of the device for a period of time.

 这样的话，就需要一个过期时间。因为网络配置可能改变。

improve efficiency through cross-resolution; when Device A resolves the address of Device B, Device B also adds the entry for Device A to its cache.
