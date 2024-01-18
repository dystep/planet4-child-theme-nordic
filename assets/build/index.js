/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/app.js":
/*!******************************!*\
  !*** ./assets/src/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_blockquote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend/blockquote */ "./assets/src/js/frontend/blockquote.js");
/* harmony import */ var _frontend_leadsplugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/leadsplugin.js */ "./assets/src/js/frontend/leadsplugin.js");
/* harmony import */ var _frontend_leadsplugin_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frontend_leadsplugin_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_nosearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend/nosearch */ "./assets/src/js/frontend/nosearch.js");
/* harmony import */ var _frontend_nosearch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_frontend_nosearch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_optimonk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frontend/optimonk */ "./assets/src/js/frontend/optimonk.js");
/* harmony import */ var _frontend_optimonk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_frontend_optimonk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _frontend_templates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/templates.js */ "./assets/src/js/frontend/templates.js");
/* harmony import */ var _frontend_templates_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_frontend_templates_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_tracking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frontend/tracking */ "./assets/src/js/frontend/tracking.js");
/* harmony import */ var _frontend_tracking__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_frontend_tracking__WEBPACK_IMPORTED_MODULE_6__);
//import $ from the global scope

// Expose jQuery to the global object
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a || jQuery;
window.dataLayer = window.dataLayer || [];

//adding other scripts







/***/ }),

/***/ "./assets/src/js/frontend/blockquote.js":
/*!**********************************************!*\
  !*** ./assets/src/js/frontend/blockquote.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



function getComputedStyleProperty(element, property) {
  return window.getComputedStyle(element).getPropertyValue(property);
}
function rgbToHex(rgbString) {
  var _rgbString$substring$ = rgbString.substring(rgbString.indexOf('(') + 1, rgbString.lastIndexOf(')')).split(',').map(function (color) {
      return parseInt(color.trim(), 10);
    }),
    _rgbString$substring$2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_rgbString$substring$, 3),
    r = _rgbString$substring$2[0],
    g = _rgbString$substring$2[1],
    b = _rgbString$substring$2[2];
  return "#".concat(r.toString(16).padStart(2, '0')).concat(g.toString(16).padStart(2, '0')).concat(b.toString(16).padStart(2, '0'));
}
function getBorderLeftColor(blockquoteElement) {
  return getComputedStyleProperty(blockquoteElement, 'border-left-color');
}
function getBorderRightColor(blockquoteElement) {
  return getComputedStyleProperty(blockquoteElement, 'border-right-color');
}
function getBorderTopColor(blockquoteElement) {
  return getComputedStyleProperty(blockquoteElement, 'border-top-color');
}
function getBorderBottomColor(blockquoteElement) {
  return getComputedStyleProperty(blockquoteElement, 'border-bottom-color');
}
document.addEventListener('DOMContentLoaded', function () {
  var customBlockQuotes = document.querySelectorAll('.wp-block-quote.is-style-custom');
  if (customBlockQuotes.length > 0) {
    customBlockQuotes.forEach(function (customBlockQuote, index) {
      // Execute your logic for each element
      listCiteElements(customBlockQuote);
      if (typeof wp !== 'undefined' && typeof wp.data !== 'undefined' && typeof wp.blocks !== 'undefined') {
        // Listen for block selection changes and update the CSS variable
        try {
          wp.data.subscribe(function () {
            listCiteElements(customBlockQuote);
            //console.log(`Successfully listened to quote ${index + 1}`);
          });
        } catch (error) {
          //console.error(`Failed to subscribe to data changes for quote ${index + 1}:`, error);
        }
      }
    });
  }
  function listCiteElements(customBlockQuote) {
    var citeElements = document.querySelectorAll('.wp-block-quote.is-style-custom > cite');
    citeElements.forEach(function (citeElement, index) {
      var citeColor = rgbToHex(getComputedStyleProperty(citeElement, 'color'));
      var blockquoteElement = citeElement.closest('.wp-block-quote');
      var borderciteColor;
      switch (true) {
        case blockquoteElement.classList.contains('has-text-align-right'):
          borderciteColor = getBorderRightColor(blockquoteElement);
          blockquoteElement.style.borderRightColor = citeColor;
          break;
        case blockquoteElement.classList.contains('has-text-align-center'):
          borderciteColor = getBorderTopColor(blockquoteElement);
          blockquoteElement.style.borderTopColor = citeColor;
          borderciteColor = getBorderBottomColor(blockquoteElement);
          blockquoteElement.style.borderBottomColor = citeColor;
          break;
        case blockquoteElement.classList.contains('has-text-align-left'):
          borderciteColor = getBorderLeftColor(blockquoteElement);
          blockquoteElement.style.borderLeftColor = citeColor;
          break;
        default:
          // For wp-block-quote.is-style-custom and has-text-align-left
          borderciteColor = getBorderLeftColor(blockquoteElement);
          blockquoteElement.style.borderLeftColor = citeColor;
          break;
      }
      // console.log(`Cite Element ${index + 1}: Content: ${citeElement.textContent}, Color: ${citeColor}, Border Color: ${borderciteColor}`);
    });
  }

  //align blockquote content to center 
  var blockquoteCenter = document.querySelectorAll('.wp-block-quote.has-text-align-center');
  for (var i = 0; i < blockquoteCenter.length; i++) {
    var blockquoteCenterP = blockquoteCenter[i].querySelector('p');
    var blockquoteCenterCite = blockquoteCenter[i].querySelector('cite');
    blockquoteCenterP.setAttribute("class", "has-text-align-center");
    blockquoteCenterCite.setAttribute("class", "has-text-align-center");
  }

  //align blockquote content to right 
  var blockquoteRight = document.querySelectorAll('.wp-block-quote.has-text-align-right');
  for (var _i = 0; _i < blockquoteRight.length; _i++) {
    var blockquoteRightP = blockquoteRight[_i].querySelector('p');
    var blockquoteRightCite = blockquoteRight[_i].querySelector('cite');
    blockquoteRightP.setAttribute("class", "has-text-align-right");
    blockquoteRightCite.setAttribute("class", "has-text-align-right");
  }
});
try {
  if (typeof wp !== 'undefined' && wp.blocks) {
    // Block Style Registration
    wp.blocks.registerBlockStyle('core/quote', [{
      name: 'custom',
      label: 'Custom',
      isDefault: false,
      inlineStyle: {
        color: 'inherit',
        'font-size': 'inherit',
        'border-left': '4px solid inherit',
        padding: '0.2rem 0 0.2rem 1rem',
        position: 'relative'
      }
    }]);
  }
} catch (error) {
  // console.error('Failed to register block style', error);
}

/***/ }),

