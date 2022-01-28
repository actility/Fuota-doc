# RMC Core

## RMC Core functionality description

RMC Core is a central module of FUOTA system. RMC Core does the following actions:

-   Processes user commands received via REST API and validates inputs.
-   Reads/writes all FUOTA server objects from relational database.
-   Provides functionality to plan campaign based on device coverage by
    gateways, battery level and uplink rate of the devices (will be
    available in future release).
-   Prepares and sends campaign messages to RMC Agents to initiate
    campaign run.
-   Receives campaign progress messages from RMC Agents, stores them
    into database and present to user when requested.
-   Receives various metrics from RMC Agents, stores them into database
    and reports to external monitoring system when requested.
-   Monitors RMC Agents availability and load (will be available in
    future release);
-   Decides which RMC Agent will be used to run campaign (will be
    available in future release).
-   Reloads campaign from its recent state on another RMC Agent if
    previous one fails (will be available in future release).
-   Prepares incremental firmware upgrade patch.

RMC Core is a high-level component which does not has any visibility on
protocol transactions with end devices, fragmentation of the data
messages etc. Being independent from low-level details, it supports
different versions of RMC Agents which in turn could support different
versions of LoRaWAN® protocol or multicast, fragmentation and device
management packages. It brings great flexibility into FUOTA server
operations and allows simultaneous support of different types of
networks and devices.

To support new variant of protocol or device package one is needed to deploy new RMC Agent with required capability. This can be accomplished without disturbing all other parts of the system. RMC Core interacts with RMC Agent with messages sent and received over Kafka topics. RMC Core is implemented as a J2EE application running on the Wildfly application server. Wildfly application server is in turn running in docker container.

## RMC Core to Agent API

API between RMC Core and RMC Agents is based on Kafka messages sent
between them in both directions. There are four types of messages sent
to its own Kafka topic.

-   Configuration messages are sent from RMC Core to RMC Agent and
    contains information about campaign and actions which should be
    performed with them. Configuration messages are sent to RMC.CONFIG
    topic. RMC Agent provides response for commands contained in this
    message.

-   Progress messages are sent from RMC Agent to RMC Core and contains
    information about any state changes of devices during campaign.
    These messages are used to present information about campaign
    progress in the UI and to keep state of the campaign which will be
    used to bootstrap campaign on new agent if previous agent fails.
    Progress messages are sent to RMC.AGENT topic.

-   Metrics messages are sent from RMC Agent to RMC Core and contains
    operational metrics which will be returned via metrics request in
    RMC Core API. Metrics messages are sent to RMC.METRIC topic.

### Configuration messages

All configuration messages are provided with key for consumers balance.

-   use **target Id** if possible
-   use **msgId** in any other cases

Field required in configuration messages are the following.

1.  "action": field which contains command type for RMC Agent or response from RMC Agent.

| "action" field | Description              |
| -------------- | ------------------------ |
| **ADD**        | Start campaign on agent  |
| **GET**        | Get list of devices      |
| **RESP**       | Response for GET command |
| **STOP**       | Stop campaign on agent   |

2.  "targetType": field which contains type of processing required.

| "targetType" field | Description                      |
| ------------------ | -------------------------------- |
| **CAMPAIGN**       | Process campaign related command |

3.  "msgId": field must be provided to match response with request.

4.  "campaignType":  field is required for action ADD and contains campaign type requested.

| "campaignType" field | Description                            |
| -------------------- | -------------------------------------- |
| **BINARY**           | Binary file transfer campaign          |
| **MCGROUP**          | Multicast group configuration campaign |
| **FOTA**             | Firmware upgrade campaign              |

5.  "campaignId": field contains campaign id for reference, required for action ADD.

6.  "devices": field contains list of devices to be used in campaign, required for action ADD. It contains the following data.

| "devices" field         | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| **eui**                 | Device EUI                                                   |
| **loraWanScheme**       | LoRaWAN protocol, LoRaWAN_1.0 or LoRaWAN_1.1                 |
| **mcGroup**             | Multicast group which will be used to send data to the device |
| **genAppKey or appKey** | Key which will be used to derive keys necessary to encrypt multicast traffic (depending on LoRaWAN protocol) |
| **options**             | Device options : uplinkRate default uplink rate configured for the device |

7.  "mcGroups"**: field** contains multicast group related data that is required for action ADD. It contains following data.

