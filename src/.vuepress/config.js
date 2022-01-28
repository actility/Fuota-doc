const { description } = require('../../package')
var fs = require('fs');
const { fileURLToPath } = require('url');
var version = fs.readFileSync('version.txt', 'utf8').trim();



module.exports = {
  theme: getPackage().theme,
  description: description,
  base: getBase(),
  title: getTitle,
  globalUIComponents: ['Emojicom'],
  plugins: ['versioning'],

  themeConfig: {
    logo: '/img/DesktopBanner.png',
    emojicomKey: '24lr9TXIVpwrZ8KvVCll',
    repo: 'https://github.com/actility/Fuota-doc',
    repoLabel: 'Contribute!',
    docsRepo: 'https://github.com/actility/Fuota-doc',
    docsDir: 'src',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    informationDeep: deepData(),
    smoothScroll: true,
    nav: [
      {
        text: 'Documentation portal', link: 'https://www.actility.com/thingpark-documentation-portal/', target: '_blank'
      },
      {
        text: 'Versions',
        ariaLabel: 'Language Menu', // facultatif
        items: [
          { text: 'latest', link: '/' },
          { text: '1.4', link: '/' },
        ]
      },
    ],
    sidebar: {
      '/': [
       {
          title: 'Overview',
          path:'/Overview/', 
          collapsable: true,
          sidebarDepth: 1,
          children: [
            {
              title:'ThingPark FUOTA solution architecture description',
              path: '/Overview/Solution-architecture-description/',
            }
          ],
        },
        {
          title: 'Managing objects',
          path: '/Managing-FUOTA-objects/',
          collapsable: true,
          sidebarDepth: 6,
          children: [
            {
              title: 'Managing subscriber',
              path: '/Managing-FUOTA-objects/Managing-subscriber/',
            },
            {
              title: 'Managing Smart Delta keys',
              path: '/Managing-FUOTA-objects/Managing-smart-delta-keys/',
            },
            {
              title: 'Managing device profiles',
              path: '/Managing-FUOTA-objects/Managing-device-profiles/',
            },
            {
              title: 'Managing devices',
              path: '/Managing-FUOTA-objects/Managing-devices/',
            },
            {
              title: 'Managing device sets',
              path: '/Managing-FUOTA-objects/Managing-device-sets/',
            },
            {
              title: 'Managing Reliable Multicast groups',
              path: '/Managing-FUOTA-objects/Managing-reliable-multicast-groups/',
            },
            {
              title: 'Managing Reliable Multicast regions',
              path: '/Managing-FUOTA-objects/Managing-reliable-multicast-regions/',
            },
            {
              title: 'Managing files',
              path: '/Managing-FUOTA-objects/Managing-files/',
            },
          ],
        },
        {
          title: 'Managing update campaigns',
          path: '/Managing-update-campaigns/',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            {
              title: 'Creating a campaign',
              path: '/Managing-update-campaigns/creating-campaign/',
            },
            {
              title: 'Running update campaigns',
              path: '/Managing-update-campaigns/running-update-campaigns/',
            },
            {
              title: 'Monitoring update campaigns',
              path: '/Managing-update-campaigns/monitoring-update-campaigns/',
            },
          ],
        },
        {
          title: 'Product Description Guide',
          path: '/FUOTA-product-description-guide/',
          collapsable: true,
          sidebarDepth: 8,
          children: [
            {
              title: 'Server protocol',
              path: '/Functionalities/Server-protocol/',
            },
            {
              title: 'Server objects',
              path: '/Functionalities/Server-objects/',
            },
            {
              title: 'Update campaigns',
              path: '/Functionalities/Update-campaigns/',
              sidebarDepth: 3,
              children: [
                {
                  title: 'Multicast setup campaign',
                  path: '/Functionalities/Update-campaigns/Multicast-setup-campaign/',
                },
                {
                  title: 'Binary transfer campaign',
                  path: '/Functionalities/Update-campaigns/Binary-transfer-campaign/',
                },
                {
                  title: 'Firmware update campaign',
                  path: '/Functionalities/Update-campaigns/Firmware-update-campaign/',
                },
              ],
            },
            {
              title: 'Server architecture',
              path: '/Server-architecture/',
              collapsable: true,
              sidebarDepth: 4,
              children: [
                {
                  title: 'RMC Core',
                  path: '/Server-architecture/RMC-core/',
                },
                {
                  title: 'RMC Agent',
                  path: '/Server-architecture/RMC-agent/',
                },
                {
                  title: 'Database',
                  path: '/Server-architecture/Database/',
                },
                {
                  title: 'High availability and scalability',
                  path: '/Server-architecture/High-availability-scalability/',
                },
              ],
            },
            {
              title: 'Server configuration and logging',
              path: '/Server-configuration-logging/',
              collapsable: true,
              sidebarDepth: 5,
              children: [
                {
                  title: 'RMC Core configuration',
                  path: '/Server-configuration-logging/RMC-core-configuration/',
                },
                {
                  title: 'RMC Agent configuration',
                  path: '/Server-configuration-logging/RMC-agent-configuration/',
                },
                {
                  title: 'Server monitoring API',
                  path: '/Server-configuration-logging/Server-monitoring-API/',
                },
                {
                  title: 'Server statistics',
                  path: '/Server-configuration-logging/Server-statistics/',
                },
                {
                  title: 'Server logs inspection',
                  path: '/Server-configuration-logging/Server-logs-inspection/',
                },
              ],
            },
            {
              title: 'Server REST API',
              path: '/Server-rest-API/',
            },
            {
              title: 'Server footprint and performance',
              path: '/Server-footprint-performance/',
            }
          ],
        },
        {
          title: 'Device Manufacturer User Guide',
          path: '/Device-manufacturer-user-guide/',
          collapsable: true,
        },
      ],
    },
  },
}

function getPackage() {
  var options = {}
  const resultPackages = require('minimist')(process.argv.slice(2))._[2]
  if (resultPackages) {
      options['theme'] = resultPackages
      options['banner'] = '/img/DesktopBanner-' + resultPackages + '.png'
      return options
  } else {
      options['theme'] = 'actility'
      options['banner'] = '/img/DesktopBanner-actility.png'
      return options
  }
}

function getTitle() {
  return 'ThingPark FUOTA (' + version + ')';
}

function deepData(){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear()
  var hh = String(today.getHours()).padStart(2, '0');
  var min = String(today.getMinutes()).padStart(2, '0');
  var ss = String(today.getSeconds()).padStart(2, '0');
  let objectJson = {
      currentDate : {
          Year: yyyy,
          Month : mm,
          Day : dd,
          Hours: hh,
          Minutes : min,
          Secondes:ss
      },
      currentPackage : JSON.parse(fs.readFileSync('./package.json', 'utf8').trim())
  }
  return objectJson
}

function getBase() {
  if (version.endsWith("-SNAPSHOT")) {
    return "/thingpark-fuota/";
  }
  var rx = /([0-9]*\.[0-9]*).*/g;
  var result = rx.exec(version);
  return "/thingpark-fuota/" + result[1] + "/";
}
