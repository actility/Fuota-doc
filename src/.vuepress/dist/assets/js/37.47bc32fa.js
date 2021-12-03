(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{500:function(e,n,t){"use strict";t.r(n);var a=t(45),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rmc-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rmc-agent"}},[e._v("#")]),e._v(" RMC Agent")]),e._v(" "),t("h2",{attrs:{id:"rmc-agent-functionality-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rmc-agent-functionality-description"}},[e._v("#")]),e._v(" RMC Agent functionality description")]),e._v(" "),t("p",[e._v("RMC Agent is a peripheral FUOTA component which directly interfaces with\nLRC to send commands and data necessary to configure multicast groups,\ndeliver binary files or firmware upgrades to devices.")]),e._v(" "),t("p",[e._v("RMC Agent interacts with RMC Core with messages sent and received over\nKafka topics. Details about this topics and messages used between RMC\nCore and Agent are provided in "),t("RouterLink",{attrs:{to:"/FUOTA-server-architecture/RMC-core/#rmc-core-to-agent-api"}},[e._v("RMC Core to Agent API")]),e._v(".")],1),e._v(" "),t("p",[e._v("RMC Agent provides following functionality.")]),e._v(" "),t("ul",[t("li",[e._v("Receives campaign management commands from RMC Core and performs all\nrequired campaign preparation actions.")]),e._v(" "),t("li",[e._v("Implements support of Multicast group management package,\nFragmentation session management package, Device firmware management\npackage, and Application layer clock synchronization package.")]),e._v(" "),t("li",[e._v("Sends all required unicast commands via the LRC-AS tunnel interface\nto configure a Multicast Group, open class B or class C session,\nconfigure fragmentation session, and process responses.")]),e._v(" "),t("li",[e._v("Fragments and encodes binary or firmware file received from RMC Core\nand sends it via the LRC-AS tunnel interface as multicast or unicast\ndata fragments to the devices.")]),e._v(" "),t("li",[e._v("Reports results of each command execution to RMC Core via progress\nmessages. States constructed in RMC Core from this progress messages\nare used to reconstruct it and continue campaign on a new RMC Agent\nif the agent currently running campaign fails.")]),e._v(" "),t("li",[e._v("Collects metrics about processed campaigns and sends them to RMC\nCore to present later to monitoring application.")])]),e._v(" "),t("p",[e._v("RMC Agent is implemented as a native C++ application running in docker\ncontainer.")]),e._v(" "),t("h2",{attrs:{id:"rmc-agent-to-lrc-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rmc-agent-to-lrc-api"}},[e._v("#")]),e._v(" RMC Agent to LRC API")]),e._v(" "),t("p",[e._v("RMC Agent uses the LRC-AS Tunnel Interface v5.2 as an API between Agent\nand LRC. RMC Agent could be configured to use either HTTP or HTTPS as\ntransport protocol. The Transport protocol type which will be used by\nRMC Agent derives from LRC url that is configured for a given\nSubscriber.")]),e._v(" "),t("p",[e._v("Agent currently does not support token authentication with LRC via the\nLRC-AS tunnel interface. It will be supported in future releases.")]),e._v(" "),t("p",[e._v("RMC Agent supports following types of uplink AS-LRC tunnel messages.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Uplink frame report messages directed to ports 200, 201 and 203\n(Multicast group management package, Fragmentation session\nmanagement package and Device firmware management package\ncorrespondently), which are used to receive answers from device for\nFUOTA commands. Agent decrypts (if AS key is not configured in LRC)\nLoRaWAN® device payload and processes command response from them.")])]),e._v(" "),t("li",[t("p",[e._v("Downlink frame sent messages which are used to provide flow control\nwith all device classes for unicast downlink messages. A new\ndownlink unicast message will be sent by RMC Agent only after a\ndownlink frame sent message is received from LRC or timeout expired.")])]),e._v(" "),t("li",[t("p",[e._v("Multicast summary report messages which are used to provide flow\ncontrol of downlink multicast messages. New downlink multicast\nmessages will be sent by RMC Agent only after multicast summary\nreport message is received from LRC or timeout expired.")])])]),e._v(" "),t("p",[e._v("RMC Agent prepares and sends downlink messages to LRC. Payload of\nunicast downlink messages is always sent in clear by RMC Agent and is\nencrypted by LRC. Payload of multicast downlink messages could be\nencrypted by RMC Agent or sent in clear and encrypted by LRC depending\non RMC Agent configuration. Currently RMC Agent does not support OTAA\ndevices with SSM/HSM. Their support will be implemented in future\nreleases.")]),e._v(" "),t("h2",{attrs:{id:"rmc-agent-stateless-operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rmc-agent-stateless-operation"}},[e._v("#")]),e._v(" RMC Agent stateless operation")]),e._v(" "),t("p",[e._v("It will be supported in future releases.")])])}),[],!1,null,null,null);n.default=s.exports}}]);