/***/ "./assets/src/js/frontend/leadsplugin.js":
/*!***********************************************!*\
  !*** ./assets/src/js/frontend/leadsplugin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//temporary tweak for the finnish campaign 
document.addEventListener('DOMContentLoaded', function () {
  // Check if the specific page element exists
  var leadsForm = document.querySelector('div.leads-form.postcode-modifier');
  if (leadsForm) {
    console.log('Leads form found:', leadsForm);

    // Find the container within the leadsForm
    var leadsFormContainer = leadsForm.querySelector('.leads-form__form__container');
    if (leadsFormContainer) {
      console.log('Leads form container found:', leadsFormContainer);

      // Create the inner HTML code
      var innerHTMLCode = "\n          <div>\n            <div class=\"input-container\">\n              <input type=\"tel\" name=\"postcode\" placeholder=\"Postinumero*\" class=\"input--icon\"> \n              <svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M2.66732 1.66669H13.334C14.0673 1.66669 14.6673 2.26669 14.6673 3.00002V11C14.6673 11.7334 14.0673 12.3334 13.334 12.3334H2.66732C1.93398 12.3334 1.33398 11.7334 1.33398 11V3.00002C1.33398 2.26669 1.93398 1.66669 2.66732 1.66669Z\" stroke=\"#212121\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                <path d=\"M14.6673 3L8.00065 7.66667L1.33398 3\" stroke=\"#212121\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n              </svg>\n            </div>\n          </div>";

      // Get existing UTM values
      var currentUTM = new URLSearchParams(window.location.search);
      console.log(currentUTM);

      // Add event listener to postcodeInput for validation
      var postcodeInput = document.querySelector('input[type="tel"][name="postcode"]');
      if (postcodeInput) {
        postcodeInput.addEventListener('input', function () {
          // Finnish postal code regex pattern (five digits)
          var postcodeRegex = /^\d{5}$/;

          // Your postcode validation logic here
          var enteredPostcode = postcodeInput.value;
          if (postcodeRegex.test(enteredPostcode)) {
            // Valid postcode

            // Check if utm_postcode already exists in the URL
            var utmPostcodeParam = currentUTM.get('utm_postcode');
            if (utmPostcodeParam) {
              // If utm_postcode already exists, replace its value
              currentUTM.set('utm_postcode', enteredPostcode);
            } else {
              // If there are existing UTM parameters, add utm_postcode with "&" separator
              if (currentUTM.toString() !== '') {
                currentUTM.append('utm_postcode', enteredPostcode);
              } else {
                // If there are no existing UTM parameters, add utm_postcode with "?"
                currentUTM.set('utm_postcode', enteredPostcode);
              }
            }

            // Update the URL without reloading the page
            var newURL = "".concat(window.location.origin).concat(window.location.pathname).concat(currentUTM.toString() === '' ? '&' : '?').concat(currentUTM.toString());
            window.history.replaceState({}, document.title, newURL);
            console.log('Postcode updated:', enteredPostcode);
          } else {
            // Invalid postcode
            console.log('Invalid postcode. Please enter a valid Finnish postcode.');
          }
        });
      } else {
        console.log('Postcode input field not found in the added structure.');
      }
    } else {
      console.log('Leads form container not found on this page.');
    }
  } else {
    console.log('This leads form is not found on this page.');
  }
});

/***/ }),

