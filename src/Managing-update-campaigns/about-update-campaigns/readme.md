# About update campaigns

FUOTA operations are organized by update campaigns. Campaigns are
operating over a set of Device Sets and Regions, and 3 types of
operations are supported:

-   Configure Multicast Groups: Multicast group is created dynamically.
    Multicast Class B or Class C session is configured on the device to
    allow multicast downlinks to be sent to the dynamically configured
    multicast group. No file transfer is involved for this type of
    campaign

-   Binary transfer: A generic binary file is transferred to devices
    over the air over a Multicast group and within a temporary Multicast
    session and Fragmentation session. Device behavior once the file is
    received is vendor-specific.

-   FW update over the air: A firmware file is transferred to devices
    over the air over a Multicast group and within a temporary Multicast
    session and Fragmentation session. The campaign completes once
    devices have reported their updated firmware version.