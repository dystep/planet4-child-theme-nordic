!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){!function(){e.exports=this.jQuery}()},function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r);o(2);window.$=n.a||jQuery,window.dataLayer=window.dataLayer||[],window.addEventListener("DOMContentLoaded",(function(e){!function(){switch(window.location.pathname.split("/")[1]){case"denmark":jQuery('<script id="optimonkDK" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"118834"); <\/script>').appendTo(document.body);break;case"finland":jQuery('<script id="optimonkFI" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"118832"); <\/script>').appendTo(document.body);break;case"norway":jQuery('<script id="optimonkNO" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);})(document,"118833"); <\/script>').appendTo(document.body);break;case"sweden":jQuery('<script id="optimonkSE" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"112168"); <\/script>').appendTo(document.body);break;default:jQuery('<script id="optimonkDEV" type="text/javascript"> console.log("Default case"); <\/script>').appendTo(document.body)}}()}))},function(e,t){console.log("Adding the ECI script here.."),window.addEventListener("DOMContentLoaded",(function(e){var t=document.getElementById("proca"),o=jQuery(".eci-description p"),r=jQuery(".eci-description p ul li");switch(t?(t=!0,console.log("ECI LOADED..")):(t=!1,console.log("NO ECI..")),t){case!0:console.log("ECI SWITCH TRUE.."),jQuery((function(){jQuery(".eci-form-wrapper").css({padding:"1.5rem","padding-bottom":"2rem"}),jQuery(o).add(r).css({"font-family":"Roboto","font-weight":"600","font-size":"1rem"}),jQuery(".leads-form__form__container").hide(),jQuery(".leads-form__content h2").hide(),jQuery(".leads-form__content .description").hide(),jQuery(".leads-form__form").prepend(jQuery(".eci-form-wrapper")),jQuery(".leads-form__content").prepend(jQuery(".eci-text-wrapper")),jQuery(".eci-form-wrapper, .eci-text-wrapper").show(),jQuery(proca.set("layout","variant","filled"))}));break;case!1:console.log("ECI SWITCH FALSE.."),jQuery(".leads-form__form__container, .leads-form__content h2, .leads-form__content .description").show();break;default:console.log("DEFAULT SWITCH CASE.."),jQuery(".leads-form__form__container, .leads-form__content h2, .leads-form__content .description").show()}})),window.addEventListener("proca",(function(e){var t=jQuery("form#proca-register :nth-child(4)"),o=jQuery("form#proca-register :nth-child(5)"),r=jQuery("form#proca-register :nth-child(6)"),n=jQuery("form#proca-register :nth-child(7)");jQuery(t).add(o).add(r).hide("slow",(function(){window.scroll({behavior:"smooth"}),console.log("folded")})),jQuery("#proca_firstname").on("click",(function(){jQuery(t).add(o).add(r).fadeIn("slow",(function(){window.scroll({top:0,left:0,behavior:"smooth"}),console.log("unfolded")}))})),jQuery(n).css({padding:"1.5rem 0"})})),window.addEventListener("eci:complete",(function(e){window.dataLayer.push({event:"petitionSignup ECI"}),jQuery(".eci-form-wrapper, .eci-text-wrapper").hide(),jQuery(".leads-form__form__container, .leads-form__content h2, .leads-form__content .description").fadeIn(1400,(function(){window.scroll({top:0,left:0,behavior:"smooth"})}))})),window.addEventListener("proca",(function(e){"count"==e.detail.message&&(document.querySelector(".eci-counter").innerText=e.detail.value)}))}]);