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
eval("\n\nfunction dotsAnimation() {\n    var SEPARATION = 100,\n        AMOUNTX = 100,\n        AMOUNTY = 40;\n\n    var container;\n    var camera, scene, renderer;\n    var particles,\n        particle,\n        count = 0;\n    var mouseX = 0,\n        mouseY = 0;\n    var windowHalfX = window.innerWidth / 2;\n    var windowHalfY = window.innerHeight / 2;\n\n    init();\n    animate();\n\n    function init() {\n\n        container = document.createElement('div');\n        document.getElementById(\"about\").appendChild(container);\n\n        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);\n        camera.position.z = 10000;\n\n        scene = new THREE.Scene();\n\n        particles = new Array();\n\n        var PI2 = Math.PI * 2;\n        var material = new THREE.SpriteCanvasMaterial({\n\n            color: 0x000000,\n            program: function program(context) {\n\n                context.beginPath();\n                context.arc(0, 0, 0.5, 0, PI2, true);\n                context.fill();\n            }\n\n        });\n\n        var i = 0;\n\n        for (var ix = 0; ix < AMOUNTX; ix++) {\n\n            for (var iy = 0; iy < AMOUNTY; iy++) {\n\n                particle = particles[i++] = new THREE.Sprite(material);\n                particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;\n                particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;\n                scene.add(particle);\n            }\n        }\n\n        renderer = new THREE.CanvasRenderer();\n        renderer.setPixelRatio(window.devicePixelRatio);\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0xffffff, 0);\n        container.appendChild(renderer.domElement);\n\n        window.addEventListener('resize', onWindowResize, false);\n    }\n\n    function onWindowResize() {\n\n        windowHalfX = window.innerWidth / 2;\n        windowHalfY = window.innerHeight / 2;\n\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n\n        renderer.setSize(window.innerWidth, window.innerHeight);\n    }\n\n    function animate() {\n\n        requestAnimationFrame(animate);\n\n        render();\n    }\n\n    function render() {\n\n        camera.position.set(0, 355, 122);\n\n        var i = 0;\n\n        for (var ix = 0; ix < AMOUNTX; ix++) {\n\n            for (var iy = 0; iy < AMOUNTY; iy++) {\n\n                particle = particles[i++];\n                particle.position.y = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;\n                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;\n            }\n        }\n\n        renderer.render(scene, camera);\n\n        count += 0.1;\n    }\n}\n\nmodule.exports = dotsAnimation;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL2RvdHNBbmltYXRpb24uanM/NjFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkb3RzQW5pbWF0aW9uKCkge1xuICB2YXIgU0VQQVJBVElPTiA9IDEwMCwgQU1PVU5UWCA9IDEwMCwgQU1PVU5UWSA9IDQwO1xuXG4gIHZhciBjb250YWluZXI7XG4gIHZhciBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcbiAgdmFyIHBhcnRpY2xlcywgcGFydGljbGUsIGNvdW50ID0gMDtcbiAgdmFyIG1vdXNlWCA9IDAsIG1vdXNlWSA9IDA7XG4gIHZhciB3aW5kb3dIYWxmWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgdmFyIHdpbmRvd0hhbGZZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICBpbml0KCk7XG4gIGFuaW1hdGUoKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKS5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XG5cbiAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxMDAwMCApO1xuICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwMDtcblxuICAgICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgcGFydGljbGVzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgIHZhciBQSTIgPSBNYXRoLlBJICogMjtcbiAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVDYW52YXNNYXRlcmlhbCgge1xuXG4gICAgICAgICAgY29sb3I6IDB4MDAwMDAwLFxuICAgICAgICAgIHByb2dyYW06IGZ1bmN0aW9uICggY29udGV4dCApIHtcblxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyggMCwgMCwgMC41LCAwLCBQSTIsIHRydWUgKTtcbiAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgIH0gKTtcblxuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICBmb3IgKCB2YXIgaXggPSAwOyBpeCA8IEFNT1VOVFg7IGl4ICsrICkge1xuXG4gICAgICAgICAgZm9yICggdmFyIGl5ID0gMDsgaXkgPCBBTU9VTlRZOyBpeSArKyApIHtcblxuICAgICAgICAgICAgICBwYXJ0aWNsZSA9IHBhcnRpY2xlc1sgaSArKyBdID0gbmV3IFRIUkVFLlNwcml0ZSggbWF0ZXJpYWwgKTtcbiAgICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24ueCA9IGl4ICogU0VQQVJBVElPTiAtICggKCBBTU9VTlRYICogU0VQQVJBVElPTiApIC8gMiApO1xuICAgICAgICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbi56ID0gaXkgKiBTRVBBUkFUSU9OIC0gKCAoIEFNT1VOVFkgKiBTRVBBUkFUSU9OICkgLyAyICk7XG4gICAgICAgICAgICAgIHNjZW5lLmFkZCggcGFydGljbGUgKTtcblxuICAgICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5DYW52YXNSZW5kZXJlcigpO1xuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4ZmZmZmZmLCAwKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG5cbiAgICAgIHdpbmRvd0hhbGZYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICAgICAgd2luZG93SGFsZlkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICByZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcblxuICAgICAgcmVuZGVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG5cblxuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLDM1NSwxMjIpO1xuXG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIGZvciAoIHZhciBpeCA9IDA7IGl4IDwgQU1PVU5UWDsgaXggKysgKSB7XG5cbiAgICAgICAgICBmb3IgKCB2YXIgaXkgPSAwOyBpeSA8IEFNT1VOVFk7IGl5ICsrICkge1xuXG4gICAgICAgICAgICAgIHBhcnRpY2xlID0gcGFydGljbGVzWyBpKysgXTtcbiAgICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24ueSA9ICggTWF0aC5zaW4oICggaXggKyBjb3VudCApICogMC4zICkgKiA1MCApICtcbiAgICAgICAgICAgICAgICAgICggTWF0aC5zaW4oICggaXkgKyBjb3VudCApICogMC41ICkgKiA1MCApO1xuICAgICAgICAgICAgICBwYXJ0aWNsZS5zY2FsZS54ID0gcGFydGljbGUuc2NhbGUueSA9ICggTWF0aC5zaW4oICggaXggKyBjb3VudCApICogMC4zICkgKyAxICkgKiA0ICtcbiAgICAgICAgICAgICAgICAgICggTWF0aC5zaW4oICggaXkgKyBjb3VudCApICogMC41ICkgKyAxICkgKiA0O1xuXG4gICAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xuXG4gICAgICBjb3VudCArPSAwLjE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb3RzQW5pbWF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGliL2RvdHNBbmltYXRpb24uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dotsAnimation = __webpack_require__(1);\n\nvar _dotsAnimation2 = _interopRequireDefault(_dotsAnimation);\n\nvar _DomLib = __webpack_require__(0);\n\nvar _DomLib2 = _interopRequireDefault(_DomLib);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import sayHello from './lib/sayHello.js';\n(0, _dotsAnimation2.default)();\n\nsetTimeout(function () {\n  testBodyStatus();\n}, 4000);\n\nfunction testBodyStatus() {\n  var LOADED_CLASS = 'loaded';\n  var el = document.querySelector('.out');\n  _DomLib2.default.triggerClass(el, LOADED_CLASS);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcbmltcG9ydCBkb3RzQW5pbWF0aW9uIGZyb20gJy4vbGliL2RvdHNBbmltYXRpb24uanMnO1xuaW1wb3J0IERvbUxpYiBmcm9tICcuL2xpYi9Eb21MaWIuanMnO1xuZG90c0FuaW1hdGlvbigpO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIHRlc3RCb2R5U3RhdHVzKCk7XG59LCA0MDAwKVxuXG5mdW5jdGlvbiB0ZXN0Qm9keVN0YXR1cygpe1xuICBjb25zdCBMT0FERURfQ0xBU1MgPSAnbG9hZGVkJztcbiAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dCcpO1xuICBEb21MaWIudHJpZ2dlckNsYXNzKGVsLCBMT0FERURfQ0xBU1MpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBSEE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);