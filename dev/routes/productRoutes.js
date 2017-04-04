var express = require('express');
var productRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');

/* ****************************************** GET /General Product Routes ****************************************** */
productRouter.route('/')
  .get(function(req, res) {
      res.render('./Products/Products', {
          title: 'INSTAR Produkte',
          breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li>',
        });
    });
	
productRouter.route('/Usermanuals')
  .get(function(req, res) {
      res.render('./Products/Usermanuals', {
          title: 'INSTAR Produkte Handbücher',
          breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/Usermanuals/">Handbücher</a></li>',
        });
    });

productRouter.route('/SMA_RP-SMA_Antenna_Connector')
.get(function(req, res) {
  res.render('./Products/SMA_RP-SMA_Antenna_Connector', {
      title: 'SMA oder RP-SMA Antennen Stecker',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/SMA_RP-SMA_Antenna_Connector/">SMA und RP-SMA Antennen</a></li>',
    });
});

/* ****************************************** GET Camera Lenses ****************************************** */
productRouter.route('/Lenses')
.get(function(req, res) {
  res.render('./Products/Lenses', {
      title: 'Kamera Objektive',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li>',
    });
});

/* ****************************************** GET S-Mount Lenses ****************************************** */
productRouter.route('/Lenses/S-Mount/IN-0180')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0180', {
      title: 'IN-0180 Weitwinkel',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0180/">IN-0180</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0220')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0220', {
      title: 'IN-0220 Weitwinkel',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0220/">IN-0220</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0290')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0290', {
      title: 'IN-0290 Weitwinkel',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0290/">IN-0290</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0360')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0360', {
      title: 'IN-0360 Weitwinkel',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0360/">IN-0360</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0430')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0430', {
      title: 'IN-0430 Standard',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0430/">IN-0430</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0600', {
      title: 'IN-0600 Standard',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0600/">IN-0600</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0800')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0800', {
      title: 'IN-0800 Tele',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0800/">IN-0800</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1200')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1200', {
      title: 'IN-1200 Tele',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-1200/">IN-1200</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1600', {
      title: 'IN-1600 Tele',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-1600/">IN-160</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/Lense_Comparison')
.get(function(req, res) {
  res.render('./Products/Lense_Comparison', {
      title: 'S-Mount Objektiv Vergleich',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/Lense_Comparison/">Objektive vergleichen</a></li>',
    });
});

/* ****************************************** GET /IN-LAN ****************************************** */

productRouter.route('/IN-LAN')
.get(function(req, res) {
  res.render('./Products/IN-LAN_500', {
      title: 'IN-LAN 500 Powerline Kommunikation',
      uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-LAN/">IN-LAN</a></li>',
    });
});

/* ****************************************** GET /IN-Lighting ****************************************** */

productRouter.route('/IR_Lighting')
.get(function(req, res) {
  res.render('./Products/IR-Lighting', {
      title: 'INSTAR Infrarot Scheinwerfer',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IR_Lighting/">IR Beleuchtung</a></li>',
    });
});

/* ****************************************** GET /IN-PoE ****************************************** */

productRouter.route('/Power_over_Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-PoE_1000', {
      title: 'IN-PoE 1000 Power over Ethernet',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Power_over_Ethernet/">Power over Ethernet</a></li>',
    });
});

/* ****************************************** GET /IN-Mikro ****************************************** */

productRouter.route('/IN-Mikro')
.get(function(req, res) {
  res.render('./Products/IN-Mikro', {
      title: 'IN-Mikro IP Kamera Mikrofone',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Mikro/">IN-Mikro</a></li>',
    });
});

/* ****************************************** GET /IN-Route ****************************************** */

productRouter.route('/IN-Route')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Introduction')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Introduction', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Introduction/">Introduction</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Charging')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Charging', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Charging/">Charging</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Login', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Login/">Login</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Wizard')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Wizard', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Wizard/">Wizard</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Schnellzugriff</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Router_Modes')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Router', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Schnellzugriff</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Router_Modes/">Router Modes</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Repeater_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Repeater', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Schnellzugriff</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Repeater_Mode/">Repeater Mode</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/3G_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_3G', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">Erste Schritte</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Schnellzugriff</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/3G_Mode/">3G Mode</a></li>',
    });
});

productRouter.route('/IN-Route/Overview')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Overview', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Überblick</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Status', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Überblick</a></li><li><a href="/Products/IN-Route/Overview/Status/">Status</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/WAN_Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_WAN', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Überblick</a></li><li><a href="/Products/IN-Route/Overview/WAN_Status/">WAN Status</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Mode', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Überblick</a></li><li><a href="/Products/IN-Route/Overview/Mode/">Mode</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/File_Explorer')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_File', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Überblick</a></li><li><a href="/Products/IN-Route/Overview/File_Explorer/">File Explorer</a></li>',
    });
});

