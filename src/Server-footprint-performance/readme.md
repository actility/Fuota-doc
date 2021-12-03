# Server footprint and performance

## Recommended footprint

The minimum recommended virtual machine (VM) configuration when FUOTA
server is deployed, is 2 CPU cores (Xeon 2,6 GHz core equivalent) and 4
GB RAM.

A Virtual Machine with 4 CPU cores is recommended to achieve performance
results shown below.

## Maximum computing performance

The FUOTA server virtual machine configuration that has been tested is
the following:

-   ESXi VMware 5.5 hypervisor
-   VM hardware - 4 x CPU cores (Xeon 2,6 GHz referenced), 2 GB RAM
-   OS - Centos 7.4
-   HTTP server configuration - poolsize=4, eventmode=0 (select)
-   Number of different DevEUI used in parallel in test requests - 2000