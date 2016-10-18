# Open System Interconnection Reference Model

## 网络模型的优势

Networking models such as the OSI Reference Model provide a framework for breaking down complex internetworks into components that can more easily be understood and utilized. The model defines networking functions not as a large, complicated whole, but as a set of layered, modular components, each of which is responsible for a particular function. The result is better comprehension of network operations, improved performance and functionality, easier design and development, and the ability to combine different components in a way that's best suited to the needs of the network.

keep in mind:
* It can be very hard to figure out where some technologies fall within the model.

  Many protocols were designed without the OSI model in mind, and they may not fall neatly into one layer or another. Some overlap two or more layers; other protocol suites may have two protocols that share a layer.
* The boundaries between the upper layers (session, presentation, and application) get particularly fuzzy.
* The OSI Reference Model was designed primarily with LANs in mind. WAN technologies often fit very poorly into the model, with a lot of overlapping and partial layer coverage.
* The people who design products don't generally worry about ensuring that their latest inventions(发明) implement only specific layers of the model.

## Key OSI Reference Model Concepts

The most important OSI Reference Model concept is that of networking ***layers***. The OSI Reference Model is composed of seven conceptual layers, each of which is assigned a number from 1 to 7.
* The first and lowest layer is the ***physical layer***, which is where low-level signaling and hardware are implemented.
* The seventh and highest layer is the ***application layer***, which deals with high-level applications employed by users: both end users and the operating system software.

you move up the layer stack and, in so doing, increase your level of ***abstraction***. This means that the higher a layer is in the stack, the more it deals with logical concepts and software, and the less it deals with the hardware of a network and the nuts and bolts of making it work.

* ***Lower Layers (Layers 1, 2, 3, and 4)***， the lower layers of the model—***physical, data link, network,*** and ***transport***—are primarily concerned with the formatting, encoding, and transmission of data over the network. They don't care that much about what the data is or what it is being used for; instead, they just want to know about moving it around.
* ***Upper Layers (Layers 5, 6, and 7)*** The higher layers of the model—***session, presentation,*** and ***application***—are concerned primarily with interacting with the user and implementing the applications that run over the network. The protocols that run at higher layers are less concerned with the low-level details of how data gets sent from one place to another

An ***N-entity*** is a term that refers to a specific operation or job done at layer N. A ***function*** is basically the same thing. ***Facilities*** and ***services*** are what a layer provides to the layers above it.

In OSI Reference Model parlance, the mechanism for communication between adjacent layers in the model is called an ***interface***.

the term ***protocol*** has a formal meaning in the context of the model. It refers specifically to a set of communication rules, instructions(指令), and procedures(程序) that describe communication between specific software or hardware elements running at the ***same layer*** on different machines within a network.

In the OSI Reference Model, a ***protocol*** refers specifically to a set of rules or procedures that define communication between software or hardware elements running at the same layer on network devices. Physical layer protocols are responsible for the actual transmission and reception of data at layer 1. Protocols at higher layers pass data down through the layers below them to layer 1 for transmission, then across the network and back up to the corresponding entity at the same layer on the receiving device. The result is that software processes running at say, layer 4 on each of two devices can communicate logically as if they were directly connected at layer 4, even though they are not.

The message used to communicate information for a particular protocol is called its protocol data unit (PDU) in OSI model terminology. That PDU is passed down to the next lower layer for transmission; since that layer is providing the service of handling that PDU, it is called the lower layer's service data unit (SDU). The SDU is encapsulated into that layer's own PDU and, in turn, sent to the next lower layer in the stack, proceeding until the physical layer is reached. The process is reversed on the recipient device. In summary, a layer N PDU is a layer N-1 SDU, which is encapsulated into a layer N-1 PDU.

***route***
In the context of the OSI Reference Model, routing is an activity that generally takes place at the ***network layer, layer 3***. When a message is routed, here's what happens:
1. A high-level application on a machine decides to send a datagram to a distant computer. The datagram is packaged, and then passed down vertically through the protocol stack on the originating machine. Each layer encapsulates the data, as described in the previous section. The datagram is addressed to the final destination device. ***When the message gets to the lower layers, however, it is not packaged for local delivery directly to its ultimate destination, but rather passed to an intermediate device. This is the device that is responsible for routing to that destination network. The message is passed down to the data link and physical layers for transmission to that intermediate device***.
2. The intermediate device (often called a router) receives the message at the physical layer. It is passed up to the data link layer, where it is processed, checked for errors and so on, and the data link layer headers are removed. The resulting packet is passed up to the network layer. There, the intermediate device determines if the destination machine is on its local network, or if it needs to be forwarded to another intermediate device. It then repackages the message and passes it back down to the data link layer to be sent on the next leg of its journey.
3. After several potential intermediate devices handle the message, it eventually reaches its destination. Here, it travels back up the protocol stack until it reaches the same layer as the one from the application that generated the message on the originating machine.

The key to this description is that in the intermediate devices, ***the message travels back up the OSI layers only to the network layer***. It is then repackaged and sent back along its way.

## 7 Layer

### physical Layer

### Data Link Layer

### Network Layer

The third-lowest layer of the OSI Reference Model is the ***network layer***. If the data link layer defines the boundaries of what is considered a network, the network layer defines how ***internetworks*** (interconnected networks) function.

The network layer is the lowest one in the OSI model that is concerned with actually getting data from one computer to another.

function:

* Logical Addressing
* Routing
* Datagram Encapsulation
* ***Fragmentation and Reassembly*** The network layer must send messages down to the data link layer for transmission. Some data link layer technologies limit the length of any message that can be sent. If the packet that the network layer wants to send is too large, the network layer must split the packet up (fragment it), send each piece to the data link layer, and then have the pieces reassembled once they arrive at the network layer on the destination machine.
* Error Handling and Diagnostics

The network interconnection devices that operate at the network layer are usually called ***routers***.

### Transport Layer

The physical layer handles the bits, the data link layer deals with local networks, and the network layer handles routing between networks. The transport layer, in contrast, is sufficiently conceptual that it no longer concerns itself with these nuts-and-bolts matters. It relies on the lower layers to move data between devices.

The transport layer acts as a liaison of sorts between the abstract world of applications at the higher layers and the concrete functions of layers 1 to 3. 
