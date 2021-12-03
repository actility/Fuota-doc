# Server REST API

FUOTA server REST API is used by the following:

-   User interface implemented as Angular 4 web application
-   External OSS system if FUOTA server UI is not used

The complete description of the FUOTA server REST API is available at
https://\<hostname\>/ FOTACore-API/rest-api.json.

Human readable REST API description is available at

All paths which provides lists supports required 'offset' and 'limit'
and optional 'field' and 'value' query options with GET requests.
'Offset' and 'limit' query options should go in pair and provides start
and stop indexes for paging. 'Field' and 'value' query options are used
for filtering. They should go in pair and provides field name and value
to filter on.

Example of GET request with query options is provided below:

```
https://hostname/FOTACore-API
rest/v0.2.12?offset=1&limit=10&field=DevEUI&value=0x0011223344556677
```

The table below lists all API paths and HTTP methods they support and short
description.

| Path                                      |                           GET                            |                             POST                             |               PUT               |                        PATCH                        |
| ----------------------------------------- | :------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------: | :-------------------------------------------------: |
| /devices                                  |                   Get list  of devices                   |                      Add a  new device                       |               N/A               |                         N/A                         |
| /devices/{EUI}                            |              Get  {EUI} device information               |                             N/A                              |      Update {EUI}  device       |       Update some properties  of {EUI} device       |
| /devlists                                 |                Get list  of devicesLists                 |                  Add a  new deviceList info                  |               N/A               |                         N/A                         |
| /devlists{id}                             |                Get  deviceList {id} info                 |                             N/A                              | Update an  {id} deviceList info |     Update some properties  of {id} deviceList      |
| /fwprofiles                               |               Get list  of all fwprofiles                |       Create  fwprofile (if it doesn't already exist)        |               N/A               |                         N/A                         |
| /fwprofiles/{subscriberId}                |                      Get  fwprofile                      |                             N/A                              |   Create  or change fwprofile   |                  Change  fwprofile                  |
| /mcgroups                                 |                  Get list  of mcgroups                   |                   Add a  new mcgroup info                    |               N/A               |                         N/A                         |
| /regions                                  |                   Get list  of regions                   |                     Add new  region info                     |               N/A               |                         N/A                         |
| /regions/{id}                             |                  Get  region {id} info                   |                             N/A                              |     Update  an {id} region      |       Update  some properties of {id} region        |
| /files                                    |                    Get list  of files                    |                        Add new  file                         |               N/A               |                         N/A                         |
| /files/{id}                               |                   Get file  {id} info                    |                             N/A                              |      Update  an {id} file       |        Update  some properties of {id} file         |
| /files/{id}/download                      |                  Download  an {id} file                  |                             N/A                              |               N/A               |                         N/A                         |
| /campaigns                                |                  Get list  of campaigns                  |                    Add new campaign  info                    |               N/A               |                         N/A                         |
| /campaigns/{id}                           |                    Get  campaign {id}                    |                             N/A                              |     Update a  campaign {id}     |      Update  some properties of campaign {id}       |
| /campaigns/{id}/{operation}               |                           N/A                            | Update  state of campaign {id} (START, STOP, PAUSE, RESUME)  |               N/A               |                         N/A                         |
| /campaigns/validate                       |                           N/A                            | Count  devices and regions that are linked to the campaign (no validation performed) |               N/A               |                         N/A                         |
| /progress/campaigns                       |            Get list  of campaigns progresses             |                             N/A                              |               N/A               |                         N/A                         |
| /progress/camaigns/{id}                   |          Get  progress status of campaign {id}           |                             N/A                              |               N/A               |                         N/A                         |
| /progress/campaigns/{id}/stages/{stageId} | Get  device statues for campaign {id} at stage {stageId} |                             N/A                              |               N/A               |                         N/A                         |
| /progress/campaigns/{id}/devices          |       Get  latest devices states for campaign {id}       |                             N/A                              |               N/A               |                         N/A                         |
| /generate/mcgroups_keys                   |                           N/A                            |      Generate  NwkSKey and AppSKey for multicast group       |               N/A               |                         N/A                         |
| /users                                    |                    Get list  of users                    |                        Add new  user                         |               N/A               |                         N/A                         |
| /users/{login}                            |                  Get user  {login} info                  |                             N/A                              |    Update  user {login} info    |       Update  some properties of {login} user       |
| /users/{login}/pass                       |                           N/A                            |                             N/A                              |               N/A               |          Update  password of {login\| user          |
| /udr                                      |                           N/A                            |                     Generate  UDR report                     |               N/A               |                         N/A                         |
| /config                                   |              Get  subscriber configuration               |                             N/A                              |               N/A               | Update  some properties of subscriber configuration |
