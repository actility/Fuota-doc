(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{508:function(t,e,n){"use strict";n.r(e);var r=n(45),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"rmc-core-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rmc-core-configuration"}},[t._v("#")]),t._v(" RMC Core configuration")]),t._v(" "),n("p",[t._v('RMC Core configuration parameters are passed via environment variables\ninto docker-compose file, then propagated into Wildfly server\nconfiguration "standalone.full" via the Wildfly container startup\nenvironment.')]),t._v(" "),n("p",[t._v("In the table below, you will find the list of this environment variables which\nshould be set to desired value every time FUOTA server services are\nstarted via docker-compose command. If any variable value is not set\ndefault value will be used.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Variable")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("FOTA_USER_UID")])]),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("UID under which processes will be executed")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_USER_GID")])]),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("GID under which processes will be executed")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_TIMEZONE")])]),t._v(" "),n("td",[t._v("/usr/share/zoneinfo/UTC")]),t._v(" "),n("td",[t._v("Timezone in which processes will be executed (will affect logs timestamps)")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_CORE_RESTART")])]),t._v(" "),n("td",[t._v("always")]),t._v(" "),n("td",[t._v("Wildfly container restart policy. When “no” is specified, the container does not restart under any circumstances. The “on-failure” policy restarts a container, if the exit code indicates an on-failure error")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_JBOSS_USER")])]),t._v(" "),n("td",[t._v("admin")]),t._v(" "),n("td",[t._v("Wildfly management console user name")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_JBOSS_PASSWORD")])]),t._v(" "),n("td",[t._v("pa$$w0rd")]),t._v(" "),n("td",[t._v("Wildfly management console user password")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_JBOSS_LAUNCH_PARAMS")])]),t._v(" "),n("td",[t._v("empty string")]),t._v(" "),n("td",[t._v("Wildfly launch command line parameters")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_JBOSS_HTTP_PORT")])]),t._v(" "),n("td",[t._v("80")]),t._v(" "),n("td",[t._v("Wildfly http port, used for unencrypted connection to UI and API")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_JBOSS_HTTPS_PORT")])]),t._v(" "),n("td",[t._v("443")]),t._v(" "),n("td",[t._v("Wildfly https port, used for encrypted connection to UI and API")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_JBOSS_MANAGEMENT_PORT")])]),t._v(" "),n("td",[t._v("9993")]),t._v(" "),n("td",[t._v("WIldfly management console port")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_HOST")])]),t._v(" "),n("td",[t._v("mariadb.fota")]),t._v(" "),n("td",[t._v("MariaDB server hostname, used by Wildfly to connect to database. Do not change, if Wildfly and MariaDB services are launched together on one host")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_PORT")])]),t._v(" "),n("td",[t._v("3306")]),t._v(" "),n("td",[t._v("MariaDB port. Used both by core and MariaDB containers")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_DB")])]),t._v(" "),n("td",[t._v("fota")]),t._v(" "),n("td",[t._v("MariaDB database name. It will be created if none exists on MariaDB container start")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_USER")])]),t._v(" "),n("td",[t._v("Fota_user")]),t._v(" "),n("td",[t._v("MariaDB username. It will be created if none exists on MariaDB container start")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_PASSWORD")])]),t._v(" "),n("td",[t._v("fota_pass")]),t._v(" "),n("td",[t._v("MariaDB user password. It will be created if none exists on MariaDB container start")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_ROOT_USER")])]),t._v(" "),n("td",[t._v("root")]),t._v(" "),n("td",[t._v("MariaDB root username. It is used only to create user and database, if they do not exist")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_MARIADB_ROOT_PASSWORD")])]),t._v(" "),n("td",[t._v("8JpE75cxDKOZ")]),t._v(" "),n("td",[t._v("MariaDB root user password")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_KAFKA_SERVERS")])]),t._v(" "),n("td",[t._v("kafka-server:9092")]),t._v(" "),n("td",[t._v("kafka bootstrap server list in format “host: port” separated by ',' i.e. example.com:9092,test-kafka:9092")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_KAFKA_TOPIC_CONFIG")])]),t._v(" "),n("td",[t._v("RMC.CONFIG.v1")]),t._v(" "),n("td",[t._v("Kafka configuration topic name. This topic name is changed when the API version between agent and core is changed. You normally do not have to change this")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_KAFKA_TOPIC_AGENT")])]),t._v(" "),n("td",[t._v("RMC.AGENT.v1")]),t._v(" "),n("td",[t._v("Kafka agent topic name. This topic name is changed when the API version between agent and core is changed. You normally do not have to change this")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("FOTA_KAFKA_TOPIC_METRICS")])]),t._v(" "),n("td",[t._v("RMC.METRICS.v1")]),t._v(" "),n("td",[t._v("Kafka metrics topic name. This topic name is changed when the API version between agent and metrics receiver is changed. You normally do not have to change this")])])])]),t._v(" "),n("p",[t._v('Upon first start of Wildfly container, its server configuration file\n"standalone.full" will be copied from the container filesystem into the\nvolume located in host\'s "compose" folder. On subsequent starts, the\ncontainer runs the configuration file from this folder directly, so any\nWildfly local customization is preserved.')])])}),[],!1,null,null,null);e.default=a.exports}}]);