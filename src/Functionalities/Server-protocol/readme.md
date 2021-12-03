# Server protocol

The software implements the following LoRa Alliance™ specifications:

-   Remote Multicast Setup: v1.0.0
-   Fragmented Data Block Transport: v1.0.0
-   Firmware management Protocol: Release Candidate 1
-   Application layer clock synchronization over LoRaWAN v1.0.0

## Remote Multicast Setup package

The ThingPark FUOTA server implements the following commands that are
part of the Remote Multicast Setup application layer. The transmitted
messages are listed in the table below.

| CID  |       Command name       | Transmitted by end-device | Transmitted by server |                      Short description                       | Supported |
| :--: | :----------------------: | :-----------------------: | :-------------------: | :----------------------------------------------------------: | :-------: |
| 0x00 | ***PackageVersionReq***  |                           |           X           | Used by the AS to request the package  version implemented by the end-device |    no     |
| 0x00 | ***PackageVersionAns***  |             X             |                       |           Conveys the answer to PackageVersionReq            |    no     |
| 0x01 |  ***McGroupStatusReq***  |                           |           X           | Asks  an end-device to list the multicast groups currently configured |    no     |
| 0x01 |  ***McGoupStatusAns***   |             X             |                       |         Conveys  answer to the McGroupStatus request         |    no     |
| 0x02 |  ***McGroupSetupReq***   |                           |           X           | Provides  an end-device with all necessary information to join a multicast group |    yes    |
| 0x02 |  ***McGroupSetupAns***   |             X             |                       |            Conveys the answer to McGroupSetupReq             |    yes    |
| 0x03 |  ***McGroupDeleteReq***  |                           |           X           |     Used  to delete a multicast group from an end-device     |    no     |
| 0x03 |  ***McGroupDeleteAns***  |             X             |                       |            Conveys the answer to McGroupDeleteReq            |    no     |
| 0x04 | ***McClassCSessionReq*** |                           |           X           | Conveys  information about the next class C multicast session the end-device shall join |    yes    |
| 0x04 | ***McClassCSessionAns*** |             X             |                       |           Conveys the answer to McClassCSessionReq           |    yes    |
| 0x05 | ***McClassBSessionReq*** |                           |           X           |             Creates  a class B multicast session             |    yes    |
| 0x05 | ***McClassBSessionAns*** |             X             |                       |           Conveys the answer to McClassCSessionAns           |    yes    |

Currently only one Multicast Group and only one Multicast Session are
supported per device.

## Fragmented Data Block Transport package

The ThingPark FUOTA server implements the following commands that are
part of the Fragmented Data Block Transport application layer. The
transmitted messages are listed in the table below.

| CID  |        Command name        | Transmitted by end-device | Transmitted by server | Multicast (M) / Unicast (U) |                      Short Description                       | Supported |
| :--: | :------------------------: | :-----------------------: | :-------------------: | :-------------------------: | :----------------------------------------------------------: | :-------: |
| 0x00 |  ***PackageVersionReq***   |                           |           X           |              U              | Used by the AS to request the package version implemented by the end-device |    no     |
| 0x00 |  ***PackageVersionAns***   |             X             |                       |              U              |           Conveys the answer to PackageVersionReq            |    no     |
| 0x01 | ***FragSessionStatusReq*** |                           |           X           |             U/M             | Asks  an end-device or a group of  end-devices to send the status of a fragmentation session |    yes    |
| 0x01 | ***FragSessionStatusAns*** |             X             |                       |              U              |      Conveys  answer to the FragSessionStatus  request       |    yes    |
| 0x02 | ***FragSessionSetupReq***  |                           |           X           |              U              |               Defines  a fragmentation session               |    yes    |
| 0x02 | ***FragSessionSetupAns***  |             X             |                       |              U              |       Conveys  answer to the FragSessionSetup  request       |    yes    |
| 0x03 | ***FragSessionDeleteReq*** |                           |           X           |              U              |           Used  to delete a fragmentation session            |    no     |
| 0x03 | ***FragSessionDeleteAns*** |             X             |                       |              U              |      Conveys  answer to the FragSessionDelete  request       |    no     |
| 0x08 |     ***DataFragment***     |                           |           X           |             U/M             |             Carries  a fragment of a data block              |    yes    |


