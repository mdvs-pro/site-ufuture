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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction dotsAnimation() {\n    var SEPARATION = 100,\n        AMOUNTX = 100,\n        AMOUNTY = 40;\n\n    var container;\n    var camera, scene, renderer;\n    var particles,\n        particle,\n        count = 0;\n    var mouseX = 0,\n        mouseY = 0;\n    var windowHalfX = window.innerWidth / 2;\n    var windowHalfY = window.innerHeight / 2;\n\n    init();\n    animate();\n\n    function init() {\n\n        container = document.createElement('div');\n        document.getElementById(\"dots\").appendChild(container);\n\n        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);\n        camera.position.z = 10000;\n\n        scene = new THREE.Scene();\n\n        particles = new Array();\n\n        var PI2 = Math.PI * 2;\n        var material = new THREE.SpriteCanvasMaterial({\n\n            color: 0x000000,\n            program: function program(context) {\n\n                context.beginPath();\n                context.arc(0, 0, 0.5, 0, PI2, true);\n                context.fill();\n            }\n\n        });\n\n        var i = 0;\n\n        for (var ix = 0; ix < AMOUNTX; ix++) {\n\n            for (var iy = 0; iy < AMOUNTY; iy++) {\n\n                particle = particles[i++] = new THREE.Sprite(material);\n                particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;\n                particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;\n                scene.add(particle);\n            }\n        }\n\n        renderer = new THREE.CanvasRenderer();\n        renderer.setPixelRatio(window.devicePixelRatio);\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0xffffff, 0);\n        container.appendChild(renderer.domElement);\n\n        window.addEventListener('resize', onWindowResize, false);\n    }\n\n    function onWindowResize() {\n\n        windowHalfX = window.innerWidth / 2;\n        windowHalfY = window.innerHeight / 2;\n\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n\n        renderer.setSize(window.innerWidth, window.innerHeight);\n    }\n\n    function animate() {\n\n        requestAnimationFrame(animate);\n\n        render();\n    }\n\n    function render() {\n\n        camera.position.set(0, 355, 122);\n\n        var i = 0;\n\n        for (var ix = 0; ix < AMOUNTX; ix++) {\n\n            for (var iy = 0; iy < AMOUNTY; iy++) {\n\n                particle = particles[i++];\n                particle.position.y = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;\n                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;\n            }\n        }\n\n        renderer.render(scene, camera);\n\n        count += 0.1;\n    }\n}\n\nmodule.exports = dotsAnimation;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL2RvdHNBbmltYXRpb24uanM/NjFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkb3RzQW5pbWF0aW9uKCkge1xuICB2YXIgU0VQQVJBVElPTiA9IDEwMCwgQU1PVU5UWCA9IDEwMCwgQU1PVU5UWSA9IDQwO1xuXG4gIHZhciBjb250YWluZXI7XG4gIHZhciBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcbiAgdmFyIHBhcnRpY2xlcywgcGFydGljbGUsIGNvdW50ID0gMDtcbiAgdmFyIG1vdXNlWCA9IDAsIG1vdXNlWSA9IDA7XG4gIHZhciB3aW5kb3dIYWxmWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgdmFyIHdpbmRvd0hhbGZZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICBpbml0KCk7XG4gIGFuaW1hdGUoKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIpLmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblxuICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDAwO1xuXG4gICAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgICBwYXJ0aWNsZXMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgdmFyIFBJMiA9IE1hdGguUEkgKiAyO1xuICAgICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLlNwcml0ZUNhbnZhc01hdGVyaWFsKCB7XG5cbiAgICAgICAgICBjb2xvcjogMHgwMDAwMDAsXG4gICAgICAgICAgcHJvZ3JhbTogZnVuY3Rpb24gKCBjb250ZXh0ICkge1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKCAwLCAwLCAwLjUsIDAsIFBJMiwgdHJ1ZSApO1xuICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgICAgICAgIH1cblxuICAgICAgfSApO1xuXG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIGZvciAoIHZhciBpeCA9IDA7IGl4IDwgQU1PVU5UWDsgaXggKysgKSB7XG5cbiAgICAgICAgICBmb3IgKCB2YXIgaXkgPSAwOyBpeSA8IEFNT1VOVFk7IGl5ICsrICkge1xuXG4gICAgICAgICAgICAgIHBhcnRpY2xlID0gcGFydGljbGVzWyBpICsrIF0gPSBuZXcgVEhSRUUuU3ByaXRlKCBtYXRlcmlhbCApO1xuICAgICAgICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbi54ID0gaXggKiBTRVBBUkFUSU9OIC0gKCAoIEFNT1VOVFggKiBTRVBBUkFUSU9OICkgLyAyICk7XG4gICAgICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uLnogPSBpeSAqIFNFUEFSQVRJT04gLSAoICggQU1PVU5UWSAqIFNFUEFSQVRJT04gKSAvIDIgKTtcbiAgICAgICAgICAgICAgc2NlbmUuYWRkKCBwYXJ0aWNsZSApO1xuXG4gICAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLkNhbnZhc1JlbmRlcmVyKCk7XG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHhmZmZmZmYsIDApO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlICk7XG4gIH1cblxuICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcblxuICAgICAgd2luZG93SGFsZlggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICB3aW5kb3dIYWxmWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xuXG4gICAgICByZW5kZXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcblxuXG4gICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsMzU1LDEyMik7XG5cbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgZm9yICggdmFyIGl4ID0gMDsgaXggPCBBTU9VTlRYOyBpeCArKyApIHtcblxuICAgICAgICAgIGZvciAoIHZhciBpeSA9IDA7IGl5IDwgQU1PVU5UWTsgaXkgKysgKSB7XG5cbiAgICAgICAgICAgICAgcGFydGljbGUgPSBwYXJ0aWNsZXNbIGkrKyBdO1xuICAgICAgICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbi55ID0gKCBNYXRoLnNpbiggKCBpeCArIGNvdW50ICkgKiAwLjMgKSAqIDUwICkgK1xuICAgICAgICAgICAgICAgICAgKCBNYXRoLnNpbiggKCBpeSArIGNvdW50ICkgKiAwLjUgKSAqIDUwICk7XG4gICAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxlLnggPSBwYXJ0aWNsZS5zY2FsZS55ID0gKCBNYXRoLnNpbiggKCBpeCArIGNvdW50ICkgKiAwLjMgKSArIDEgKSAqIDQgK1xuICAgICAgICAgICAgICAgICAgKCBNYXRoLnNpbiggKCBpeSArIGNvdW50ICkgKiAwLjUgKSArIDEgKSAqIDQ7XG5cbiAgICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XG5cbiAgICAgIGNvdW50ICs9IDAuMTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvdHNBbmltYXRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saWIvZG90c0FuaW1hdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dotsAnimation = __webpack_require__(0);\n\nvar _dotsAnimation2 = _interopRequireDefault(_dotsAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _dotsAnimation2.default)(); // import sayHello from './lib/sayHello.js';\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcbmltcG9ydCBkb3RzQW5pbWF0aW9uIGZyb20gJy4vbGliL2RvdHNBbmltYXRpb24uanMnO1xuZG90c0FuaW1hdGlvbigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7Ozs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);