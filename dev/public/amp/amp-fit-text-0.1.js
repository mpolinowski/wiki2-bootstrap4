(window.AMP = window.AMP || []).push((function(AMP) {var process={env:{NODE_ENV:"production"}};var g,p=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}(this);function r(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(p.Object.defineProperties){var e=p.Object.getOwnPropertyDescriptor(b,d);e&&p.Object.defineProperty(a,d,e)}else a[d]=b[d]}var t=null,u="";
function v(){if(window.context&&window.context.mode)return window.context.mode;var a=!!("localhost"==location.hostname||location.ancestorOrigins&&location.ancestorOrigins[0]&&0==location.ancestorOrigins[0].indexOf("http://localhost:"))&&!!document.querySelector('script[src*="/dist/"],script[src*="/base/"]');var b=location.originalHash||location.hash,c=Object.create(null);if(b){if(0==b.indexOf("?")||0==b.indexOf("#"))b=b.substr(1);for(var b=b.split("&"),d=0;d<b.length;d++){var e=b[d],f=e.indexOf("="),
k;-1!=f?(k=decodeURIComponent(e.substring(0,f)).trim(),e=decodeURIComponent(e.substring(f+1)).trim()):(k=decodeURIComponent(e).trim(),e="");k&&(c[k]=e)}}var l=c;u||(c=window,u=a?"1468883441627":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"1468883441627");return{localDev:a,development:!("1"!=l.development&&!window.AMP_DEV_MODE),filter:l.filter,minified:"production"==process.env.NODE_ENV,test:!(!window.AMP_TEST&&!window.__karma__),log:l.log,version:u}};var w=(new Date).getTime();function x(a,b,c){this.win=a;this.h=b;this.b=this.win.console&&this.win.console.log&&"0"!=(t?t:t=v()).log?this.h(t?t:t=v()):0;this.g=c||""}function y(a,b,c,d){if(0!=a.b){var e=a.win.console.log;"ERROR"==c?e=a.win.console.error||e:"INFO"==c?e=a.win.console.info||e:"WARN"==c&&(e=a.win.console.warn||e);d.unshift((new Date).getTime()-w,"["+b+"]");e.apply(a.win.console,d)}}g=x.prototype;g.isEnabled=function(){return 0!=this.b};
g.fine=function(a,b){4<=this.b&&y(this,a,"FINE",Array.prototype.slice.call(arguments,1))};g.info=function(a,b){3<=this.b&&y(this,a,"INFO",Array.prototype.slice.call(arguments,1))};g.warn=function(a,b){2<=this.b&&y(this,a,"WARN",Array.prototype.slice.call(arguments,1))};g.error=function(a,b){if(1<=this.b)y(this,a,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=z.apply(null,Array.prototype.slice.call(arguments,1));A(this,c);this.win.setTimeout(function(){throw c;})}};
g.createError=function(a){var b=z.apply(null,arguments);A(this,b);return b};g.assert=function(a,b,c){var d;if(!a){var e=(b||"Assertion failed").split("%s"),f=e.shift(),k=f,l=[];""!=f&&l.push(f);for(f=2;f<arguments.length;f++){var h=arguments[f];h&&h.tagName&&(d=h);var q=e.shift();l.push(h);var n=q.trim();""!=n&&l.push(n);var n=k,m;m=h;m=m instanceof Element?m.tagName.toLowerCase()+(m.id?"#"+m.id:""):m;k=n+(m+q)}f=Error(k);f.fromAssert=!0;f.associatedElement=d;f.messageArray=l;A(this,f);throw f;}return a};
g.assertEnumValue=function(a,b,c){for(var d in a)if(a[d]==b)return a[d];this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function A(a,b){a.g&&(b.message?-1==b.message.indexOf(a.g)&&(b.message+=a.g):b.message=a.g)}function z(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=e:(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}new x(window,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:0},"\u200b\u200b\u200b");
new x(window,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0});var B=Object.create(null),C="Webkit webkit Moz moz ms O o".split(" ");function D(a,b){for(var c in b){var d=a,e=b[c],f;f=d.style;var k=c,l=B[k];if(!l){l=k;if(void 0===f[k]){var h;h=k;h=h.charAt(0).toUpperCase()+h.slice(1);a:{for(var q=0;q<C.length;q++){var n=C[q]+h;if(void 0!==f[n]){h=n;break a}}h=""}void 0!==f[h]&&(l=h)}B[k]=l}(f=l)&&(d.style[f]=e)}};function E(a){AMP.BaseElement.apply(this,arguments)}r(E,AMP.BaseElement);g=E.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
g.buildCallback=function(){var a=this;this.c=this.element.ownerDocument.createElement("div");this.applyFillContent(this.c);this.c.classList.add("-amp-fit-text-content");D(this.c,{zIndex:2});this.a=this.element.ownerDocument.createElement("div");D(this.a,{lineHeight:"1.15em"});this.c.appendChild(this.a);this.f=this.element.ownerDocument.createElement("div");D(this.f,{position:"absolute",top:0,left:0,right:0,zIndex:1,visibility:"hidden",lineHeight:"1.15em"});this.getRealChildNodes().forEach(function(b){a.a.appendChild(b)});
this.f.innerHTML=this.a.innerHTML;this.element.appendChild(this.c);this.element.appendChild(this.f);this.j=parseFloat(this.element.getAttribute("min-font-size"))||6;this.i=parseFloat(this.element.getAttribute("max-font-size"))||72};g.prerenderAllowed=function(){return!0};g.isRelayoutNeeded=function(){return!0};
g.layoutCallback=function(){var a=this.element.offsetHeight,b=this.f,c=this.j,d=this.i;for(d++;1<d-c;){var e=Math.floor((c+d)/2);b.style.fontSize=e+"px";b.offsetHeight>a?d=e:c=e}d=c;this.a.style.fontSize=d+"px";b=this.a;c=this.f;c.style.fontSize=d+"px";c=c.offsetHeight>a;d*=1.15;a=Math.floor(a/d);b.classList.toggle("-amp-fit-text-content-overflown",c);D(b,{lineClamp:c?a:"",maxHeight:c?d*a+"px":""});return Promise.resolve()};AMP.registerElement("amp-fit-text",E,".-amp-fit-text-content,.-amp-fit-text-content.-amp-fill-content{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.-amp-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/");
}));
//# sourceMappingURL=amp-fit-text-0.1.js.map