Currently only one fragmentation session is supported.

## Firmware management Protocol package

The ThingPark FUOTA server implements the following commands that are
part of the Firmware management Protocol application layer. The
transmitted messages are listed in the table below.

| CID  |       Command name        | Transmitted by end-device | Transmitted by server |                      Short Description                       | Supported |
| :--: | :-----------------------: | :-----------------------: | :-------------------: | :----------------------------------------------------------: | :-------: |
| 0x00 |   ***PackageVersionReq***   |                           |           X           | Used by the AS to request the package  version implemented by the end-device |    no     |
| 0x00 |   ***PackageVersionAns***   |             X             |                       |           Conveys the answer to PackageVersionReq            |    no     |
| 0x01 |     ***DevVersionReq***     |                           |           X           | Asks an end-device for its  hardware version, and its currently running firmware version |    yes    |
| 0x01 |     ***DevVersionAns***     |             X             |                       |       Conveys the answer to the  DevVersionReq request       |    yes    |
| 0x02 |   ***DevRebootTimeReq***    |                           |           X           | Instructs an end-device to  program a reboot at a given time or immediately |    yes    |
| 0x02 |   ***DevRebootTimeAns***    |             X             |                       |            Conveys the answer to DevRebootTimeReq            |    yes    |
| 0x03 | ***DevRebootCountdownReq*** |                           |           X           | Instructs an end-device to  program a reboot after a certain period of time has elapsed |    no     |
| 0x03 | ***DevRebootCountdownAns*** |             X             |                       |         Conveys the answer to DevRebootCountdownReq          |    no     |
| 0x04 |  ***DevUpgradeImageReq***   |                           |           X           | Asks an end-device if a  firmware upgrade image is present in memory, its version and status |    yes    |
| 0x04 |  ***DevUpgradeImageAns***   |             X             |                       |         Conveys answer to the DevUpgradeReq request          |    yes    |
| 0x05 |   ***DevDeleteImageReq***   |                           |           X           | Instructs the end-device to  delete a given firmware upgrade image |    yes    |
| 0x05 |   ***DevDeleteImageAns***   |             X             |                       |       Conveys answer to the DevDeleteImageReq request        |    yes    |

## Application layer clock synchronization package

FUOTA server implements the following commands that are part of the
Application layer clock synchronization protocol. The transmitted
messages are listed in the table below.

| CID  |           Command name            | Transmitted by end-device | Transmitted by server |                      Short Description                       | Supported |
| :--: | :-------------------------------: | :-----------------------: | :-------------------: | :----------------------------------------------------------: | :-------: |
| 0x00 |      ***PackageVersionReq***      |                           |           X           | Used by the AS to request the package  version implemented by the end-device |    no     |
| 0x00 |      ***PackageVersionAns***      |             X             |                       |           Conveys the answer to PackageVersionReq            |    no     |
| 0x01 |         ***AppTimeReq***          |             X             |                       |        Used by end-device to request clock correction        |    yes    |
| 0x01 |         ***AppTimeAns***          |                           |           X           |             Conveys the clock timing correction              |    yes    |
| 0x02 | ***DeviceAppTimePeriodicityReq*** |                           |           X           | Used by the application server  for 2 purposes:  Set the periodicity at which  the end-device shall transmit AppTimeReq messages and request an immediate  transmission of end-device time |    no     |
| 0x02 | ***DeviceAppTimePeriodicityAns*** |             X             |                       |      Conveys the answer to  DeviceAppTimePeriodicityReq      |    no     |
| 0x03 |    ***ForceDeviceResyncReq***     |                           |           X           | Used by the application server  to the end-device to trigger a clock resynchronization. |    no     |
