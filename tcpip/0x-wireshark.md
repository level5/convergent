# Wireshark

## prepare

### switch
1. The LAN switch continuously learns about the MAC addresses of the devices connected to it.
2. Now, if a packet is sent to a destination MAC, it will be forwarded only to the physical port that the switch knows this MAC address is coming from.
3. If a broadcast is sent, it will be forwarded to all the ports of the switch.
4. If a multicast is sent and Cisco Group Management Protocol (CGMP) or Internet Group Management Protocol (IGMP) is disabled, it will be forwarded to all the ports of the switch (CGMP and IGMP are protocols that enable multicast packets to be forwarded only to devices on a specific multicast group).
5. If a packet is sent to a MAC address that the switch does not know about (which is a very rare case), it will be forwarded to all the ports of the switch.

Therefore, when you configure a port monitor to a specific port, you will see all the traffic coming in and out of it. If you connect your laptop to the network, without configuring anything, you will see only the traffic coming in and out of your laptop, along with broadcasts and multicasts from the network.

## start

* Use promiscuous mode on all interfaces. When checked, Wireshark will capture all the packets that the computer receives. Unchecking it will capture only packets intended for the computer.
* Capture Files
* Stop Capture Automatically
* Display option
* Use Network Time Protocol (NTP) to synchronize your Wireshark and the monitored servers with a central time source
* capture wireless data over the network (not only from your laptop). Wireless Toolbar.
