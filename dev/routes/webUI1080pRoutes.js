var express = require('express');
var webUI1080pRouter = express.Router();

/* GET WebUI page. */
webUI1080pRouter.route('/Overview')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR Web User Interface',
            breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li>',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface fullHD Series',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Overview/',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
          });
      });

/* ###################################### fullHD Series System ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Date & Time',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Date_Time/">Date & Time</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Email', {
            title: 'System Menu :: Email',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Email/">Email</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Info/">Info</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Language', {
            title: 'System Menu :: Language',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Language/">Language</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: User',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/User/">User</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Log', {
            title: 'System Menu :: Log',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Log/">Log</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Reboot/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reboot', {
            title: 'System Menu :: Reboot',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Reboot/">Reboot</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reset', {
            title: 'System Menu :: Reset',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Reset/">Reset</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Update', {
            title: 'System Menu :: Update',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/System/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Update/">Update</a></li>',
          });
      });

/* ###################################### fullHD Series Network ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network', {
            title: 'Network Menu',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menu :: IP Configuration',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/IP_Configuration/">IP Configuration</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menu :: WiFi',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/WiFi/">WiFi</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/Remote_Access/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Remote_Access', {
            title: 'Network Menu :: Remote Access',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/Remote_Access/">Remote Access</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_ONVIF', {
            title: 'Network Menu :: ONVIF',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/ONVIF/">ONVIF</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menu :: UPnP',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/UPnP/">UPnP</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_FTP', {
            title: 'Network Menu :: FTP',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/FTP/">FTP</a></li>',
          });
      });

/* ###################################### fullHD Series Features ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features', {
            title: 'Features Menu',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Status_LED', {
            title: 'Features Menu :: Status LED',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Status_LED/">Status LED</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/IR_LEDs/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_IR_LEDs', {
            title: 'Features Menu :: IR LEDs',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/IR_LEDs/">IR LEDs</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ', {
            title: 'Features Menu :: PTZ',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ/">PTZ</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_SD_Card', {
            title: 'Features Menu :: SD Card',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/SD_Card/">SD Card</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ_Tour', {
            title: 'Features Menu :: PTZ Tour',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ_Tour/">PTZ Tour</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/Manual_Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_ManualRec', {
            title: 'Features Menu :: Manual Recording',
			      uplink: '/Web_User_Interface/1080p_Series/Features/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: Manual Recording',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Manual_Recording">Manuelle Aufnahme</a></li>',
          });
      });

/* ###################################### fullHD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
			      uplink: '/Web_User_Interface/1080p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
			      uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Audio">Audio</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
			      uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video">Video</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Image',
			      uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Image',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image">Image</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Privacy_Mask', {
            title: 'Multimedia Menu :: Privacy Mask',
			      uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Privacy Mask',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask">Privacy Mask</a></li>',
          });
      });

/* ###################################### fullHD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Areas',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Areas',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Areas">Areas</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Actions',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Actions',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Actions">Actions</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Schedule',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Schedule',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Schedule">Schedule</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Alarm_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Alarm_Server', {
            title: 'Alarm Menu :: Alarm Server',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Alarm Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server">Alarm Server</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menu :: Email',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Email',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Email">Email</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Push_Service', {
            title: 'Alarm Menu :: Push Service',
			      uplink: '/Web_User_Interface/1080p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Push Service',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Push_Service">Push Service</a></li>',
          });
      });

/* ###################################### fullHD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menu',
			      uplink: '/Web_User_Interface/1080p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Recordig',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menu :: Video',
			      uplink: '/Web_User_Interface/1080p_Series/Recording/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Recordig :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/Video">Video</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menu :: Photoseries',
			      uplink: '/Web_User_Interface/1080p_Series/Recording/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Recordig :: Photoseries',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/Photoseries">Photoseries</a></li>',
          });
      });

/* ###################################### fullHD Series LiveVideo ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Live_Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Live_Video', {
            title: 'Live Video',
			      uplink: '/Web_User_Interface/1080p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Live Video',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Live_Video/">Live Video</a></li>',
          });
      });

/* ###################################### fullHD Series Cloud ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Cloud/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Cloud', {
            title: 'INSTAR Cloud',
			      uplink: '/Web_User_Interface/1080p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Cloud',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Cloud/">Cloud</a></li>',
          });
      });

module.exports = webUI1080pRouter;
