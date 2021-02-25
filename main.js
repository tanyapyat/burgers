!function(t){var s={};function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)o.d(t,s,function(e){return n[e]}.bind(null,s));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./src/scripts/main.js")}({"./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/1.js */ "./src/scripts/sections/1.js");\n/* harmony import */ var _sections_3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/3.js */ "./src/scripts/sections/3.js");\n/* harmony import */ var _sections_4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/4.js */ "./src/scripts/sections/4.js");\n/* harmony import */ var _sections_5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/5.js */ "./src/scripts/sections/5.js");\n/* harmony import */ var _sections_6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/6.js */ "./src/scripts/sections/6.js");\n/* harmony import */ var _sections_8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/8.js */ "./src/scripts/sections/8.js");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.js */ "./src/scripts/navigation.js");\n\n\n\n\n\n\n\n\nObject(_sections_1_js__WEBPACK_IMPORTED_MODULE_0__["dropdownMenu"])();\n\nObject(_sections_3_js__WEBPACK_IMPORTED_MODULE_1__["slider"])();\nObject(_sections_3_js__WEBPACK_IMPORTED_MODULE_1__["composition"])();\n\nObject(_sections_4_js__WEBPACK_IMPORTED_MODULE_2__["verticalAccordeon"])();\nObject(_sections_5_js__WEBPACK_IMPORTED_MODULE_3__["horizontalAccordeon"])();\n\nObject(_sections_6_js__WEBPACK_IMPORTED_MODULE_4__["popups"])();\n\nymaps.ready(_sections_8_js__WEBPACK_IMPORTED_MODULE_5__["init"]);\n\nObject(_navigation_js__WEBPACK_IMPORTED_MODULE_6__["onePageScroll"])();\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?')},"./src/scripts/navigation.js":
/*!***********************************!*\
  !*** ./src/scripts/navigation.js ***!
  \***********************************/
/*! exports provided: onePageScroll */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onePageScroll\", function() { return onePageScroll; });\nfunction onePageScroll () {\n    const body = document.getElementsByTagName('body')[0];\n    const container = document.getElementsByClassName('maincontent')[0];\n    const sections = document.getElementsByClassName('section');\n    let activeSection = document.getElementsByClassName('activeSection')[0];\n    let reqSection = Array.prototype.indexOf.call(sections, activeSection);\n    let inScroll = false;\n    let dots;\n\n    (function generateDots() {\n        [].forEach.call(sections, function() {\n            let dot = document.createElement('li');\n\n            dot.classList.add('nav-dots__item');\n            dot.innerHTML = '<div class=\"nav-dots__item-round\"></div>';\n            document.getElementsByClassName('nav-dots')[0].append(dot);\n        })\n        dots = document.querySelectorAll('.nav-dots__item');\n        dots[0].classList.add('activeDot');\n    })();\n\n    const switchActiveClass = (activeSectionIndex) => {\n        [].forEach.call(sections, section => {\n            section.classList.remove('activeSection');\n        });\n        [].forEach.call(dots, dot => {\n            dot.classList.remove('activeDot');\n        });\n        sections[activeSectionIndex].classList.add('activeSection');\n        dots[activeSectionIndex].classList.add('activeDot');\n    }\n\n    const makeScroll = (reqSection) => {\n        inScroll = true;\n        container.style.top = - (reqSection)*100 + '%';\n        setTimeout(() => {\n            inScroll = false;\n            switchActiveClass(reqSection);\n        }, 1300);\n    }\n\n    const scrollDown = () => {\n        if (window.screen.width <= 992 && document.getElementById('menuContent').style.display == 'flex') {\n            return;\n        }\n        if (reqSection < sections.length-1) {\n            reqSection+=1;\n            makeScroll(reqSection);\n        }\n    }\n    const scrollUp = () => {\n        if (reqSection > 0) {\n            reqSection-=1;\n            makeScroll(reqSection);\n        }\n    }\n\n    // scroll\n    body.addEventListener('mousewheel', function(e) {\n        if (inScroll) {\n            return;\n        }\n        if (e.deltaY >= 0) {\n            scrollDown();\n        } else {\n            scrollUp();\n        }\n    });\n\n    // keyboard\n    body.addEventListener('keydown', function(e) {\n        if (e.key == 'ArrowDown') {\n            scrollDown();\n        } else if (e.key == 'ArrowUp') {\n            scrollUp();\n        }\n    });\n\n    // header menu\n    document.querySelectorAll('[data-goto]').forEach(item => {\n        item.addEventListener('click', e => {\n            e.preventDefault();\n            reqSection = item.getAttribute('data-goto') - 0;\n            makeScroll(reqSection)\n        })\n    })\n\n    // dots\n    dots.forEach(dot => {\n        dot.addEventListener('click', function() {\n            reqSection = Array.prototype.indexOf.call(dots, dot);\n            makeScroll(reqSection);\n        })\n    })\n\n    function isTouchDevice() {  \n        return 'ontouchstart' in window; \n    }\n\n    if (isTouchDevice) {\n        window.addEventListener('swipe', function (event, direction, distance, duration, fingerCount, fingerData) {\n            alert(direction);\n            makeScroll(direction);\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/navigation.js?")},"./src/scripts/sections/1.js":
/*!***********************************!*\
  !*** ./src/scripts/sections/1.js ***!
  \***********************************/
