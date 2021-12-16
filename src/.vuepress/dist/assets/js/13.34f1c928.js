(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{403:function(e,t,n){e.exports=n.p+"assets/img/image013.35d8dc88.png"},404:function(e,t,n){e.exports=n.p+"assets/img/image014.e7ee7a5c.jpg"},405:function(e,t,n){e.exports=n.p+"assets/img/image015.c770589d.png"},487:function(e,t,n){"use strict";n.r(t);var s=n(45),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"managing-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#managing-devices"}},[e._v("#")]),e._v(" Managing devices")]),e._v(" "),s("h2",{attrs:{id:"prerequisite-provisioning-devices-on-the-lorawan-network-with-thingpark-wireless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-provisioning-devices-on-the-lorawan-network-with-thingpark-wireless"}},[e._v("#")]),e._v(" Prerequisite: Provisioning devices on the LoRaWAN network with ThingPark Wireless")]),e._v(" "),s("p",[e._v("Before provisioning the device in ThingPark FUOTA server, the device\nmust be provisioned in the LoRaWAN network using the ThingPark Wireless\nplatform.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Provision the device in ThingPark Wireless. You can provision\ndevices one by one or by mass import. Refer to "),s("em",[e._v("ThingPark Wireless\nDevice Manager User Guide")]),e._v(" for full details.")])]),e._v(" "),s("li",[s("p",[e._v("This initial provisioning is setting up the Unicast identity of the\ndevice, and must use the following parameters:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("LoRaWAN® Class")]),e._v(": all classes are supported including Class A")]),e._v(" "),s("li",[s("strong",[e._v("Unicast keys (AppKey / AppEUI for OTAA and AppSKey / NwkSKey for\nABP)")]),e._v(": must match the ones provisioned in the device and must be\nrecorded for provisioning in the FUOTA and RMC server")]),e._v(" "),s("li",[s("strong",[e._v("Connectivity Plan")]),e._v(": allocate a Unicast connectivity plan according to\ndevice class")]),e._v(" "),s("li",[s("strong",[e._v("AS Routing profile")]),e._v(": point to FUOTA AS which is defined in\nApplication Server section of the Device Manager, with the following\nparameters\n"),s("ul",[s("li",[s("strong",[e._v("Type")]),e._v(": HTTP Application Server")]),e._v(" "),s("li",[s("strong",[e._v("Content-type")]),e._v(": JSON untyped")]),e._v(" "),s("li",[s("strong",[e._v("Source ports")]),e._v(": *")]),e._v(" "),s("li",[s("strong",[e._v("Destinations")]),e._v(": Contact Actility to get the domain name.")]),e._v(" "),s("li",[s("strong",[e._v("Routing strategy")]),e._v(": Sequential")])])])])])]),e._v(" "),s("h2",{attrs:{id:"provisioning-devices-in-thingpark-fuota"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-devices-in-thingpark-fuota"}},[e._v("#")]),e._v(" Provisioning devices in ThingPark FUOTA")]),e._v(" "),s("p",[e._v("The devices must be already provisioned in ThingPark Wireless as\noutlined in the previous section.")]),e._v(" "),s("h3",{attrs:{id:"provisioning-a-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-a-device"}},[e._v("#")]),e._v(" Provisioning a device")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Select "),s("em",[e._v("Devices > Create")]),e._v(" and enter below information:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("DevEUI")]),e._v(": device unique identifier")]),e._v(" "),s("li",[s("strong",[e._v("Tag")]),e._v(": freeform text to search for one or multiple devices")]),e._v(" "),s("li",[s("strong",[e._v("Name")]),e._v(": freeform text for device identification")]),e._v(" "),s("li",[s("strong",[e._v("Multicast Class Capable")]),e._v(": which multicast session type is supported\nby the device")]),e._v(" "),s("li",[s("strong",[e._v("LoRaWAN Version")]),e._v(": LoRaWAN protocol version")]),e._v(" "),s("li",[s("strong",[e._v("Device Reliable Multicast key")]),e._v(": value provisioned on device side to\nsecure reliable multicast sessions. Note that this key is only used\nat the Reliable Multicast application layer and is not known by\nThingPark Wireless. This is the Multicast "),s("strong",[e._v("GenAppKey")]),e._v(" for LoRaWAN\n1.0 devices or "),s("strong",[e._v("AppKey")]),e._v(" for LoRaWAN 1.1 devices")])])])]),e._v(" "),s("p",[s("img",{attrs:{src:n(403),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"provisioning-devices-using-mass-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-devices-using-mass-import"}},[e._v("#")]),e._v(" Provisioning devices using mass import")]),e._v(" "),s("p",[e._v("You can import devices using "),s("em",[e._v("Devices > Import")]),e._v(".")]),e._v(" "),s("p",[e._v("The device import algorithm proceeds as follows:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Checks if the device profile with matching producer ID, module ID\nand HW revision exists in the system. If no matching profiles are\nfound, the device import fails with error.")])]),e._v(" "),s("li",[s("p",[e._v("If the firmware revision field is empty, no file link will be\nattached to the device.")])]),e._v(" "),s("li",[s("p",[e._v("If the firmware revision field is not empty, the import procedure\nsearches for all files with a name matching one of the devices and a\nversion matching the firmware version of the device.")])]),e._v(" "),s("li",[s("p",[e._v("If several files are found, for example if several smart delta\npatches from different base versions to the same target version are\navailable, the first available will be linked to the device. If\nanother file is needed to be linked, it must be done manually after\nimport.")])])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Click "),s("em",[e._v("Devices > Import")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("em",[e._v("Sample file")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Create your import file based on the sample file. The file format is\nsimilar to the one exported by ThingPark Wireless but with the\nfollowing changes:")]),e._v(" "),s("ul",[s("li",[e._v("CSV (rfc4180) with no header row and comma-separated")]),e._v(" "),s("li",[e._v('Content of the fields marked as "n/a" is ignored')]),e._v(" "),s("li",[e._v('All fields the field marked "MANDATORY" should contain valid data\nfor given field otherwise import will finish with error')]),e._v(" "),s("li",[e._v('Data in the fields marked "OPTIONAL" could be not present')]),e._v(" "),s("li",[e._v("Data in columns A, C to J, L to V, Z is ignored")]),e._v(" "),s("li",[e._v("Column B: mandatory, DevEUI")]),e._v(" "),s("li",[e._v("Column K: optional, device name")]),e._v(" "),s("li",[e._v("Column W: mandatory, device supported LoRaWAN protocol version")]),e._v(" "),s("li",[e._v("Column X: optional, AppKey for LoRaWAN 1.1 devices")]),e._v(" "),s("li",[e._v("Column Y: optional, GenAppKey for LoRaWAN 1.0 devices")]),e._v(" "),s("li",[e._v("Column AA: optional, multicast session supported by device")]),e._v(" "),s("li",[e._v("Column AB: optional, device tag")]),e._v(" "),s("li",[e._v("Column AC: optional, device firmware version")]),e._v(" "),s("li",[e._v("Column AD: required, producer ID of the device")]),e._v(" "),s("li",[e._v("Column AE: required, module ID of the device")]),e._v(" "),s("li",[e._v("Column AF: required, HW revision of the device")])])])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),s("p",[e._v("Parameters in column AD to AF must be present. They\ntogether determine the device profile to apply. It is supposed that\nthese parameters are available during export from ThingPark Wireless\nsystem. The device profile with matching producer ID, module ID and HW\nrevision must exist prior to import, otherwise the import for the\ndevice will fail.")])]),e._v(" "),s("p",[e._v("Examples:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("0123456789ABCDEF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("Device\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("LORAWAN_1\\_0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("0123456789ABCDEF0123456789ABCDEF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("TEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v("."),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("Producer\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("Module "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v('\\\n\\"\\"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("DEADBEEFDEADBEEF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("Device "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("LORAWAN_1\\_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n0123456789ABCDEF0123456789ABCDEF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("TEST1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v("."),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("Producer "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("Module "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[e._v("Click the paper clip button, and select your import file.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("em",[e._v("Import")]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"provisioning-a-device-using-the-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-a-device-using-the-api"}},[e._v("#")]),e._v(" Provisioning a device using the API")]),e._v(" "),s("p",[e._v("Creation of a device can also be performed by API using /devices\nendpoint.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v('Prepare your FUOTA credentials. The user authentication is based on\n"basic auth" method.')])]),e._v(" "),s("li",[s("p",[e._v("Contact Actility to get the domain name of the URL: "),s("code",[e._v("https://<domainname>/FOTACore-API/")])])])]),e._v(" "),s("h2",{attrs:{id:"browsing-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browsing-devices"}},[e._v("#")]),e._v(" Browsing devices")]),e._v(" "),s("p",[e._v("The list of devices currently provisioned in the system can be obtained\nvia "),s("em",[e._v("Devices > List.")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("The table contains information about all devices in the system and\ntheir parameters.")])]),e._v(" "),s("li",[s("p",[e._v("The device list can be filtered by information in any column using\nselector 1 at the top of the screen.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(404),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v('By clicking the "+" button at the top of the frame, you will be\nbrought into Device Create screen.')])]),e._v(" "),s("li",[s("p",[e._v('"..." option at the end of the device information string will show\nup menu 2 which will allow to "View" complete information about\ndevice, "Edit" device information and "Archive" device. Archived\ndevice will be no more listed in the device information table.\nArchived devices can be retrieved via API. Contact Actility for more\ndetails.')])])]),e._v(" "),s("p",[s("img",{attrs:{src:n(405),alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);