# RMC Agent

## RMC Agent functionality description

RMC Agent is a peripheral FUOTA component which directly interfaces with
LRC to send commands and data necessary to configure multicast groups,
deliver binary files or firmware upgrades to devices.

RMC Agent interacts with RMC Core with messages sent and received over
Kafka topics. Details about this topics and messages used between RMC
Core and Agent are provided in [RMC Core to Agent API](/FUOTA-server-architecture/RMC-core/#rmc-core-to-agent-api).

RMC Agent provides following functionality.

-   Receives campaign management commands from RMC Core and performs all
    required campaign preparation actions.
-   Implements support of Multicast group management package,
    Fragmentation session management package, Device firmware management
    package, and Application layer clock synchronization package.
-   Sends all required unicast commands via the LRC-AS tunnel interface
    to configure a Multicast Group, open class B or class C session,
    configure fragmentation session, and process responses.
-   Fragments and encodes binary or firmware file received from RMC Core
    and sends it via the LRC-AS tunnel interface as multicast or unicast
    data fragments to the devices.
-   Reports results of each command execution to RMC Core via progress
    messages. States constructed in RMC Core from this progress messages
    are used to reconstruct it and continue campaign on a new RMC Agent
    if the agent currently running campaign fails.
-   Collects metrics about processed campaigns and sends them to RMC
    Core to present later to monitoring application.

RMC Agent is implemented as a native C++ application running in docker
container.

## RMC Agent to LRC API

RMC Agent uses the LRC-AS Tunnel Interface v6.1 as an API between Agent
and LRC. RMC Agent could be configured to use either HTTP or HTTPS as
transport protocol. The Transport protocol type which will be used by
RMC Agent derives from LRC url that is configured for a given
Subscriber.

RMC Agent supports following types of uplink AS-LRC tunnel messages.

-   Uplink frame report messages directed to ports 200, 201 and 203
    (Multicast group management package, Fragmentation session
    management package and Device firmware management package
    correspondently), which are used to receive answers from device for
    FUOTA commands. Agent decrypts (if AS key is not configured in LRC)
    LoRaWAN® device payload and processes command response from them.

-   Downlink frame sent messages which are used to provide flow control
    with all device classes for unicast downlink messages. A new
    downlink unicast message will be sent by RMC Agent only after a
    downlink frame sent message is received from LRC or timeout expired.

-   Multicast summary report messages which are used to provide flow
    control of downlink multicast messages. New downlink multicast
    messages will be sent by RMC Agent only after multicast summary
    report message is received from LRC or timeout expired.

RMC Agent prepares and sends downlink messages to LRC. Payload of
unicast downlink messages is always sent in clear by RMC Agent and is
encrypted by LRC. Payload of multicast downlink messages could be
encrypted by RMC Agent or sent in clear and encrypted by LRC depending
on RMC Agent configuration. Currently RMC Agent does not support OTAA
devices with SSM/HSM. Their support will be implemented in future
releases.
