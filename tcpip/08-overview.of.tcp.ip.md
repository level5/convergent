# Overview

The ***Internet Protocol (IP)*** is the primary OSI model network layer (layer 3) protocol that provides addressing, datagram routing, and other functions in an internetwork. The ***Transmission Control Protocol (TCP)*** is the primary transport layer (layer 4) protocol and is responsible for connection establishment and management, and reliable data transport between software processes on devices.

> Internet standards are defined in documents called ***Requests for Comments (RFCs)***

The TCP/IP protocol suite is oriented around the notion of client/server network communication. Rather than all devices and protocol software elements being designed as peers, they are constructed as matched sets. Clients normally initiate communications by sending requests, and servers respond to such requests, providing the client with the desired data or an informative reply.

## TCP/IP model

### Network Interface layer

对应的是Data Link Layer.

The ***network interface layer*** is where the actual TCP/IP protocols running at higher layers interface to the local network. It is equivalent to the ***data link layer (layer 2)*** in the OSI Reference Model.

On many TCP/IP networks, there is no TCP/IP protocol running at all on this layer, because it is simply not needed. For example, if you run TCP/IP over Ethernet, then Ethernet handles layer 2 (and layer 1) functions.

TCP/IP standards do define protocols for TCP/IP networks that do not have their own layer 2 implementation. These protocols, the Serial Line Internet Protocol (SLIP) and the Point-to-Point Protocol (PPP), fill the gap between the network layer and the physical layer. They are commonly used to facilitate TCP/IP over direct serial line connections (such as dial-up telephone networking) and other technologies that operate directly at the physical layer.

##### protocol
* Serial Line Internet Protocol, SLIP

  Provides basic TCP/IP functionality by creating a layer 2 connection between two devices over a serial line.
* Point-to-Point Protocol, PPP

  Provides layer 2 connectivity like SLIP, but is much more sophisticated and capable. PPP is itself a suite of protocols (subprotocols, if you will) that allow for functions such as authentication, data encapsulation, encryption, and aggregation, thereby facilitating TCP/IP operation over WAN links

### Internet layer
The ***Internet layer*** corresponds to the ***network layer*** in the OSI Reference Model

##### protocol
* Address Resolution Protocol, ARP

  Used to map layer 3 IP addresses to layer 2 physical network addresses.
* Reverse Address Resolution Protocol, RARP

  Determines the layer 3 address of a machine from its layer 2 address. Now mostly superseded by BOOTP and DHCP.

##### protocol
* Internet Protocol, Internet Protocol Version 6, IP, IPv6

  Provides encapsulation and connectionless delivery of transport layer messages over a TCP/IP network. Also responsible for addressing and routing functions.
* IP Network Address Translation, IP NAT

  Allows addresses on a private network to be automatically translated to different addresses on a public network, thereby providing address sharing and security benefits.
* ...
* Internet Control Message Protocol, ICMP

  A support protocol for IP and IPv6 that provides error reporting and information request-and-reply capabilities to hosts.
### Host-to-Host Transport Layer

The TCP/IP transport layer corresponds to the layer of the same name in the OSI model (layer 4) but includes certain elements that are arguably part of the OSI session layer.

For example, TCP establishes a connection that can persist for a long period of time, which some people say makes a TCP connection more like a session.

##### protocol
* Transmission Control Protocol, TCP
* User Datagram Protocol, UDP

### Application Layer

##### protocol