/*! exports provided: dropdownMenu */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownMenu\", function() { return dropdownMenu; });\nfunction dropdownMenu () {\n    const menuTriggerOpen = document.getElementById('menuTriggerOpen');\n    const menuTriggerClose = document.getElementById('menuTriggerClose');\n    const menuContent = document.getElementById('menuContent');\n    const menuItems = document.getElementsByClassName('header__menu-item-link');\n\n    menuTriggerOpen.addEventListener('click', function() {\n        menuContent.style.display = 'flex';\n        menuTriggerOpen.style.display = 'none';\n        menuTriggerClose.style.display = 'block';\n\n        [].forEach.call(menuItems, menuItem => {\n            menuItem.addEventListener('click', function() {\n                menuContent.style.display = 'none';\n                menuTriggerClose.style.display = 'none';\n                menuTriggerOpen.style.display = 'block';\n            })\n        });\n    })\n\n    menuTriggerClose.addEventListener('click', function() {\n        menuContent.style.display = 'none';\n        menuTriggerClose.style.display = 'none';\n        menuTriggerOpen.style.display = 'block';\n    })\n}\n\n//# sourceURL=webpack:///./src/scripts/sections/1.js?")},"./src/scripts/sections/3.js":
/*!***********************************!*\
  !*** ./src/scripts/sections/3.js ***!
  \***********************************/
/*! exports provided: slider, composition */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"composition\", function() { return composition; });\nfunction slider () {\n    const buttons = document.getElementsByClassName('burgers__scroll');\n    const container = document.getElementsByClassName('burgers__list')[0];\n    const items = document.getElementsByClassName('burgers__list-item');\n    let activeItem = document.getElementsByClassName('activeItem')[0];\n    let reqIndex = Array.prototype.indexOf.call(items, activeItem);\n\n    [].forEach.call(buttons, button => {\n        button.addEventListener('click', function(e) {\n            e.preventDefault();\n\n            if (button.classList.contains('burgers__scroll-left')) {\n                reqIndex-=1;\n                if (reqIndex < 0) {\n                    reqIndex = items.length-1;\n                }\n            }\n            if (button.classList.contains('burgers__scroll-right')) {\n                reqIndex+=1;\n                if (reqIndex > items.length-1) {\n                    reqIndex = 0;\n                }\n            }\n\n            container.style.left = - reqIndex*100 + '%';\n            [].forEach.call(items, item => {\n                item.classList.remove('activeItem');\n            });\n            items[reqIndex].classList.add('activeItem');\n            composition();\n        })\n    });\n}\n\nfunction composition () {\n    const activeSlide = document.getElementsByClassName('activeItem')[0];\n    const trigger = activeSlide.getElementsByClassName('burgers__list-item-left-composition')[0];\n    const dropdown = activeSlide.getElementsByClassName('burgers__list-item-left-dropdown')[0];\n\n    dropdown.classList.remove('activeDropdown');\n    trigger.classList.remove('activeDropdownTrigger');\n\n    trigger.addEventListener('click', function(e) {\n        e.stopImmediatePropagation();\n        dropdown.classList.toggle('activeDropdown');\n        trigger.classList.toggle('activeDropdownTrigger');\n    })\n}\n\n//# sourceURL=webpack:///./src/scripts/sections/3.js?")},"./src/scripts/sections/4.js":
/*!***********************************!*\
  !*** ./src/scripts/sections/4.js ***!
  \***********************************/
