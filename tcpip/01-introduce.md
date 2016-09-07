# 概述

## 总结

### 基本概念

 A ***network*** is a set of hardware devices connected together, either physically or logically. This allows them to exchange information.

 A networking ***protocol*** defines a set of rules, algorithms, messages, and other mechanisms that enables software and hardware in networked devices to communicate effectively. A protocol usually describes a means for communication between corresponding entities at the same OSI Reference Model layer in two or more devices.

One way that networking technologies are categorized is based on the path used to carry data between devices. In ***circuit switching***, a circuit is first established and then used to carry all data between devices. In ***packet switching***, no fixed path is created between devices that communicate; it is broken into packets, each of which may take a separate path from sender to recipient.

A ***connection-oriented protocol*** is one in which a logical connection is first established between devices prior to data being sent. In a ***connectionless protocol***, data is just sent without a connection being created.

Circuit-switched networking technologies are inherently(天生的) connection-oriented, but ***not all connection-oriented technologies use circuit switching***. Logical connection-oriented protocols can be implemented on top of packet-switching networks to provide higher-layer services to applications that require connections.

TCP/IP has two main protocols that operate at the transport layer of the OSI Reference Model. One is ***TCP***, which is connection-oriented; the other, the User Datagram Protocol (***UDP***), is connectionless.

connection-oriented and connectionless protocols can be combined at different levels of an internetwork.  Just as a connection-oriented protocol can be implemented over an inherently connectionless protocol, the reverse is also true: a connectionless protocol can be implemented over a connection-oriented protocol at a lower level.

- ***Packet*** This term is considered by many to correctly refer to a message sent by protocols operating at the network layer of the OSI Reference Model.
- ***Datagram*** This term is basically synonymous with packet and is also used to refer to network layer technologies. It is also often used to refer to a message that is sent at a higher level of the OSI Reference Model
- ***Frame*** This term is most commonly associated with messages that travel at low levels of the OSI Reference Model. In particular, it is most commonly seen used in reference to data link layer messages.
- ***Cell*** Frames and packets, in general, can be of variable length, depending on their contents; in contrast, a cell is most often a message that is fixed in size.
- ***Protocol Data Unit (PDU) and Service Data Unit (SDU)*** These are the formal terms used in the OSI Reference Model to describe protocol messages. A ***PDU*** at layer ***N*** is a message sent between protocols at layer ***N***. It consists of layer ***N*** header information and an encapsulated message from layer ***N+1***, which is called both the layer ***N SDU*** and the layer ***N+1 PDU***.

The general format of a networking message consists of a ***header***, followed by the data or ***payload*** of the message, followed optionally by a ***footer***. Header and footer information is functionally the same except for its position in the message; footer fields are only sometimes used, especially in cases where the data in the field is calculated based on the values of the data being transmitted.

Three basic methods are used to address and transmit data between networked devices. A ***unicast*** transmission goes from one device to exactly one other; this is the most common method used for most message transactions. A ***broadcast*** transmission is sent from one device to all connected devices on a network. A ***multicast*** transmission is addressed and sent to a select group of devices.

Networks are usually configured to share resources using one of two basic structural models. In a ***peer-to-peer*** network, each device is an equal, and none are assigned particular jobs. In a ***client-server*** network, however, devices are assigned particular roles—a small number of powerful computers are set up as servers and respond to requests from the other devices, which are clients.

<<<<<<< HEAD
Several terms are often used to describe the relative sizes of networks and parts of networks. The most basic term is ***network*** itself, which can refer to most anything, but often means a set of devices connected using an OSI layer 2 technology. A ***subnetwork*** is a part of a network (or internetwork), as is a segment, though the latter often has a more specific meaning in certain technologies. An ***internetwork*** refers either generically to a very large network, or specifically, to a set of layer 2 networks connected using routers at layer 3.

The generic noun ***internet*** is a short form for the word internetwork, while the proper noun Internet refers to the global internetwork of TCP/IP networks that we all know and use. The term ***intranet*** refers to an internal network that uses TCP/IP technologies as the Internet does. An ***extranet*** is like an intranet that is extended to individuals or organizations outside the company.

### 性能概念

While ***performance*** is one of the most important characteristics of any network, there are others that are equally important. In many cases, you must weigh the ***cost, quality, reliability, expandability, maintainability***, and other attributes of a network against overall performance. The faster you want your network to go, the more difficult it is to ensure that these other attributes are kept at sufficiently high levels.

