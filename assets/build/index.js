!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){e.exports=this.jQuery}()},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);n(2),n(3),n(4);window.$=r.a||jQuery,window.dataLayer=window.dataLayer||[]},function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("body").getAttribute("class"),t=document.querySelector('meta[name="robots"]'),n=document.querySelector('meta[content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"]');e.includes("page-template-page-hide-from-search")?(n.removeAttribute("content"),t.setAttribute("content","noindex, noarchive, nositelinkssearchbox, noimageindex, nofollow, nosnippet")):t.setAttribute("content","max-snippet:-1, max-image-preview:large, max-video-preview:-1")}))},function(e,t){window.addEventListener("DOMContentLoaded",(function(e){!function(){switch(window.location.pathname.split("/")[1]){case"denmark":jQuery('<script id="optimonkDK" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"118834"); <\/script>').appendTo(document.body);break;case"finland":jQuery('<script id="optimonkFI" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"118832"); <\/script>').appendTo(document.body);break;case"norway":jQuery('<script id="optimonkNO" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);})(document,"118833"); <\/script>').appendTo(document.body),document.querySelector(".footer-menu > .list-unstyled").lastElementChild.insertAdjacentHTML("afterend",'<li><a href="https://www.innsamlingskontrollen.no/organisasjoner/foreningen-greenpeace-norden/" target="_blank"><img src="https://storage.googleapis.com/lib.greenpeace.se/apps/Insamlingskontrollen.svg" alt="Innsamlingskontrollen Foreningen Greenpeace Norden" style="width: 4.5rem; position: initial;"></a></li>');break;case"sweden":jQuery('<script id="optimonkSE" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"112168"); <\/script>').appendTo(document.body);break;default:jQuery('<script id="optimonkDEV" type="text/javascript"> console.log("Default case"); <\/script>').appendTo(document.body)}}()}))},function(e,t){window.addEventListener("DOMContentLoaded",(function(e){jQuery(".submenu-link").on("click",(function(e){var t=jQuery(this).attr("href");window.dataLayer.push({link:t,event:"menuClick"})}));var t=document.querySelectorAll(".is-pattern-p4-high-level-topic-pattern-layout"),n=document.querySelectorAll(".is-pattern-p4-deep-dive-topic-pattern-layout");t?window.dataLayer.push({pageType:"High-level Topic"}):n&&window.dataLayer.push({pageType:"Deep-dive Topic"});for(var o=document.querySelectorAll(".is-pattern-p4-page-header"),r=0;r<o.length;r++)o[r].addEventListener("click",(function(e){window.dataLayer.push({eventCategory:"Header",eventAction:"Call to Action",event:"navClick"})}),!0);for(var a=document.querySelectorAll(".nav-link"),i=function(e){a[e].addEventListener("click",(function(t){var n=a[e].textContent;window.dataLayer.push({eventCategory:"Sub Menu",eventAction:n,event:"navClick"})}),!0)},c=0;c<a.length;c++)i(c);for(var p=document.querySelectorAll(".is-pattern-p4-deep-dive"),d=0;d<p.length;d++)p[d].addEventListener("click",(function(e){window.dataLayer.push({eventCategory:"Read More Topics",eventAction:"Deep-Dive Topics",event:"navClick"})}),!0);for(var l=document.querySelectorAll(".is-pattern-p4-quick-links"),s=0;s<l.length;s++)l[s].addEventListener("click",(function(e){window.dataLayer.push({eventCategory:"Read More Topics",eventAction:"High Level Topics",event:"navClick"})}),!0)}))}]);