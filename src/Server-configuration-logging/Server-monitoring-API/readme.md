# Server monitoring API

FUOTA server supports a collection of monitoring metrics for operational
purposes. This metrics shows counts for all main server objects together
with their respective states. Metrics are returned on following a REST
API request:

Statistics are available for following objects.

-   Devices
-   DevicesSets
-   McGroups
-   Regions
-   Files
-   Campaigns
-   Agents

For each object an array of metric records is returned. Metrics records
contains count of objects in different states.

These states are the following.

| Status         | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| **ACTIVE**     | Objects exist in the system and could be included into a campaign. |
| **ARCHIVED**   | Objects are obsolete and could not be included into a campaign and will not be returned in the lists. |
| **CONFIGURED** | Objects are included into some campaigns.                    |
| **RUNNING**    | Objects are participating in a running campaign.             |
| **STOPPED**    | Objects are participating in a stopped campaign.             |
| **FAILED**     | Objects are failed during a campaign.                        |
| **SUCCEEDED**  | Objects are succeeded during a campaign.                     |

Example of a response for metrics request.

```JSON
{\"DevicesSets\":\[
		{\"State\":\"ACTIVE\",
		\"Count\":2}\],
\"Agents\":\[
		{\"InstanceId\":\"agent0\",
		\"Time\":\"2018-10-21T14:09:04.425+0000\",
		\"UplinkAbs\":714,
		\"DownlinkAbs\":9}\],
\"Campaigns\":\[
		{\"State\":\"FAILED\",
		\"Count\":4},
		{\"State\":\"STOPPED\",
		\"Count\":16},
		{\"State\":\"SUCCEEDED\",
		\"Count\":12}\],
\"Regions\":\[
		{\"State\":\"ACTIVE\",
		\"Count\":5}\],
\"Devices\":\[
		{\"State\":\"ACTIVE\",
		\"Count\":4}\],
\"McGroups\":\[
		{\"State\":\"ACTIVE\",
		\"Count\":4}\],
\"Files\":\[
		{\"State\":\"ACTIVE\",
		\"Count\":3}\]
}
```

For more information about metrics request, see the inline swagger
schema in `https://\<hostname\>/FOTACore-API/``.