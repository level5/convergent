0.....   1/2
10....   1/4
110...   1/8
1110..   1/16
11110.



## Router

A router make decisions about how to route datagrams using its internal ***routing table***. The table contains entries specifying to which router datagrams should be sent in order to reach a particular network.

Each router maintains a set of information that provides a mapping between different network IDs and the other routers to which it is connected. This information is contained in a data structure normally called a ***routing table***.

Each entry in the table, called a ***routing entry***, provides information about one network (or subnetwork or host).

If a router has more than one match for a network ID in this manner, it must use the match with the longest network identifier first, since it represents a more specific network description.


uses IP to send messages from one source device to one recipient device, in a process called ***unicast*** communication. IP does, however, also support the ability to have one device send a message to a set of recipients. This is called ***multicasting***.
