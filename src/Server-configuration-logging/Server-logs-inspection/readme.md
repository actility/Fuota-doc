# Server logs inspection

To retrieve FUOTA server, RMC Agent and MariaDB logs you can use "docker
logs" command.

1. Obtain information about running containers using the "docker ps" command.

```json
# docker ps
CONTAINER ID        IMAGE                                                           COMMAND                  CREATED             STATUS              PORTS                                                                         NAMES
0bfd107340e8        xxx/fota-agent:Release_1.4.4                                    "/entrypoint.sh '-c …"   3 weeks ago         Up 3 weeks          22/tcp, 0.0.0.0:8082->8082/tcp                                                rmc_agent_1
f986204d6e8f        xxx/fota-core:Release_1.4.4                                     "/entrypoint.sh -c s…"   3 weeks ago         Up 3 weeks          22/tcp, 0.0.0.0:9993->9993/tcp, 0.0.0.0:80->8080/tcp, 0.0.0.0:443->8443/tcp   rmc_core_1
```

The first column, CONTAINER ID, contains reference of the container that
you will use in "docker logs".

2.  You will issue command to browse logs, for example command below to
    browse RMC Core log.

`docker logs fdc31d195f58`