| "mcGroups" field | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| **eui**          | DevEUI of the multicast group virtual device                 |
| **netAddr**      | Network address of the multicast group virtual devices       |
| **mcKey**        | Multicast group encryption key (obsolete)                    |
| **sessionClass** | Type of device to which, device should switch to receive multicast traffic. It could be B or C |
| **fCntDown**     | Initial downlink frame counter which should be used to send traffic to multicast group |
| **options**      | Multicast group additional options // rfRegion: RF regional parameters which should be taken into consideration when sending traffic to Multicast Group. It could have following values: EU868, US915, AS923. It will be used to calculate the maximum fragment size // Datarate: datarate which will be used to send traffic to multicast group from 0 to 15. It will be used in multicast group configuration on the device // downlinkDwellTime: downlink dwell time (0 or 1) which will be used to send traffic to multicast group. It will be used to calculate the maximum data fragment size // freq: frequency which will be used to send traffic to multicast group. It will be used in multicast group configuration on the device. Maximum value 0xFFFFFF // redundancy: forward error correction redundancy which will be used to send traffic to this multicast group from 0 to 4 providing corresponding redundancy of 1/2, 3/4, 5/6, 7/ 8, 1. This option is required for BINARY or FOTA campaign types |

8. "binary": field which contains base64 string of data to be encoded and sent to devices via multicast group. This field is required for BINARY and FOTA campaign types. It contains following option.

| "data" field | Description                           |
| ------------ | ------------------------------------- |
| **data**     | File contents base64 encoded.         |
| **size**     | File size, used for GET CAMPAIGN only |

9. "options": field which contains additional campaign related parameters. This field contains the following parameters.


| "options" field      | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **maxDuration**      | Campaign duration limit (in seconds). Required for all campaigns |
| **successThreshold** | Percent of the devices successfully completed stage command to make decision that the stage is completed. Required for all campaigns |
| **fwVersion**        | 4_byte firmware version number converted to string with pattern 0.0.0.0 which will be loaded to the device |
| **hwTarget**         | Devices hardware type formatted as hex string according to pattern 00:00:00:00:00:00 |
| **entrypoint**       | Firmware entry point address (obsolete)                      |
| **updateType**       | Type of firmware update which will be sent: PLAIN - uncompressed full firmware image // LZ4DICT – smart delta patch |
| **fwReqVersion**     | Firmware version which should be present on the device to apply patch for incremental updates (not supported yet) |
| **rebootDate**       | Device reboot date for image processing in FOTA campaign     |
| **rebootTime**       | Device reboot time for image processing in FOTA campaign. If rebootDate is not specified next compliant date will be used |
| **sessionDate**      | Session start date for BINARY and FOTA campaigns             |
| **sessionTime**      | Session start time for BINARY and FOTA campaigns             |

10. "lrc" field: Array of LRC URLs which agent should use and optional AS security parameters. Required for all campaigns.


| "lrc" field      | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| **asId**         | Optional AS ID field configured in subscriber account |
| **asKey**        | Optional AS KEY field configured in subscriber account |
| **url**          | LRC URL used to send downlink messages in given Campaign |

Example of ADD campaign configuration message

```json
{
"action":"ADD",
"targetType":"CAMPAIGN",
"campaignId":123,
"msgId":12,
"time":"2017-10-31T23:50:40.987+0300",
"campaignType":"BINARY",
"devices": [{
	"eui": "18b20000000001",
	"mcGroup":"18b200000000fd",
	"mcKeKey": "2b7e151628aed216abf7158809cf4f00",
	"loraWanScheme": "1.0",
	"options": {
		"uplinkRate": 10
}
},{
	"eui": "18b20000000002",
	"mcGroup":"18b200000000fe",
	"loraWanScheme": "1.0"
	"genAppKey": "2b7e151628aed216abf7158809cf4f00",
}],
"mcGroups": [{
	"eui": "18b200000000fe",
	"netAddr": "040010F2",
	"mcKey":"000102030405060708090a0b0c0d0e0f",
	"options": {
		"drate": 3,
		"downlinkDwellTime": 0,
		"redundancy": 0,
		"freq": 8681000,
		"rfRegion":"EU868"
		}
	},{
	"eui": "18b200000000fd",
	"netAddr": "040010F2",
	"mcKey":"000102030405060708090a0b0c0d0e0f",
	"options": {
		"drate": 3,
		"redundancy": 0,
		"freq": 8681000,
		"rfRegion":"EU868"
	}
}],
"options": {
	"fwVersion": "255.255.255.255",
	"hwTarget":"FF:FF:FF:FF:FF:FF",
	"entrypoint": "08008000",
	"updateType":"PLAIN",
	"fwReqVersion": "255.255.255.255",
	"maxDuration": 300,
	"successThreshold": 50
	"rebootDate": "1970-01-01"
	"rebootTime": "15:30:00"
	"sessionDate": "1970-01-01"
	"sessionTime": "15:30:00"
},
"lrc": [{
      "asId": "TWA_1100000000.1.AS",
      "asKey": "82-5b-6c-8f-22-a8-10-76-67-c3-41-29-00-34-bf-6f",
      "url": "https://dev1.thingpark.com/thingpark/lrc/rest/downlink"
}],
"binary":{
	"data":"Qk2GrgEAAAAAADYA..."
}
}
```

