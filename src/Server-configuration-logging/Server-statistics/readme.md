# Server statistics

FUOTA server gathers statistics about server operations which could be
used for billing purposes. Two kinds of statistics are collected:
general statistics and Smart Delta related statistics. Smart Delta
statistics are collected for devices which are built with Smart Delta
library. These two kinds of statistics are placed into two separate UDR
reports.

On the first date of every month at 0:00:00 new UDR reports are
generated for the previous month. General statistics report is stored in
/path/to/compose/core/export/UDR directory and Smart Delta statistics
report is stored in /path/to/compose/core/export/UDR_STM directory The
report file name corresponds to the date report was generated.

Example: On the first of June, new UDR reports in both directories with name
2018-06-01.csv will be generated. It will contain information about the
previous month usage (from May, 1st to June, 1st).

You can also generate a new pair of reports manually by sending a POST
request to: https://\<hostname\>/FOTACore-API/rest/v0.2.12/udr.

This information is available only under operator role. For more
information about UDR request, see the swagger schema.

The general statistics UDR report is a csv file and includes the
following columns.

| Field | Description                                                  |
| ----- | ------------------------------------------------------------ |
| **A** | Subscriber ID                                                |
| **B** | Number of devices that belong to the subscriber              |
| **C** | Number of campaigns executed by a user during the report time period |
| **D** | Number of devices that successfully passed multicast group campaign during the report time period |
| **E** | Number of devices that successfully passed binary campaign during the report time period |
| **F** | Number of devices that successfully passed the FOTA campaign during the report time period |

The Smart Delta statistics UDR report is a csv file and includes the
following columns.

| Field | Description                                                  |
| ----- | ------------------------------------------------------------ |
| **A** | Subscriber ID                                                |
| **B** | DeviceProfile ID – which identifies device hardware and software configuration for the device group |
| **C** | Number of devices with given DeviceProfile ID which were successfully updated |
| **D** | Number of full image update campaigns executed by a user during the report time period for given DeviceProfile ID |
| **E** | Number of partial image update campaigns executed by a user during the report time period for given DeviceProfile ID |