The three terms used most often to refer to the overall performance of a network are ***speed***, ***bandwidth***, and ***throughput***. These are related and often used interchangeably, but are not identical. The term ***speed*** is the most generic and often refers to the rated or nominal speed of a networking technology. ***Bandwidth*** can mean either the width of a frequency band used by a technology or more generally, data capacity, where it's used as more of a theoretical measure. ***Throughput*** is a specific measure of how much data flows over a channel in a given period of time. It is usually a practical measurement.

***Latency*** is a very important, often overlooked term, which refers to the timing of data transfers on a communications channel or network.
* One important aspect of latency is how long it takes from the time a request for data is made until it starts to arrive.
* Another aspect is how much control a device has over the timing of the data that is sent, and whether the network can be arranged to allow for the consistent delivery of data over a period of time.

Where bandwidth and throughput indicate how fast data moves across a network, latency describes the nature of how it is conveyed. It is most often used to describe the delay between the time that data is requested and the time when it arrives. A networking technology with very high throughput and bad (high) latency can be worse for some applications than one with relatively low throughput but good (low) latency.

In most cases in discussions of networking performance, the lowercase letter b refers to bits and the uppercase B to bytes. However, these conventions are not always universally followed, so context must be used to interpret a particular measurement.

The unit most often used to express networking throughput is bits per second or bps. This term is often expressed in thousands, millions, or billions as Kbps, Mbps, or Gbps. ***It almost always uses the decimal, not binary***, versions of the kilo, mega, or giga multipliers.

The baud and bps units are often treated equivalently, but are not the same. Baud measures not the throughput of a network but its signaling rate, meaning the number of times that the signal changes value in each second. Since modern encoding and modulation techniques often encode either greater or less than one bit value into each such transition, the throughput and baud rate of network technologies are usually different.

The theoretical rated speed of a network is never achieved in practice for a number of reasons. ***Overhead issues*** mean that not all of the possible capacity of a network can be used for data. ***External factors*** such as hardware bandwidth limitations restrict data input and output. ***Configuration problems*** can also greatly reduce real-world performance. Finally, it is important to remember that ***many technologies are asymmetric***, offering higher speed in one direction than the other, and often, the larger number is the one that is advertised.

There are three basic operating modes that describe how data is sent between connected devices on a network. In a simplex operation, data can flow in only one direction between two devices. Half-duplex networks allow any device to transmit, but only one may do so at a time. Full-duplex operation means two attached devices can each transmit and receive simultaneously. The latter offers the greatest potential performance, because forcing one device to wait for another before sending data does not decrease throughput.

* In ***simplex*** operation, a network cable or communications channel can send information in only one direction; it's a one-way street.
* Technologies that employ ***half-duplex*** operation are capable of sending information in both directions between two nodes, but only one direction or the other can be utilized at a time.
* In ***full-duplex*** operation, a connection between two devices is capable of sending data in both directions simultaneously. Full-duplex channels can be constructed either as a pair of simplex links (as described earlier) or by using one channel that's designed to permit bidirectional simultaneous transmissions.

### 数字

A bit is also sometimes called a ***flag***

The term ***character*** is also used to express a set of 8 bits

* if you OR a bit with a value known to be 1, the result will always be 1, no matter what the other value is. In contrast, if you OR with a 0, the original value, 1 or 0, is not changed.
* If you AND a bit with 0, it will clear it to 0, regardless of what the bit was before, while ANDing with 1 will leave the bit unchanged
* if you XOR with a 1, the input value is flipped, while XORing with a 0 causes the input to be unchanged

The properties of the OR and AND boolean functions make them useful when certain bits of a data item need to be set (changed to 1) or cleared (changed to 0). This process is called bit ***masking***.

## 分层

dividing their functions into layers, each of which contains hardware and software elements. Each layer is responsible for performing a particular type of task and interacts with the layers above and below it. Layers are conceptually arranged into a vertical stack. Lower layers are charged with more concrete tasks such as hardware signaling and low-level communication; they provide services to the higher layers. The higher layers, in turn, use these services to implement more abstract functions such as implementing user applications.

分层，每一层包含硬件和软件。每一层负责执行特定类型的任务，和他的上层或者下层交互。垂直分层，底层负责具体的任务，例如硬件信号或者底层通讯。他们给更高层提供服务。高层使用这些服务来实现更抽象的功能，例如实现用户使用的软件。