Example of STOP campaign configuration messages

```json
{
	"action":"STOP",
	"targetType":"CAMPAIGN",
	"campaignId":2,
	"msgId":12,
	"options":{
}
}
```

Example of GET campaign duration configuration message for MCGROUP
campaign type.

```json
{
"action": "GET",
"targetType": "CAMPAIGN",
"msgId": 12,
"campaignType":"MCGROUP",
"devices": [{
	"uplinkRate": 10
}]
}
```

Example of GET campaign duration configuration message for BINARY
campaign type.

```json
{
"action": "GET",
"targetType": "CAMPAIGN",
"msgId": 12
"campaignType":"BINARY",
"devices": [{
	"uplinkRate": 123, "the greatest uplink rate in the devices list"
}],
"mcGroups": [{
	"sessionClass": "C",
	"options": {
		"drate": 3,
		"downlinkDwellTime": 0,
		"redundancy": 0,
		"freq": 868100000,
		"rfRegion":"EU868"
}
},{
	"sessionClass": "C",
	"options": {
	"drate": 3,
	"redundancy": 0,
	"freq": 868100000,
	"rfRegion":"EU868"
}
}],
"binary": {
	"size": 1024
}
}
```

### Progress messages

All progress messages are provided with key -deveui for consumers
balance.

Fields which are present in progress messages.

| Field                            | Description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| **1- "version"**                 | Field contains message format version                        |
| **2- "time"**                    | Field contains timestamp of the message                      |
| **3- "deveui"**                  | Field is optional. If provided, deviceState expected for status details |
| **4- "mcgroup"**                 | Field is optional. If provided mcgroupState expected for status details |
| **5- "stage"**                   | Stage for which progress report is provided, field is optional |
| **6- "error"**                   | Field is optional. If any of campaignStatus, stageStatus, deviceStatus is ERROR then error field contains the most detailed info about error: campaign error→ stage error→ device error |
| **7- "campaignId"**              | Field contains campaign id                                   |
| **8- "campaignStagesCount"**     | Field contains total number of stages in campaign            |
| **9- "campaignStagesCompleted"** | Field contains number of stages completed                    |
| **10- "campaignStatus"**         | Field contains current status of the campaign                |
| **11- "deviceState"**            | Field contains status of the “deveui” device                 |
| **12- "stage"**                  | Field contains details about given stage. It includes following data |
|                                  | stageId – Stage number                                       |
|                                  | stageName – Human readable stage name                        |
|                                  | stageProgress – Percentage of the devices successfully processed in stage |
|                                  | stageOperationsTotal – Total number of messages should be sent |
|                                  | stageOperationsCompleted – Total number of messages sent     |
|                                  | stageStatus – Stage status                                   |
|                                  | mcGroupEui - Multicast Group DevEUI                          |
|                                  | mcGroupState – Multicast Group related state                 |
|                                  | fCntDown – Current Multicast Group downlink counter          |

Example of stage start status progress message.

```json
{
"version": "0.2.2",
"time": "2019-07-18T17:35:13.366+0300",
"campaignId": 207,
"campaignStagesCount": 7,
"campaignStagesCompleted": 6,
"campaignStatus": "RUNNING",
"stage": {
	"stageId": 6,
	"stageName": "DevVersion",
	"stageNum": 7,
	"stageProgress": 0,
	"stageOperationsTotal": 3,
	"stageOperationsCompleted": 0,
	"stageStatus": "RUNNING",
	"stageStartTime": "2019-07-18T17:35:24.000+0300"
}
}
```

Example of the device status update progress message.

