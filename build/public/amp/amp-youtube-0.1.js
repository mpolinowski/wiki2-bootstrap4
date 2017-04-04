(window.AMP = window.AMP || []).push((function(AMP) {var process={env:{NODE_ENV:"production"}};var g,p=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}(this);function r(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(p.Object.defineProperties){var e=p.Object.getOwnPropertyDescriptor(b,d);e&&p.Object.defineProperty(a,d,e)}else a[d]=b[d]}var t=null,u="";
function v(){if(window.context&&window.context.mode)return window.context.mode;var a=!!("localhost"==location.hostname||location.ancestorOrigins&&location.ancestorOrigins[0]&&0==location.ancestorOrigins[0].indexOf("http://localhost:"))&&!!document.querySelector('script[src*="/dist/"],script[src*="/base/"]');var b=location.originalHash||location.hash,c=Object.create(null);if(b){if(0==b.indexOf("?")||0==b.indexOf("#"))b=b.substr(1);for(var b=b.split("&"),d=0;d<b.length;d++){var e=b[d],f=e.indexOf("="),
h;-1!=f?(h=decodeURIComponent(e.substring(0,f)).trim(),e=decodeURIComponent(e.substring(f+1)).trim()):(h=decodeURIComponent(e).trim(),e="");h&&(c[h]=e)}}var k=c;u||(c=window,u=a?"1468956052606":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"1468956052606");return{localDev:a,development:!("1"!=k.development&&!window.AMP_DEV_MODE),filter:k.filter,minified:"production"==process.env.NODE_ENV,test:!(!window.AMP_TEST&&!window.__karma__),log:k.log,version:u}};var w=(new Date).getTime();function x(a,b,c){this.win=a;this.l=b;this.b=this.win.console&&this.win.console.log&&"0"!=(t?t:t=v()).log?this.l(t?t:t=v()):0;this.c=c||""}function y(a,b,c,d){if(0!=a.b){var e=a.win.console.log;"ERROR"==c?e=a.win.console.error||e:"INFO"==c?e=a.win.console.info||e:"WARN"==c&&(e=a.win.console.warn||e);d.unshift((new Date).getTime()-w,"["+b+"]");e.apply(a.win.console,d)}}g=x.prototype;g.isEnabled=function(){return 0!=this.b};
g.fine=function(a,b){4<=this.b&&y(this,a,"FINE",Array.prototype.slice.call(arguments,1))};g.info=function(a,b){3<=this.b&&y(this,a,"INFO",Array.prototype.slice.call(arguments,1))};g.warn=function(a,b){2<=this.b&&y(this,a,"WARN",Array.prototype.slice.call(arguments,1))};g.error=function(a,b){if(1<=this.b)y(this,a,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=z.apply(null,Array.prototype.slice.call(arguments,1));A(this,c);this.win.setTimeout(function(){throw c;})}};
g.createError=function(a){var b=z.apply(null,arguments);A(this,b);return b};g.assert=function(a,b,c){var d;if(!a){var e=(b||"Assertion failed").split("%s"),f=e.shift(),h=f,k=[];""!=f&&k.push(f);for(f=2;f<arguments.length;f++){var l=arguments[f];l&&l.tagName&&(d=l);var q=e.shift();k.push(l);var n=q.trim();""!=n&&k.push(n);var n=h,m;m=l;m=m instanceof Element?m.tagName.toLowerCase()+(m.id?"#"+m.id:""):m;h=n+(m+q)}f=Error(h);f.fromAssert=!0;f.associatedElement=d;f.messageArray=k;A(this,f);throw f;}return a};
g.assertEnumValue=function(a,b,c){for(var d in a)if(a[d]==b)return a[d];this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function A(a,b){a.c&&(b.message?-1==b.message.indexOf(a.c)&&(b.message+=a.c):b.message=a.c)}function z(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=e:(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}var B=new x(window,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:0},"\u200b\u200b\u200b");
new x(window,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0});function C(a){return a.replace(/-([a-z])/g,function(a,c){return c.toUpperCase()})};window.document.createElement("a");Object.create(null);function D(a,b){var c;if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),f=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=d[1]?"#"+d[1]:""}function E(a,b){var c=Object.keys(b).reduce(function(a,c){return a+("&"+encodeURIComponent(c)+"="+encodeURIComponent(b[c]))},"");return D(a,c.substring(1))};function F(a){var b,c=b||function(a){return a};a=a.attributes;for(var d=Object.create(null),e=0;e<a.length;e++){var f=a[e],h=f.name.match(/^data-param-(.+)/);if(h){var k=C(h[1]);d[c(k)]=f.value}}return d};function G(a){this.win=a;this.s=Promise.resolve();this.w=0;this.f={};this.u=this.now()}g=G.prototype;g.now=function(){return Date.now()};g.timeSinceStart=function(){return this.now()-this.u};g.delay=function(a,b){var c=this;if(!b){var d="p"+this.w++;this.s.then(function(){c.f[d]?delete c.f[d]:a()});return d}return this.win.setTimeout(a,b)};g.cancel=function(a){"string"==typeof a?this.f[a]=!0:this.win.clearTimeout(a)};
g.promise=function(a,b){var c=this,d=null;return(new Promise(function(e,f){d=c.delay(function(){d=-1;e(b)},a);-1==d&&f(Error("Failed to schedule timer."))})).catch(function(a){-1!=d&&c.cancel(d);throw a;})};g.timeoutPromise=function(a,b,c){var d=this,e=null,f=(new Promise(function(b,f){e=d.delay(function(){e=-1;f(B.createError(c||"timeout"))},a);-1==e&&f(Error("Failed to schedule timer."))})).catch(function(a){-1!=e&&d.cancel(e);throw a;});return b?Promise.race([f,b]):f};
var H=function(a){var b=a.services;b||(b=a.services={});var c=b.timer;c||(c=b.timer={obj:null,promise:null,resolve:null});c.obj||(c.obj=G?new G(a):(void 0)(a),c.resolve&&c.resolve(c.obj));return c.obj}(window);function I(a,b,c){function d(a){c(a);e()}var e;e=function(){a&&a.removeEventListener(b,d,!1);c=d=a=null};a.addEventListener(b,d,!1);return e}function J(a){var b,c;if(a.complete||"complete"==a.readyState)return Promise.resolve(a);var d=new Promise(function(e,d){b="AUDIO"===a.tagName||"VIDEO"===a.tagName?I(a,"loadstart",e):I(a,"load",e);c=I(a,"error",d)}),d=d.then(K,L);return M(d,b,c)}function K(a){return a.target||a.testTarget}
function L(a){throw B.createError("Failed HTTP request for %s.",a.target);}function M(a,b,c){var d=void 0,e;e=void 0===d?a:H.timeoutPromise(d||0,a);b&&e.then(b,b);c&&e.then(c,c);return e};var N=Object.create(null),O="Webkit webkit Moz moz ms O o".split(" ");function P(a,b){for(var c in b){var d=a,e=b[c],f;f=d.style;var h=c,k=N[h];if(!k){k=h;if(void 0===f[h]){var l;l=h;l=l.charAt(0).toUpperCase()+l.slice(1);a:{for(var q=0;q<O.length;q++){var n=O[q]+l;if(void 0!==f[n]){l=n;break a}}l=""}void 0!==f[l]&&(k=l)}N[h]=k}(f=k)&&(d.style[f]=e)}};function Q(a){AMP.BaseElement.apply(this,arguments)}r(Q,AMP.BaseElement);g=Q.prototype;g.preconnectCallback=function(a){this.preconnect.url("https://www.youtube.com",a);this.preconnect.url("https://s.ytimg.com",a);this.preconnect.url("https://i.ytimg.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};g.renderOutsideViewport=function(){return!1};
g.buildCallback=function(){var a=this.element.getAttribute("width"),b=this.element.getAttribute("height");this.j=parseFloat(a);this.h=parseFloat(b);this.i=0;this.g=B.assert(this.element.getAttribute("data-videoid")||this.element.getAttribute("video-id"),"The data-videoid attribute is required for <amp-youtube> %s",this.element);this.getPlaceholder()||R(this)};
g.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe"),c="https://www.youtube.com/embed/"+encodeURIComponent(this.g)+"?enablejsapi=1",d=F(this.element);"autoplay"in d&&(delete d.autoplay,B.warn("Autoplay is currently not support with amp-youtube."));c=E(c,d);b.setAttribute("frameborder","0");b.setAttribute("allowfullscreen","true");b.src=c;this.applyFillContent(b);b.width=this.j;b.height=this.h;this.element.appendChild(b);this.a=b;this.m=new Promise(function(b){a.o=
b});this.getWin().addEventListener("message",function(b){a:{if("https://www.youtube.com"==b.origin&&b.source==a.a.contentWindow){var c;if(b.data&&0==b.data.indexOf("{")){try{c=JSON.parse(b.data)}catch(d){b=void 0;break a}"onReady"==c.event?a.o(a.a):"infoDelivery"==c.event&&c.info&&void 0!==c.info.playerState&&(a.i=c.info.playerState)}}b=void 0}return b});return J(b).then(function(){return H.promise(300)}).then(function(){a.a.contentWindow.postMessage(JSON.stringify({event:"listening"}),"*")}).then(function(){return a.m})};
g.pauseCallback=function(){this.a&&this.a.contentWindow&&1==this.i&&this.a.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:""}),"*")};
function R(a){var b=a.element.ownerDocument.createElement("img"),c=a.g;P(b,{"object-fit":"cover",visibility:"hidden"});b.src="https://i.ytimg.com/vi/"+encodeURIComponent(a.g)+"/sddefault.jpg#404_is_fine";b.setAttribute("placeholder","");b.width=a.j;b.height=a.h;b.setAttribute("referrerpolicy","origin");a.element.appendChild(b);a.applyFillContent(b);J(b).then(function(){if(120==b.naturalWidth&&90==b.naturalHeight)throw Error("sddefault.jpg is not found");}).catch(function(){b.src="https://i.ytimg.com/vi/"+
encodeURIComponent(c)+"/hqdefault.jpg";return J(b)}).then(function(){P(b,{visibility:""})})}AMP.registerElement("amp-youtube",Q);
}));
//# sourceMappingURL=amp-youtube-0.1.js.map