/*! exports provided: verticalAccordeon */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verticalAccordeon\", function() { return verticalAccordeon; });\nfunction verticalAccordeon () {\n    const items = document.getElementsByClassName('team__content-accordeon-item');\n    const triggers = document.getElementsByClassName('team__content-accordeon-item-trigger');\n\n    [].forEach.call(triggers, trigger => {\n        trigger.addEventListener('click', function(e) {\n            e.preventDefault();\n\n            let item = trigger.closest('.team__content-accordeon-item');\n\n            if (!item.classList.contains('team-accordeon-active')) {\n                [].forEach.call(items, e => {\n                    e.classList.remove('team-accordeon-active');\n                    e.lastElementChild.style.height = '0';\n                })\n                item.classList.add('team-accordeon-active');\n                window.screen.width > 768 \n                    ? item.lastElementChild.style.height = item.lastElementChild.scrollHeight*2 + 'px'\n                    : item.lastElementChild.style.height = item.lastElementChild.scrollHeight + 'px'\n            } else {\n                item.classList.remove('team-accordeon-active');\n                item.lastElementChild.style.height = '0'\n            }\n        })\n    });\n}\n\n//# sourceURL=webpack:///./src/scripts/sections/4.js?")},"./src/scripts/sections/5.js":
/*!***********************************!*\
  !*** ./src/scripts/sections/5.js ***!
  \***********************************/
/*! exports provided: horizontalAccordeon */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"horizontalAccordeon\", function() { return horizontalAccordeon; });\nfunction horizontalAccordeon () {\n    const items = document.getElementsByClassName('menu__content-accordeon-item');\n    const triggers = document.getElementsByClassName('menu__content-accordeon-item-trigger');\n\n    [].forEach.call(triggers, trigger => {\n        trigger.addEventListener('click', function(e) {\n            e.preventDefault();\n\n            let item = trigger.closest('.menu__content-accordeon-item');\n\n            if (!item.classList.contains('menu-accordeon-active')) {\n                [].forEach.call(items, e => {\n                    e.classList.remove('menu-accordeon-active');\n                    e.lastElementChild.style.width = '0';\n                });\n                [].forEach.call(triggers, e => {\n                    e.style.color = '#fff'\n                });\n                item.classList.add('menu-accordeon-active');\n                window.screen.width > 768 \n                    ? item.lastElementChild.style.width = '33.75rem'\n                    : item.lastElementChild.style.width = 'calc(100vw - 15rem)'\n                trigger.style.color = '#f8b43a';\n            } else {\n                item.classList.remove('menu-accordeon-active');\n                item.lastElementChild.style.width = '0'\n                trigger.style.color = '#fff';\n            }\n        })\n    });\n}\n\n//# sourceURL=webpack:///./src/scripts/sections/5.js?")},"./src/scripts/sections/6.js":
/*!***********************************!*\
  !*** ./src/scripts/sections/6.js ***!
  \***********************************/
