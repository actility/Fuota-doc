# Server architecture overview

![](./images/img19.png)

FUOTA Server consists of 3 major components:

-  [Core](/FUOTA-server-architecture/RMC-core/)
-  [Agent](/FUOTA-server-architecture/RMC-agent/)
-  [Relational Database (MariaDB)](/FUOTA-server-architecture/FUOTA-database/)

The User Interface is implemented as a WEB browser application based on
Angular 4 framework and uses Core module REST API to interact with Core.