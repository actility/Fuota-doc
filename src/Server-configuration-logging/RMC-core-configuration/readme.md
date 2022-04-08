# RMC Core configuration

RMC Core configuration parameters are passed via environment variables
into docker-compose file, then propagated into Wildfly server
configuration "standalone.full" via the Wildfly container startup
environment.

In the table below, you will find the list of this environment variables which
should be set to desired value every time FUOTA server services are
started via docker-compose command. If any variable value is not set
default value will be used.

| Variable                       | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| **FOTA_USER_UID**              | UID under which processes will be executed                   |
| **FOTA_USER_GID**              | GID under which processes will be executed                   |
| **FOTA_TIMEZONE**              | Timezone in which processes will be executed (will affect logs timestamps) |
| **FOTA_CORE_RESTART**          | Wildfly container restart policy. When “no” is specified, the container does not restart under any circumstances. The “on-failure” policy restarts a container, if the exit code indicates an on-failure error |
| **FOTA_JBOSS_USER**            | Wildfly management console user name                         |
| **FOTA_JBOSS_PASSWORD**        | Wildfly management console user password                     |
| **FOTA_JBOSS_LAUNCH_PARAMS**   | Wildfly launch command line parameters                       |
| **FOTA_JBOSS_HTTP_PORT**       | Wildfly http port, used for unencrypted connection to UI and API |
| **FOTA_JBOSS_HTTPS_PORT**      | Wildfly https port, used for encrypted connection to UI and API |
| **FOTA_JBOSS_MANAGEMENT_PORT** | WIldfly management console port                              |
| **FOTA_MARIADB_HOST**          | MariaDB server hostname, used by Wildfly to connect to database. Do not change, if Wildfly and MariaDB services are launched together on one host |
| **FOTA_MARIADB_PORT**          | MariaDB port. Used both by core and MariaDB containers       |
| **FOTA_MARIADB_DB**            | MariaDB database name. It will be created if none exists on MariaDB container start |
| **FOTA_MARIADB_USER**          | MariaDB username. It will be created if none exists on MariaDB container start |
| **FOTA_MARIADB_PASSWORD**      | MariaDB user password. It will be created if none exists on MariaDB container start |
| **FOTA_MARIADB_ROOT_USER**     | MariaDB root username. It is used only to create user and database, if they do not exist |
| **FOTA_MARIADB_ROOT_PASSWORD** | MariaDB root user password                                   |
| **FOTA_KAFKA_SERVERS**         | kafka bootstrap server list in format “host: port” separated by ',' i.e. example.com:9092,test-kafka:9092 |
| **FOTA_KAFKA_TOPIC_CONFIG**    | Kafka configuration topic name. This topic name is changed when the API version between agent and core is changed. You normally do not have to change this |
| **FOTA_KAFKA_TOPIC_AGENT**     | Kafka agent topic name. This topic name is changed when the API version between agent and core is changed. You normally do not have to change this |
| **FOTA_KAFKA_TOPIC_METRICS**   | Kafka metrics topic name. This topic name is changed when the API version between agent and metrics receiver is changed. You normally do not have to change this |

Upon first start of Wildfly container, its server configuration file
"standalone.full" will be copied from the container filesystem into the
volume located in host's "compose" folder. On subsequent starts, the
container runs the configuration file from this folder directly, so any
Wildfly local customization is preserved.
