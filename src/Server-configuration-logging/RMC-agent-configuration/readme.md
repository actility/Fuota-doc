# RMC Agent configuration

The RMC Agent configuration consists of several groups related to kafka
brokers configuration, kafka topics configuration, https configuration
and global options.

The table below shows all configuration parameters in the form `<group name:option name>` or `<group name>:<sub group name>:<option name>`. Each option is followed by a value. Option and value are
separated by '=' or ':'.

Upon first start of RMC Agent, the configuration file is present only in
the Agent container. Upon startup of the container, the `config.ini` file
will be automatically copied into \$(RMC_SERVER_HOME)/agent/config/config.ini file (e.g.
/opt/rmc/agent/config/config.ini). After \$(RMC_SERVER_HOME)/agent/config/config.ini file is created you can
bring RMC Agent down and customize `config.ini`.

| Parameter                              | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| **kafka: brokers**                     | Comma separated list of kafka bootstrap servers to use in the form `<server name or ip>:<server port>` |
| **config_topic: consumer: topic**      | Kafka topic name which is used to send configuration commands from RMC Core to RMC Agent. Name specified in this configuration parameter should match name in docker compose customization described in Table 5. Usually this name is changed with every Core -> Agent configuration API change. |
| **logging_topic: producer: topic**     | Kafka topic name which is used to send progress status messages from RMC Agent to RMC Core. Name specified in this configuration parameter should match the name in docker compose customization described in Table 5. Usually this name is changed with every Agent -> Core logging API change. |
| **metrics_topic: producer: topic**     | Kafka topic name which is used to send billing metrics messages from RMC Agent to RMC Core. Name specified in this configuration parameter should match the name in docker compose customization described in Table 5. Usually this name is changed with every Agent -> Core metrics API change. |
| **http: port**                         | Port number on which the Agent listens incoming tunnel interface messages from LRC Server. |
| **http: bind_address**                 | Local interface IP address on which Agent will receive tunnel interface messages from LRC Server |
| **http: pool_size**                    | Size of Agent input HTTP pool. Agent will start up to this number of threads to process incoming messages. |
| **global: logging-level**              | Logging details level. 0 – less detailed log.                |
| **global: instance_id**                | RMC Agent unique id which is used in multiple agent configuration to reference the given Agent from RMC Core. |
| **global: fucport**                    | Device application port which RMC Agent uses to send and receive Multicast Control Package messages. |
| **global: fmcport**                    | Device application port that RMC Agent uses to send and receive Fragmentation Transport Package message. |
| **global: aclksynport**                | Device application port that RMC Agent uses to send and receive Application Clock Synchronization message. |
| **global: fdmport**                    | Device application port which RMC Agent uses to send and receive Device Management Package messages. |
| **global: mcsession_delay**            | Time interval in seconds between the moment when RMC Agent sends command to create a multicast Class B or C session and the moment when the device is programmed to switch to a Class B or C session. |
| **global: classb_start_beacons_delay** | Numbers of beacons to delay before guaranteed ClassB session start |
| **global: datafrag_loops_max**         | Maximum number of data fragments loops count for NOFEC mode  |
| **global: frag_redundancy_max**        | Absolute maximum number of supported redundancy fragments in data fragment session. It should be equal to the expected maximum number of fragments that the device can receive. |
| **global: first_fragment_delay**       | Time between a class C session is open on the device and the first data fragment is sent. |
| **global: mcast_msg_delay**            | Time delay in milliseconds between consecutive loops of device status checks when trying to send multicast messages. |
| **global: ucast_msg_delay**            | Time delay in milliseconds between consecutive loops of device status checks when trying to send unicast messages. |
| **global: complete_delay**             | Time delay between Campaign successful device     threshold is reached and Campaign is finished. This time interval is used to let additional devices to finish Campaign and send corresponding messages. |
| **global: stage_complete_delay**       | Number of uplinks to delay before stage is completed (waiting for late messages) |
| **global: fuota_process_max_time**     | Maximum time allocated for the processing of received binary image. Usually it is the time which is required for the device to flash firmware update. |
| **global: fsession_status_threshold**  | Threshold in percentage of the number of devices that can fail to send successful fragmentation session message. Above this threshold, the RMC Agent asks fragmentation status via multicast command. |
| **global: fsession_status_timeout**    | Maximum waiting time in seconds for the fragmentation session status response message after session_status_spread time expired. |
| **global: summary_reports_disabled**   | Do not wait for the multicast summary report before the frame is sent. |
| **global: summary_report_timeout**     | How much time should RMC Agent wait to receive a multicast summary report. |
| **global: time_sync_ tolerance**       | Time tolerance which will be used for time sync request processing if device is unknown for agent instance (seconds) |
| **global: encrypt_disabled**           | Do not encrypt any downlink multicast message when sent to LRC (1 – disable encryption; 0 - enable encryption). |
| **global: mcgroup_validity_coeff**     | Coefficient used to multiply expected session length in data fragments to set validity max counter. |
| **global: metrics_frame**              | Time between consecutive metrics frames send from the agent to the server. |
| **global: debug**                      | Set to 1 to enable debug.                                    |
| **global: msg_retries**                | Maximum number of retries for message sent if no response from device was received. |
| **global: retry_ineligible_gateways**  | If enabled (1) query parameter RetryIneligibleGateways=0 will be added to multicast downlink request request. |

