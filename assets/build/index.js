!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.$=$||jQuery,window.dataLayer=window.dataLayer||[],window.addEventListener("load",(function(e){$("#p4en_form input[type=text], #p4en_form input[type=email]").val(""),location.search&&$("input[name='supporter.NOT_TAGGED_27']").val(location.search),$(" [name='supporter.questions.547127'], [name='supporter.questions.547128'], [name='supporter.questions.547129'], [name='supporter.questions.547130']").change((function(){this.checked?$("[name='supporter.questions.2738'], [name='supporter.questions.212677']").val("Y"):$("[name='supporter.questions.2738'], [name='supporter.questions.212677']").val("")})),$("#p4en_form").submit((function(e){""===document.forms.p4en_form["supporter.questions.212677"].value?dataLayer.push({event:"petitionSignupConsent",eventAction:"optout"}):dataLayer.push({event:"petitionSignupConsent",eventAction:"optin"})})),function(){switch(window.location.pathname.split("/")[1]){case"denmark":var e=document.createElement("script");e.id="optimonkDK",e.type="text/javascript",e.src="https://storage.googleapis.com/lib.greenpeace.se/apps/denmark.js",document.body.appendChild(e);break;case"sweden":var t=document.createElement("script");t.id="optimonkSE",t.type="text/javascript",t.src="https://storage.googleapis.com/lib.greenpeace.se/apps/sweden.js",document.body.appendChild(t);break;case"finland":var n=document.createElement("script");n.id="optimonkFI",n.type="text/javascript",n.src="https://storage.googleapis.com/lib.greenpeace.se/apps/finland.js",document.body.appendChild(n);break;case"norway":var o=document.createElement("script");o.id="optimonkNO",o.type="text/javascript",o.src="https://storage.googleapis.com/lib.greenpeace.se/apps/norway.js",document.body.appendChild(o);break;default:console.log("Default case")}}(),document.addEventListener("DOMContentLoaded",(function(){jQuery(".rotate-arrow").on("click",(function(){jQuery(this).find("[data-fa-i2svg]").toggleClass("fa-angle-down").toggleClass("fa-angle-right")}))}))}))}]);