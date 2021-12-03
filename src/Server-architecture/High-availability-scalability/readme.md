# High availability and scalability

The current version of the FUOTA server supports a number of update
sessions limited only by:

-  The maximum size of the underlying Maria DB database
-  The maximum size file system of the virtual machine it is installed on
-  The downlink capacity allocated to reliable multicast sessions

In practical installations, the downlink capacity available for reliable
multicast sessions is the limiting factor.