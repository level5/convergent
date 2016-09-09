# TCP IP

## Network interfact Layer

### SLIP

SLIP does the following:
* Breaks an IP datagram into bytes
* Sends the END character (value 192) after the last byte of the datagram; in better implementations, it sends the END character before the first byte as well
* Replaces any byte to be sent in the datagram that is 192 with 219 220
* Replaces any byte to be sent that is 219 with 219 221

problem:
* Standardized Datagram Size Specification, SLIP's maximum supported datagram size is not standardized and depends on each implementation.
* Error Detection and Correction Mechanism, SLIP doesn't provide any way of detecting or correcting errors in transmissions.
* Control Messaging, SLIP offers no way for the two devices to communicate control information that may be required to manage the link.
* Type Identification Since SLIP includes no headers of its own, it is not possible to identify that SLIP is being used.
* Address Discovery Method
* Support for Compression
* Security Features

### PPP

Although ***PPP*** is called a protocol and is usually considered part of TCP/IP, it is really more a protocol suite, since its operation is based on procedures defined in many individual protocols. Alternatively, its components can be viewed as subprotocols within PPP, even though they are not usually called that in the standards.

Rather than try to develop ***PPP*** from scratch, the IETF decided to base it on the ISO ***High-Level Data Link Control (HDLC)*** protocol, which was initially developed by IBM. ***HDLC*** is a derivative of the ***Synchronous Data Link Control (SDLC)*** Protocol. ***PPP***'s developers adapted its framing structure and some of its general operation from ***HDLC***.

PPP is a connection-oriented protocol that enables layer 2 links over a variety of different physical layer connections.

It is supported on both synchronous and asynchronous lines and can operate in half-duplex or full-duplex mode.

 It was designed to carry IP traffic, but is general enough to allow any type of network layer datagram to be sent over a PPP connection.

 PPP is designed for point-to-point connections between two devices, and ***it assumes that frames are sent and received in the same order***.
