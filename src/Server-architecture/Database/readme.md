# Database

FUOTA server uses the MariaDB version 10.2 as an RDBMS to store all
required objects and configuration.

RMC Core could connect either to the database in the MariaDB container
provided in distribution or to the external database instance. At first
startup, the RMC Core application server probes that the FUOTA database
schema exists on the database server specified in its configuration. If
it does not exist, RMC Core creates an empty schema and populates it
with all required data to start the operation.