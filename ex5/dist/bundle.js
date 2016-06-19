/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by moshemal on 4/11/16.
	 */
	'use strict';
	var vendorA = __webpack_require__(1); 

	var name = "M1";
	console.log(name);
	module.exports = name;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var c = __webpack_require__(2);
	var b = __webpack_require__(3);
	var anotherNameOfB = __webpack_require__(3);
	var somevalue = {a:false};

	'use strict';
	(function(){
	  console.log("vendors/a.js");
	  console.log("global b from vendors/a: ", b);
	  console.log("global c from vendors/a: ", c);
	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	console.log("vendors/c.js");
	var c = "c output";


	/*** EXPORTS FROM exports-loader ***/
	module.exports = c;

/***/ },
/* 3 */
/***/ function(module, exports) {

	
	'use strict';
	console.log("vendors/b.js");
	console.log("this of vendors/b: ");

	var b = "b output";

/***/ }
/******/ ]);