```json
{
"version": "0.2.1",
"time": "2018-05-07T14:50:45.050+0300",
"campaignId": 123,
"campaignStagesCount": 5,
"campaignStagesCompleted": 1,
"campaignStatus": "COMPLETED",
"stage": {
	"stageId": 1,
	"stageName": "McGroupSetup",
	"stageProgress": 50,
	"stageOperationsTotal": 2,
	"stageOperationsCompleted": 1,
	"stageStatus": "COMPLETED"
},
"deveui": "18b20000000001",
"deviceState": {
	"deviceStatus": "COMPLETED"
}
}
```

One more example of the device status update progress message which
includes "fwVersion" information after the device has been successfully
upgraded.

```json
{
"version": "0.2.1",
"time": "2018-05-07T14:50:45.050+0300",
"campaignId": 123,
"campaignStagesCount": 5,
"campaignStagesCompleted": 1,
"campaignStatus": "COMPLETED",
"stage": {
	"stageId": 1,
	"stageName": "McGroupSetup",
	"stageProgress": 50,
	"stageOperationsTotal": 2,
	"stageOperationsCompleted": 1,
	"stageStatus": "COMPLETED"
},
"deveui": "18b20000000001",
"deviceState": {
	"deviceStatus": "PROCESSED",
	"fwVersion": "1.2.3.4"
}
}
```

Example of the Multicast Group update progress message with update
information about "fCntDown" multicast group downlink frames counter.

```json
{
"version": "0.2.1",
"time": "2018-05-07T14:51:14.055+0300",
"campaignId": 123,
"campaignStagesCount": 5,
"campaignStagesCompleted": 4,
"campaignStatus": "RUNNING",
"stage": {
	"stageId": 4,
	"stageName": "DataFragment",
	"stageProgress": 0,
	"stageOperationsTotal": 2,
	"stageOperationsCompleted": 0,
	"stageStatus": "COMPLETED"
},
"mcGroupEui": "18b200000000fd",
"mcGroupState": {
	"fCntDown": 131076
}
}
```

Example of the stage error progress message.

```json
{
"version": "0.2.1",
"time": "2018-05-07T14:48:44.642+0300",
"campaignId": 123,
"campaignStagesCount": 5,
"campaignStagesCompleted": 1,
"campaignStatus": "ERROR",
"error": {
	"source": "AGENT",
	"text": "stage is timed out"
},
"stage": {
	"stageId": 1,
	"stageName": "McGroupSetup",
	"stageProgress": 50,
	"stageOperationsTotal": 2,
	"stageOperationsCompleted": 1,
	"stageStatus": "ERROR"
}
}
```

Example of the campaign error progress message.

```json
{
"version": "0.2.1",
"time": "2018-05-07T14:48:44.642+0300",
"campaignId": 123,
"campaignStagesCount": 5,
"campaignStagesCompleted": 1,
"campaignStatus": "ERROR",
"error": {
	"source": "AGENT",
	"text": "campaign is timed out"
},
"stage": {
	"stageId": 1,
	"stageName": "McGroupSetup",
	"stageProgress": 50,
	"stageOperationsTotal": 2,
	"stageOperationsCompleted": 1,
	"stageStatus": "COMPLETED"
}
}
```

Example of the device status update progress message with error.

```json
{
"version": "0.2.1",
"time": "2018-05-07T14:50:45.050+0300",
"campaignId": 123,
"campaignStagesCount": 5,
"campaignStagesCompleted": 1,
"campaignStatus": "RUNNING",
"stage": {
	"stageId": 1,
	"stageName": "McGroupSetup",
	"stageProgress": 50,
	"stageOperationsTotal": 2,
	"stageOperationsCompleted": 1,
	"stageStatus": "RUNNING"
},
"deveui": "18b20000000001",
"deviceState": {
	"deviceStatus": "ERROR"
},
"error":{
	"source": "DEVICE",
	"text":"UpFCounter is no longer available"
}
}
```

### Metrics messages

Metrics messages includes the following fields.

| Field                 | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **1- "version"**      | Field with message format version. Required field            |
| **2- "time"**         | Field with information about timestamp when message was generated. Required field |
| **3- "instanceId"**   | Field with agent instance ID of message source. Required field |
| **4- "uplinksAbs"**   | Field with information about number of uplinks processed by given RMC Agent |
| **5- "downlinksAbs"** | Field with information about number of downlinks processed by given RMC Agent |

Example of the metrics message.

```json
{
"time":"2017-10-31T23:50:40.987+0300",
"version":"0.2.1",
"instanceId":"instance0",
"uplinksAbs": 123,
"downlinksAbs": 13
}
```
