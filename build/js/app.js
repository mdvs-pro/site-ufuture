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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar DomLib = {\n  addClass: function addClass(el, className) {\n    if (el.classList) el.classList.add(className);else el.className += ' ' + className;\n  },\n  removeClass: function removeClass(el, className) {\n    if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\n  },\n  hasClass: function hasClass(el, className) {\n    if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);\n  },\n  triggerClass: function triggerClass(el, className) {\n    if (this.hasClass(el, className)) {\n      this.removeClass(el, className);\n    } else {\n      this.addClass(el, className);\n    }\n  }\n};\n\nmodule.exports = DomLib;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL0RvbUxpYi5qcz9kNTBiIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBEb21MaWIgPSB7XG4gIGFkZENsYXNzOiBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdClcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbHNlXG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9LFxuICByZW1vdmVDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgZWxzZVxuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgfSxcbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSBcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJywgJ2dpJykudGVzdChlbC5jbGFzc05hbWUpO1xuICB9LFxuICB0cmlnZ2VyQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZENsYXNzKGVsLCBjbGFzc05hbWUpXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9tTGliO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGliL0RvbUxpYi5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQ0E7QUEyQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Menu = {\n  navClass: '.js-nav',\n  navMobileClass: '.js-m-nav',\n  activeState: 'modal-open',\n  init: function init() {\n    this.cloneMenu();\n    this.handlersInit();\n  },\n  cloneMenu: function cloneMenu() {\n    var menu = document.querySelector(this.navClass);\n    var navMenu = document.querySelector(this.navMobileClass);\n    var menuItems = menu.getElementsByClassName('nav__link');\n    var mobileMenu = {};\n    var mobileMenuList = void 0;\n\n    menuItems = Array.from(menuItems);\n    menuItems.map(function (elem, index) {\n      mobileMenu[index] = {\n        link: elem.getAttribute('href'),\n        title: elem.getElementsByClassName('nav__t')[0].innerHTML\n      };\n    });\n\n    mobileMenuList = document.createElement('ul');\n    for (var menuItem in mobileMenu) {\n      var menuChild = '<li class=\"m-nav__item\"> \\n        <a class=\"m-nav__link\" href=\"' + mobileMenu[menuItem]['link'] + '\">' + mobileMenu[menuItem]['title'] + '</a>\\n      </li>';\n      mobileMenuList.innerHTML += menuChild;\n    }\n\n    navMenu.innerHTML = '';\n    navMenu.appendChild(mobileMenuList);\n  },\n  handlersInit: function handlersInit() {\n    var _this = this;\n\n    document.querySelector('.burger').addEventListener('click', function (e) {\n      document.querySelector('body').classList.toggle(_this.activeState);\n    });\n  }\n};\n\nmodule.exports = Menu;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL01lbnUuanM/NDA5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNZW51ID0ge1xuICBuYXZDbGFzczogJy5qcy1uYXYnLFxuICBuYXZNb2JpbGVDbGFzczogJy5qcy1tLW5hdicsXG4gIGFjdGl2ZVN0YXRlOiAnbW9kYWwtb3BlbicsXG4gIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5jbG9uZU1lbnUoKTtcbiAgICB0aGlzLmhhbmRsZXJzSW5pdCgpO1xuICB9LFxuICBjbG9uZU1lbnU6IGZ1bmN0aW9uKCl7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMubmF2Q2xhc3MpO1xuICAgIGxldCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm5hdk1vYmlsZUNsYXNzKTtcbiAgICBsZXQgbWVudUl0ZW1zID0gbWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2xpbmsnKTtcbiAgICBsZXQgbW9iaWxlTWVudSA9IHt9O1xuICAgIGxldCBtb2JpbGVNZW51TGlzdDtcblxuXG4gICAgbWVudUl0ZW1zID0gQXJyYXkuZnJvbShtZW51SXRlbXMpO1xuICAgIG1lbnVJdGVtcy5tYXAoKGVsZW0sIGluZGV4KT0+e1xuICAgICAgbW9iaWxlTWVudVtpbmRleF0gPSB7XG4gICAgICAgIGxpbms6IGVsZW0uZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgIHRpdGxlOiBlbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fdCcpWzBdLmlubmVySFRNTFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9iaWxlTWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGZvciAobGV0IG1lbnVJdGVtIGluIG1vYmlsZU1lbnUpIHtcbiAgICAgIGxldCAgbWVudUNoaWxkID0gYDxsaSBjbGFzcz1cIm0tbmF2X19pdGVtXCI+IFxuICAgICAgICA8YSBjbGFzcz1cIm0tbmF2X19saW5rXCIgaHJlZj1cIiR7IG1vYmlsZU1lbnVbbWVudUl0ZW1dWydsaW5rJ10gfVwiPiR7bW9iaWxlTWVudVttZW51SXRlbV1bJ3RpdGxlJ119PC9hPlxuICAgICAgPC9saT5gXG4gICAgICBtb2JpbGVNZW51TGlzdC5pbm5lckhUTUwgKz0gbWVudUNoaWxkO1xuICAgIH1cbiAgICBcbiAgICBuYXZNZW51LmlubmVySFRNTCA9ICcnO1xuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUxpc3QpO1xuICB9LFxuICBoYW5kbGVyc0luaXQ6IGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmFjdGl2ZVN0YXRlKVxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVudTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9NZW51LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQUNBO0FBeUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _DomLib = __webpack_require__(0);\n\nvar _DomLib2 = _interopRequireDefault(_DomLib);\n\nvar _Menu = __webpack_require__(1);\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import sayHello from './lib/sayHello.js';\nsetTimeout(function () {\n  testBodyStatus();\n}, 4000);\n\nfunction testBodyStatus() {\n  var LOADED_CLASS = 'loaded';\n  var el = document.querySelector('.out');\n  _DomLib2.default.triggerClass(el, LOADED_CLASS);\n}\n\n_Menu2.default.init();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcbmltcG9ydCBEb21MaWIgZnJvbSAnLi9saWIvRG9tTGliLmpzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbGliL01lbnUuanMnO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIHRlc3RCb2R5U3RhdHVzKCk7XG59LCA0MDAwKVxuXG5mdW5jdGlvbiB0ZXN0Qm9keVN0YXR1cygpe1xuICBjb25zdCBMT0FERURfQ0xBU1MgPSAnbG9hZGVkJztcbiAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dCcpO1xuICBEb21MaWIudHJpZ2dlckNsYXNzKGVsLCBMT0FERURfQ0xBU1MpO1xufVxuXG5NZW51LmluaXQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);