productRouter.route('/IN-Route/Network')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li>',
    });
});

productRouter.route('/IN-Route/Network/LAN')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_LAN', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/LAN/">LAN</a></li>',
    });
});

productRouter.route('/IN-Route/Network/WiFi_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_WiFi', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/WiFi_Settings/">WiFi Settings</a></li>',
    });
});

productRouter.route('/IN-Route/Network/Repeater_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Repeater', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/Repeater_Settings/">Repeater Settings</a></li>',
    });
});

productRouter.route('/IN-Route/Network/3G_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_3G', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/3G_Settings/">3G Settings</a></li>',
    });
});

productRouter.route('/IN-Route/Network/Router_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Router', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/Router_Mode/">Router Modus</a></li>',
    });
});

productRouter.route('/IN-Route/Network/DHCP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DHCP', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/DHCP/">DHCP</a></li>',
    });
});

productRouter.route('/IN-Route/Network/DDNS')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DDNS', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/DDNS/">DDNS</a></li>',
    });
});

productRouter.route('/IN-Route/Network/FTP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_FTP', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Netzwerk</a></li><li><a href="/Products/IN-Route/Network/FTP/">FTP</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/Port_Forwarding')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Forwarding', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Port_Forwarding/">Portweiterleitung</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/Device_Filter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Filter', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Device_Filter/">Gerätefilter</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/DMZ_Host')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_DMZ', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/DMZ_Host/">DMZ Host</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/Webfilter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Webfilter', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Webfilter/">Webfilter</a></li>',
    });
});

productRouter.route('/IN-Route/System')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li>',
    });
});

productRouter.route('/IN-Route/System/Log')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Log', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Log/">Log</a></li>',
    });
});

productRouter.route('/IN-Route/System/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Login', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Login/">Login</a></li>',
    });
});

productRouter.route('/IN-Route/System/NTP_Setup')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_NTP', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/NTP_Setup/">NTP Setup</a></li>',
    });
});

productRouter.route('/IN-Route/System/Statistics')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Statistics', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Statistics/">Statistik</a></li>',
    });
});

productRouter.route('/IN-Route/System/Import')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Import', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Import/">Import</a></li>',
    });
});

productRouter.route('/IN-Route/System/Reboot')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Reboot', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Reboot/">Neustart</a></li>',
    });
});

productRouter.route('/IN-Route/System/Upgrade')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Upgrade', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Upgrade/">Upgrade</a></li>',
    });
});

productRouter.route('/IN-Route/Help')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Hilfe</a></li>',
    });
});

productRouter.route('/IN-Route/Help/Features')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_Features', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Hilfe</a></li>li><a href="/Products/IN-Route/Help/Features/">Features</a></li>',
    });
});

productRouter.route('/IN-Route/Help/About_Us')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_About', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Hilfe</a></li>li><a href="/Products/IN-Route/Help/About_Us/">Über Uns</a></li>',
    });
});

/* ****************************************** GET /IN-Motion ****************************************** */

productRouter.route('/IN-Motion')
.get(function(req, res) {
  res.render('./Products/IN-Motion', {
      title: 'IN-Motion',
      uplink: '/Products',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li>',
    });
});

productRouter.route('/IN-Motion/300')
.get(function(req, res) {
  res.render('./Products/IN-Motion_300', {
      title: 'IN-Motion 300',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/300/">300</a></li>',
    });
});

productRouter.route('/IN-Motion/500')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500', {
      title: 'IN-Motion 500',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Dual_Sensor')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Dual_Sensor', {
      title: 'IN-Motion 500 - Dualer Sensor',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Dual_Sensor/">Dualer Sensor</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Setup')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Setup', {
      title: 'IN-Motion 500 - Setup',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Setup/">Setup</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Wiring')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Wiring', {
      title: 'IN-Motion 500 - Verkabelung',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Wiring/">Verkabelung</a></li>',
    });
});

productRouter.route('/IN-Motion/500/User_Interface')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_User_Interface', {
      title: 'IN-Motion 500 - Benutzeroberfläche',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/User_Interface/">Benutzeroberfläche</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Considerations')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Considerations', {
      title: 'IN-Motion 500 - Berücksichtigungen',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Considerations/">Berücksichtigungen</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Recorder')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Recorder', {
      title: 'IN-Motion 500 - Recorder',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Recorder/">Recorder</a></li>',
    });
});

module.exports = productRouter;