类似于流水线。

### OSI Open System Interconnection Reference Model
7层

### Protocol

#### Circuit Switching or Packet Switching

##### circuit switching
In the ***circuit-switching*** networking method, a connection called a circuit, which is used for the whole communication, is set up between two devices.

具体的例子就是电话系统，当电话接通的时候，建立了一个回路连接，你会一直使用这个回路，不管中间有多少个设备。直到通话结束。下一次通话的时候，会创建一个新的回路，可能会使用不同的硬件。

##### Packet switching

In the ***packet-switching*** network type, no specific path is used for data transfer. Instead, the data is chopped up into small pieces called packets and sent over the network. You can route, combine, or fragment the packets as required to get them to their eventual destination.

优势：
* 线路共享

劣势：
* 因为不同的数据使用不同的线路，可能导致部分数据丢失，或者数据不是按顺序到达目的地

#### Connection-Oriented and Connectionless Protocols

##### Connection-Oriented Protocols

需要在开始传输数据之前在两个设备之间建立逻辑connection。

These protocols require you to establish a logical connection between two devices before transferring data. This is generally accomplished by following a specific set of rules that specify how a connection should be initiated, negotiated, managed, and eventually terminated. Usually, one device begins by sending a request to open a connection, and the other responds. The devices pass control information to determine if and how the connection should be set up. If this is successful, data is sent between the devices. When they are finished, the connection is broken.

##### Connectionless Protocols

不需要再开始传输数据之前建立连接。需要传输数据时，传输就可以了。

These protocols do not establish a connection between devices. As soon as a device has data to send to another, it just sends it.

#### 消息格式: Headers, Payload, Footers

* ***Headers*** Information that is placed before the actual data. The header normally contains a small number of control-information bytes, which are used to communicate important facts about the data that the message contains and how it is to be interpreted and used. It serves as the communication and control link between protocol elements on different devices.
* ***Data*** The actual data to be transmitted, often called the payload of the message (metaphorically(隐喻性地) borrowing a term from the space industry!). Most messages contain some data of one form or another, but some messages actually contain none. They are used for only control and communication purposes. For example, these may be used to set up or terminate a logical connection before data is sent.
* ***Footer*** Information that is placed after the data. There is no real difference between the header and the footer, as both generally contain control fields. The term trailer is also sometimes used.


#### Unicast, Broadcast, Multicast

* ***Unicast*** Messages These are messages that are sent from one device to another device; they are not intended for others.
* ***Broadcast*** Messages As the name suggests, these messages are sent to every device on a network. You use them when you need to communicate a piece of information to everyone on the network, or when the sending station needs to send it to just one recipient, but doesn't know its address.
* ***Multicast*** Messages These are a compromise between the previous two types. Multicast messages are sent to a group of stations that meet a particular set of criteria. These stations are usually related to each other in some way.

=================================================
* ***Unicast Addressing*** Unicast delivery requires that a message should be addressed to a specific recipient.
* ***Broadcast Addressing*** Broadcasts are normally implemented via a special address that is reserved for that function. Whenever devices see a message sent to that address, they all interpret it as "This message goes to everyone."
* ***Multicast Addressing*** Multicasts are the most complex type of message because they require a means of identifying a set of specific devices that will receive a message. It is often necessary to create several such groups, which may or may not partially overlap in their membership. Some mechanism is needed to manage which devices are in which groups.

## 性能

###度量：speed， bandwidth, throughput, latency


## IP地址

* A类  `[0][7位网络号][24位主机号]`

  范围：`0.0.0.0 ~ 127.255.255.255`

  就是7位网络号都是0，到7位网络号都是1的范围,加上第一位的0
  。`0x00 ~ 0x7f`

* B类  `[10][14位网络号][16位主机号]`


范围：`128.0.0.0 ~ 191.255.255.255`
  同上，网络号加上10的范围`0x8000 ~ 0xbfff`

* C类  `[110][21位网络号][8位主机号]`

  范围：`192.0.0.0 ~ 223.255.255.255`

  同上，`0xc00000 ~ 0xdfffff`

* D类  `[1110][28位多播组号]`

  范围：`224.0.0.0 ~ 239.255.255.255`

  前四位固定，后四位 `0x0 ~ 0xf`

* E类  `[11110][27位待用]`

  范围：`240.0.0.0 ~ 247.255.255.255`

## DNS Domain Name System