/*! exports provided: popups */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popups\", function() { return popups; });\nfunction popups () {\n    const feedbacks = document.getElementsByClassName('feedback__items-item');\n\n    [].forEach.call(feedbacks, feedback => {\n        const trigger = feedback.getElementsByClassName('feedback__items-item-content-button')[0];\n        const name = feedback.getElementsByClassName('feedback__items-item-content-name')[0].innerHTML;\n        const text = feedback.getElementsByClassName('feedback__items-item-content-text')[0].innerHTML;\n\n        trigger.addEventListener('click', function() {\n            let popup = document.createElement('div');\n    \n            popup.classList.add('feedback__popup');\n            popup.innerHTML = `<div class=\"feedback__popup-content\">\n                <div class=\"feedback__popup-content-name\"> ${name} </div>\n                <div class=\"feedback__popup-content-text\"> ${text} </div>\n                <div class=\"feedback__popup-content-close\"><img src='images/6/close.png'/></div>\n                </div>`\n\n            document.getElementsByTagName('html')[0].appendChild(popup);\n\n            document.addEventListener('mousewheel', function(e) {\n                e.preventDefault();\n            }, { passive: false });\n\n            document.getElementsByClassName('feedback__popup-content-close')[0].addEventListener('click', function() {\n                document.getElementsByTagName('html')[0].removeChild(popup);\n            })\n        })\n    })\n}\n\n\n//# sourceURL=webpack:///./src/scripts/sections/6.js?")},"./src/scripts/sections/8.js":
/*!***********************************!*\
  !*** ./src/scripts/sections/8.js ***!
  \***********************************/
/*! exports provided: init */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\nconst placemarks = [\n        {\n            latitude: 59.97,\n            longitude: 30.31,\n            hintContent: '<div class=\"contacts__map-hint\">ул. Литераторов, д. 19</div>',\n            balloonContent: [\n                '<div class=\"contacts__map-balloon\">',\n                'Самые вкусные бургеры у нас! </br> Заходите по адресу: ул. Литераторов, д. 19',\n                '<img class=\"contacts__map-balloon-img\" src=\"images/8/burger.png\" alt=\"Бургер\"/>',\n                '</div>'\n            ]\n        },\n        {\n            latitude: 59.94,\n            longitude: 30.25,\n            hintContent: '<div class=\"contacts__map-hint\">Малый проспект В О, д 64</div>',\n            balloonContent: [\n                '<div class=\"contacts__map-balloon\">',\n                'Самые вкусные бургеры у нас! </br> Заходите по адресу: Малый проспект В О, д 64',\n                '<img class=\"contacts__map-balloon-img\" src=\"images/8/burger.png\" alt=\"Бургер\"/>',\n                '</div>'\n            ]\n        },\n        {\n            latitude: 59.93,\n            longitude: 30.34,\n            hintContent: '<div class=\"contacts__map-hint\">наб. реки Фонтанки, д. 56</div>',\n            balloonContent: [\n                '<div class=\"contacts__map-balloon\">',\n                'Самые вкусные бургеры у нас! </br> Заходите по адресу: наб. реки Фонтанки, д. 56',\n                '<img class=\"contacts__map-balloon-img\" src=\"images/8/burger.png\" alt=\"Бургер\"/>',\n                '</div>'\n            ]\n        }\n    ],\n    geoObjects= [];\n\nfunction init () {\n    const map = new ymaps.Map('map', {\n        center: [59.938936, 30.314466],\n        zoom: 11,\n        controls: ['zoomControl'],\n        behaviors: ['drag']\n    });\n\n    for (let i = 0; i < placemarks.length; i++) {\n        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],\n            {\n                hintContent: placemarks[i].hintContent,\n                balloonContent: placemarks[i].balloonContent.join('')\n            },\n            {\n                iconLayout: 'default#image',\n                iconImageHref: 'images/8/placemark.png',\n                iconImageSize: [46, 57],\n                iconImageOffset: [-23, -57],\n            });\n    }\n\n    const clusterer = new ymaps.Clusterer({\n        clusterIcons: [\n            {\n                href: 'images/8/placemark.png',\n                size: [46, 57],\n                offset: [-23, -57]\n            }\n        ],\n        clusterIconContentLayout: null\n    });\n\n    map.geoObjects.add(clusterer);\n    clusterer.add(geoObjects);\n}\n\n//# sourceURL=webpack:///./src/scripts/sections/8.js?")}});