/***/ "./assets/src/js/frontend/nosearch.js":
/*!********************************************!*\
  !*** ./assets/src/js/frontend/nosearch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//add a script to the page to hide the page from google search results
window.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var bodyClass = body.getAttribute('class');
  var robots = document.querySelector('meta[name="robots"]');
  var robotsContent = document.querySelector('meta[content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"]');
  //check if the page is using the hide-page-from-search class
  if (bodyClass.includes('page-template-page-hide-from-search')) {
    //remove the content of the current meta tag robots
    robotsContent.removeAttribute("content");
    //add a new content value for the meta tag robots
    robots.setAttribute("content", "noindex, noarchive, nositelinkssearchbox, noimageindex, nofollow, nosnippet");
    //console.log('Page is hidden from search results');
    //console.log(robots);
  } else {
    robots.setAttribute("content", "max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    //console.log('Page is not hidden from search results');
    //console.log(robots);
  }
});

/***/ }),

/***/ "./assets/src/js/frontend/optimonk.js":
/*!********************************************!*\
  !*** ./assets/src/js/frontend/optimonk.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Adding the Optimonk scripts
window.addEventListener('DOMContentLoaded', function (event) {
  pathnameUrl();
  function pathnameUrl() {
    var pathnameUrl = window.location.pathname.split('/')[1];
    switch (pathnameUrl) {
      case "denmark":
        {
          jQuery('<script id="optimonkDK" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"118834"); </' + 'script>').appendTo(document.body);
          break;
        }
      case "finland":
        {
          jQuery('<script id="optimonkFI" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"118832"); </' + 'script>').appendTo(document.body);
          break;
        }
      case "norway":
        {
          jQuery('<script id="optimonkNO" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);})(document,"118833"); </' + 'script>').appendTo(document.body);
          //fixing the logo in the footer
          //select the last child in the class footer-menu > list-unslyled > li:last-child > a
          var lastChild = document.querySelector('.footer-menu > .list-unstyled').lastElementChild;
          //append a new child after the last child with a link to the innsamlingskontrollen and image of the logo
          lastChild.insertAdjacentHTML('afterend', '<li><a href="https://www.innsamlingskontrollen.no/organisasjoner/foreningen-greenpeace-norden/" target="_blank"><img src="https://storage.googleapis.com/lib.greenpeace.se/apps/Insamlingskontrollen.svg" alt="Innsamlingskontrollen Foreningen Greenpeace Norden" style="width: 4.5rem; position: initial;"></a></li>');
          break;
        }
      case "sweden":
        {
          jQuery('<script id="optimonkSE" type="text/javascript"> (function(e,a){ var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol; t=e.createElement("script");t.type="text/javascript"; t.charset="utf-8";t.async=!0;t.defer=!0; t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t); })(document,"112168"); </' + 'script>').appendTo(document.body);
          break;
        }
      default:
        {
          jQuery('<script id="optimonkDEV" type="text/javascript"> console.log("Default case"); </' + 'script>').appendTo(document.body);
        }
    }
  }
});

/***/ }),

