(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{410:function(e,t,i){e.exports=i.p+"assets/img/image028.69421981.png"},411:function(e,t,i){e.exports=i.p+"assets/img/image029.3f5f05cf.png"},412:function(e,t,i){e.exports=i.p+"assets/img/image030.b20aa75b.png"},413:function(e,t,i){e.exports=i.p+"assets/img/image031.efa06c8f.png"},414:function(e,t,i){e.exports=i.p+"assets/img/image032.dec8f643.jpg"},415:function(e,t,i){e.exports=i.p+"assets/img/image033.4fe3e516.png"},416:function(e,t,i){e.exports=i.p+"assets/img/image034.71b69674.png"},417:function(e,t,i){e.exports=i.p+"assets/img/image035.a1d2616a.png"},418:function(e,t,i){e.exports=i.p+"assets/img/image036.636cea10.jpg"},419:function(e,t,i){e.exports=i.p+"assets/img/image037.c8b3201d.png"},487:function(e,t,i){"use strict";i.r(t);var r=i(45),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"managing-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#managing-files"}},[e._v("#")]),e._v(" Managing files")]),e._v(" "),r("h2",{attrs:{id:"provisioning-a-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-a-file"}},[e._v("#")]),e._v(" Provisioning a file")]),e._v(" "),r("p",[e._v("You can provision three types of files: firmware, delta firmware and\nbinary.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Select "),r("em",[e._v("Files > Create")]),e._v(" to upload a new file, and select the file\ntype in the first screen.")])]),e._v(" "),r("li",[r("p",[e._v("For a binary file:")]),e._v(" "),r("p",[e._v("a.  Enter the following information in the second screen:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Name")]),e._v(": freeform text for binary file identification")]),e._v(" "),r("li",[r("strong",[e._v("Description")]),e._v(": freeform paragraph for binary file identification")]),e._v(" "),r("li",[r("strong",[e._v("File")]),e._v(": open the file browser to select the file to upload on the server")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:i(410),alt:""}})]),e._v(" "),r("p",[e._v("​\t\tb.  On the next screen verify information you added and select DONE if everything is fine.")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[e._v("For a firmware file, enter the following information in the second\nscreen:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Name")]),e._v(": freeform text for firmware file identification")]),e._v(" "),r("li",[r("strong",[e._v("Description")]),e._v(": freeform paragraph for firmware file identification")]),e._v(" "),r("li",[r("strong",[e._v("Firmware version")]),e._v(": use Actility format X.Y.Z.P (X: major version, Y:\nminor version, Z: maintenance version, P: patch version) so FUOTA\nsupports notification for downgrade and upgrades, or a freeform\n32-bit format but FUOTA can only notify about firmware differences.")]),e._v(" "),r("li",[r("strong",[e._v("Time Tolerance (in seconds)")]),e._v(": possible device clock drift which\nshould be tolerated by FUOTA when starting multicast session")]),e._v(" "),r("li",[r("strong",[e._v("Default UL period (in seconds)")]),e._v(": UL period affects a lot of timers\nwhich control unicast commands stages of the campaign. FUOTA use\nprovided value to automatically calculate these timers")]),e._v(" "),r("li",[r("strong",[e._v("FUOTA Library")]),e._v(': "Smart Delta" or "Other 3rd Party". The type of\ndevice library used to process reliable multicast related commands,\nfragmentation session and firmware upgrade')]),e._v(" "),r("li",[r("strong",[e._v("File")]),e._v(": open the file browser to select the file to upload on the\nserver")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:i(411),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[e._v("For a delta firmware file, enter the following information in the\nsecond screen:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Name")]),e._v(": freeform text for firmware file identification")]),e._v(" "),r("li",[r("strong",[e._v("Description")]),e._v(": freeform paragraph for firmware file identification")]),e._v(" "),r("li",[r("strong",[e._v("Firmware Base Version")]),e._v(": current version of the software running on\nthe device to which this delta patch could be applied. Use Actility\nformat X.Y.Z.P so FUOTA supports notification for downgrade and\nupgrades, or a freeform 32-bit format but FUOTA can only notify\nabout firmware differences.")]),e._v(" "),r("li",[r("strong",[e._v("Firmware Version")]),e._v(": firmware version to which device will be upgraded\nby this delta patch")]),e._v(" "),r("li",[r("strong",[e._v("Time Tolerance")]),e._v(": possible device clock drift which should be\ntolerated by FUOTA when starting multicast session. Time tolerance\nspecified in File configuration has precedence over Time tolerance\nspecified in Device profile configuration.")]),e._v(" "),r("li",[r("strong",[e._v("Default UL period")]),e._v(": UL period affects a lot of timers which control\nunicast commands stages of the campaign. FUOTA use provided value to\nautomatically calculate these timers. Default UL period specified in\nFile configuration has precedence over Default UL period specified\nin Device profile configuration.")]),e._v(" "),r("li",[r("strong",[e._v("FUOTA Library")]),e._v(": type of device library used to process reliable\nmulticast related commands, fragmentation session and firmware\nupgrade")]),e._v(" "),r("li",[r("strong",[e._v("File")]),e._v(": open the file browser to select the file to upload on the\nserver")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:i(412),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("On the next screen, select the device profile from the list of\navailable device profiles. Device profile is used to\nmatch which firmware files could be loaded into given device and\nparameters of this firmware files. Device is matched against profile\nusing (Producer ID, Module ID, HW Revision) triplet.")])]),e._v(" "),r("p",[r("img",{attrs:{src:i(413),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[r("em",[e._v("(Step")]),e._v(" "),r("em",[e._v("only")]),e._v(" "),r("em",[e._v("needed")]),e._v(" "),r("em",[e._v("when")]),e._v(" "),r("em",[e._v("a full Firmware")]),e._v(" "),r("em",[e._v("file is being")]),e._v(" "),r("em",[e._v("created)")]),e._v(' On the next screen, select the Smart Delta Key associated\nwith the firmware file. When Smart Delta files will be generated\nusing this firmware file as "Firmware Base Version", this Smart Delta Key will be used to sign the delta file\ncreated by the FUOTA Server. A matching public key must be contained\non the device (embedded in the Smart Delta library). Smart Delta key\nconfiguration can be omitted if given device firmware does not\ncontain Smart Delta library, if the Smart Delta Key is already\nconfigured in the Device Profile selected for the device, or if\nSmart Delta feature should not be used.')])]),e._v(" "),r("p",[r("img",{attrs:{src:i(414),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[r("p",[e._v("On the last screen verify entered parameters and press DONE if all\ninformation is correct.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),r("p",[e._v("If the current firmware binary file is not available, a\nfile object can be created without the actual file but only with its\nmetadata. This allows FUOTA server to check the current running\nsoftware and hardware versions are correct during the update.")])])])]),e._v(" "),r("h2",{attrs:{id:"provisioning-a-file-using-the-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-a-file-using-the-api"}},[e._v("#")]),e._v(" Provisioning a file using the API")]),e._v(" "),r("p",[e._v("Files creation can also be performed by API using /file endpoint.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v('Prepare your FUOTA credentials. The user authentication is based on\n"basic auth" method.')])]),e._v(" "),r("li",[r("p",[e._v("Contact Actility to get the domain name of the URL: "),r("code",[e._v("https://*\\<domainname\\>*/FOTACore-API/")])])])]),e._v(" "),r("h2",{attrs:{id:"generating-delta-update-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generating-delta-update-file"}},[e._v("#")]),e._v(" Generating delta update file")]),e._v(" "),r("p",[e._v("You can create a delta patch based on two firmware files already\nuploaded in ThingPark FUOTA that are:")]),e._v(" "),r("ul",[r("li",[e._v("The firmware that is currently running on the device")]),e._v(" "),r("li",[e._v("The Target firmware to be installed on the device.")])]),e._v(" "),r("p",[e._v("This operation will generate a delta patch, which is usually 6-8 times\nsmaller in size than a full firmware file.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Select "),r("em",[e._v("Files > Generate Delta File")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Enter below information on the first screen:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Name")]),e._v(": free form text for delta patch identificatio,")]),e._v(" "),r("li",[r("strong",[e._v("Description")]),e._v(": any additional information relevant to help file\nadministration")]),e._v(" "),r("li",[r("strong",[e._v("Compression")]),e._v(": level of compression from 4 to 31, higher number means\nbetter compression. The safest level to use is 11. This level\naffects amount of free RAM required on device to uncompress patch.\nThis amount could be calculated as: RAM = 2^compression^ bytes.")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:i(415),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("In the second screen, select the firmware which is currently running\non the device to be upgraded.")])]),e._v(" "),r("p",[r("img",{attrs:{src:i(416),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("On the third screen, select the target firmware to which device will\nbe upgraded.")])]),e._v(" "),r("p",[r("img",{attrs:{src:i(417),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("On the last screen check that all entered parameters are correct and\npress DONE to complete delta patch creation.")])]),e._v(" "),r("h2",{attrs:{id:"browsing-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#browsing-files"}},[e._v("#")]),e._v(" Browsing files")]),e._v(" "),r("p",[e._v("The list of files currently provisioned in the system can be obtained\nvia "),r("em",[e._v("Files > List")]),e._v(".")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("The table contains information about all files in the system and\ntheir parameters.")])]),e._v(" "),r("li",[r("p",[e._v("The files list could be filtered by information in any column using\nselector 1 at the top of the screen.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(418),alt:""}})])]),e._v(" "),r("li",[r("p",[e._v('By pressing "+" option at the top you will be brought into Files\nCreate screen.')])]),e._v(" "),r("li",[r("p",[e._v('"..." option at the end of the files information row will show up\nmenu 2 which will allow to "View" complete information about file\n(8), "Edit" file information and "Archive" file. Archived file will\nbe no more listed in the '),r("em",[e._v("Files")]),e._v(" information table. Archived files\ncan be retrieved via API. Contact Actility for more details.")])])]),e._v(" "),r("p",[r("img",{attrs:{src:i(419),alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);