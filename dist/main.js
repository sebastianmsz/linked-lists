/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Linked-list.js":
/*!****************************!*\
  !*** ./src/Linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\nfunction LinkedList() {\n  this.head = null;\n  this.append = function (data) {\n    let node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    if (!this.head) {\n      this.head = node;\n    } else {\n      let current = this.head;\n      while (current.next) {\n        current = current.next;\n      }\n      current.next = node;\n    }\n  };\n  this.prepend = function (data) {\n    let node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    node.next = this.head;\n    this.head = node;\n  };\n  this.size = function () {\n    let count = 0;\n    let current = this.head;\n    while (current) {\n      count++;\n      current = current.next;\n    }\n    return count;\n  };\n  this.getHead = function () {\n    return this.head;\n  };\n  this.getTail = function () {\n    let current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    return current;\n  };\n  this.at = function (index) {\n    if (index < 0 || index >= this.size()) {\n      throw new Error('Index out of bounds');\n    }\n    let count = 0;\n    let current = this.head;\n    while (current) {\n      if (count === index) {\n        return current;\n      }\n      count++;\n      current = current.next;\n    }\n    return null;\n  };\n  this.pop = function () {\n    if (!this.head) {\n      return;\n    }\n    if (!this.head.next) {\n      this.head = null;\n      return;\n    }\n    let current = this.head;\n    while (current.next.next) {\n      current = current.next;\n    }\n    current.next = null;\n    return;\n  };\n  this.contains = function (data) {\n    let current = this.head;\n    while (current) {\n      if (current.data === data) {\n        return true;\n      }\n      current = current.next;\n    }\n    return false;\n  };\n  this.find = function (data) {\n    let current = this.head;\n    let index = 0;\n    while (current) {\n      if (current.data === data) {\n        return index;\n      }\n      index++;\n      current = current.next;\n    }\n    return -1;\n  };\n  this.toString = function () {\n    let current = this.head;\n    let str = '';\n    while (current) {\n      str += current.data;\n      if (current.next) {\n        str += ' -> ';\n      }\n      current = current.next;\n    }\n    return str;\n  };\n  this.insertAt = function (index, data) {\n    if (index === 0) {\n      this.prepend(data);\n      return;\n    }\n    let node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    let count = 0;\n    let current = this.head;\n    while (current) {\n      if (count === index - 1) {\n        node.next = current.next;\n        current.next = node;\n        return;\n      }\n      count++;\n      current = current.next;\n    }\n  };\n  this.removeAt = function (index) {\n    if (index === 0) {\n      this.head = this.head.next;\n      return;\n    }\n    let count = 0;\n    let current = this.head;\n    while (current) {\n      if (count === index - 1) {\n        current.next = current.next.next;\n        return;\n      }\n      count++;\n      current = current.next;\n    }\n  };\n}\n\n//# sourceURL=webpack://web-app-template/./src/Linked-list.js?");

/***/ }),

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nfunction Node(data) {\n  this.data = data;\n  this.next = null;\n}\n\n//# sourceURL=webpack://web-app-template/./src/Node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Linked-list */ \"./src/Linked-list.js\");\n\n\n//test\nlet ll = new _Linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nll.append(1);\nll.append(2);\nll.append(3);\nll.prepend(0);\nconsole.log(ll.size());\nconsole.log(ll.getHead());\nconsole.log(ll.getTail());\nconsole.log(ll.at(2));\nll.pop();\nconsole.log(ll.contains(2));\nconsole.log(ll.contains(3));\nconsole.log(ll.find(2));\nconsole.log(ll.toString());\nll.insertAt(2, 5);\nll.removeAt(1);\nconsole.log(ll.toString());\n\n//# sourceURL=webpack://web-app-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;