/***/ "./assets/src/js/frontend/templates.js":
/*!*********************************************!*\
  !*** ./assets/src/js/frontend/templates.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//add missing H1 title when the page header is hidden
document.addEventListener("DOMContentLoaded", function () {
  var noPageTitleContainer = document.querySelector('div.page-content.container.no-page-title');
  var isHomeNoPageTitleContainer = document.querySelector('.home > div.page-content.container.no-page-title');
  var pageHeaderContainer = document.querySelector('.page-template-default.page > div.page-header.page-header-hidden > div.container');
  var pageTitle = document.querySelector('title').textContent;
  var strippedTitle = outputStrippedTitle(); // Get the stripped title

  // Check if there is no <h1> element on the page
  var h1Elements = document.querySelectorAll('h1');
  var isNoPageTitle = noPageTitleContainer !== null;
  var noH1OnPage = h1Elements.length === 0;
  if (isNoPageTitle && noH1OnPage && pageHeaderContainer) {
    // Check if the page header container is present and empty
    if (pageHeaderContainer && pageHeaderContainer.innerHTML.trim() === '') {
      insertTitle(strippedTitle); // Insert the title
    }
  }

  if (isNoPageTitle && noH1OnPage && isHomeNoPageTitleContainer) {
    var newElement = document.createElement('h1');
    newElement.classList.add('hidden-title');
    newElement.textContent = strippedTitle;
    isHomeNoPageTitleContainer.prepend(newElement);
  }
  function outputStrippedTitle() {
    return pageTitle.split(' - ')[0].trim(); // Return the stripped title
  }

  // Function to insert the stripped title into the specified element
  function insertTitle(title) {
    var titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('hidden-title');
    pageHeaderContainer.appendChild(titleElement);
  }

  //Function to update the hidden title
  function updateHiddenTitle() {
    var hiddenTitleElement = pageHeaderContainer.querySelector('.hidden-title');
    if (hiddenTitleElement) {
      hiddenTitleElement.textContent = strippedTitle;
    }
  }
  var titleObserver = new MutationObserver(updateHiddenTitle);
  var titleElement = document.querySelector('title');
  titleObserver.observe(titleElement, {
    childList: true,
    subtree: true
  });
});

/***/ }),

/***/ "./assets/src/js/frontend/tracking.js":
/*!********************************************!*\
  !*** ./assets/src/js/frontend/tracking.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//tracking the sub-menu block link clicks
window.addEventListener('DOMContentLoaded', function (event) {
  jQuery('.submenu-link').on('click', function (e) {
    var submenuLinkHref = jQuery(this).attr('href');
    window.dataLayer.push({
      'link': submenuLinkHref,
      'event': 'menuClick'
    });
  });

  //custom tracking for P4 new IA&NAV
  //page types
  if (document.querySelectorAll(".page-content.container .is-pattern-p4-deep-dive-topic-pattern-layout").length > 0) {
    window.dataLayer.push({
      'pageType': 'Deep-dive Topic'
    });
  } else if (document.querySelectorAll(".page-content.container .is-pattern-p4-high-level-topic-pattern-layout").length > 0) {
    window.dataLayer.push({
      'pageType': 'High-level Topic'
    });
  } else {
    //console.log("Default page");
  }

  //page header clicks
  var cta = document.querySelectorAll(".is-pattern-p4-page-header");
  for (var li = 0; li < cta.length; li++) {
    cta[li].addEventListener('click', function (e) {
      window.dataLayer.push({
        'eventCategory': 'Header',
        'eventAction': 'Call to Action',
        'event': 'navClick'
      });
    }, true);
  }

  //secondary nav clicks
  var links = document.querySelectorAll(".nav-link");
  var _loop = function _loop(_li) {
    links[_li].addEventListener('click', function (e) {
      var shorthdl = links[_li].textContent;
      window.dataLayer.push({
        'eventCategory': 'Sub Menu',
        'eventAction': shorthdl,
        'event': 'navClick'
      });
    }, true);
  };
  for (var _li = 0; _li < links.length; _li++) {
    _loop(_li);
  }

  //other deep-dive topics clicks
  var ddlinks = document.querySelectorAll(".is-pattern-p4-deep-dive");
  for (var _li2 = 0; _li2 < ddlinks.length; _li2++) {
    ddlinks[_li2].addEventListener('click', function (e) {
      window.dataLayer.push({
        'eventCategory': 'Read More Topics',
        'eventAction': 'Deep-Dive Topics',
        'event': 'navClick'
      });
    }, true);
  }

  //other high-level topics clicks
  var hllinks = document.querySelectorAll(".is-pattern-p4-quick-links");
  for (var _li3 = 0; _li3 < hllinks.length; _li3++) {
    hllinks[_li3].addEventListener('click', function (e) {
      window.dataLayer.push({
        'eventCategory': 'Read More Topics',
        'eventAction': 'High Level Topics',
        'event': 'navClick'
      });
    }, true);
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map