Example of RMC Agent configuration config.ini file is provided below.

```JSON
/\*props is an array \[prop1, val1, prop2, val2\],
see rdkafka docs for supported properties info
https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md
\*/
kafka: {
		brokers: \"kafka-server:9092\",
		workers: 4,
		batch_size: 20, //\"group.id\" should be specified only for uplink topic
		props: \[\"client.id\",\"agent0\"\]
};
config_topic: { // global configuration
		consumer: {
			topic: \"RMC.CONFIG.v0.2.7\",
			partitions_num: 3,
			props: \[\"group.id\",\"agents-group0\"\]
		}
}
logging_topic: { // read from specific partition
		producer: {
			topic: \"RMC.AGENT.v0.2.3\",
			props: \[\]
		}
}
metrics_topic: { // read from specific partition
		producer: {
			topic: \"RMC.METRICS.v0.2.1\",
			props: \[\]
		}
}
http:{
		port: 8082,
		bind_address: \"0.0.0.0\",
		pool_size: 4,
}
global:{
		logging_level: 0
		instance_id: \"agent0\", // lrc_url: \"http://172.16.12.9:8807/sensor\",
		fucport: 200, 		// unicast port
		fmcport: 201, 		// multicast port
		fdmport: 203, 		// device management port
		aclksynport: 202, 	// application clock synchronization port
		uplinkPort: 10		 // common uplink port for uplink rate collecting
		classb_opening_delay: 128, // delay for guaranteed ClassB session opening
		frag_redundancy_max: 340, // max supported fragment redundancy
		msg_retries: 2 // max retries for message sent if no response from device was received
		first_fragment_delay: 3, // delay before first data fragment send (seconds)
		mcast_msg_delay: 2000, // delay before next mcast message send (millis)
		ucast_msg_delay: 1000, // delay before next ucast message send (millis)
		complete_delay: 10, // delay before stage completed, waiting for latemessages etc.
		fuota_process_max_time: 20,// time for guaranteed fuota processing (seconds)
		fsession_status_threshold:5,// participant mode threshold for fragment status request
		summary_reports_disabled: 0,// disable summary reports check for data fragments flow control
		summary_report_timeout:0, // max wait time for summary report, 0 - wait forever (seconds)
		encrypt_disabled: 0, 		// disable encryption by agent
		mcgroup_validity_coeff: 10,		 // mcgroup validity time coefficient (datafragment loop frames \* this value)
		datafrag_loops_max: 2, 		// max data fragments loops count for NOFEC mode
		metrics_frame: 10, 		// time between metrics messages (in seconds)
		mcgroup_max_fcntdn:100000, // debug only (optional)
		debug: 0, 				// enable debug mode (optional)
		fsize_optimization: 4, // fsize optimizated by this value, 0 disable option (default)
		time_sync_tolerance: 1, // time tolerance will be used for time sync req processing if device is unknown for agent instance (seconds)
		fsize: 50, 				// fixed fsize value (optional)
		retry_ineligible_gateways: 1 // optional. if enabled (1) query parameter
RetryIneligibleGateways=0 will be added to multicast downlink request sent to LRC
}
```