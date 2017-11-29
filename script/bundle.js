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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Function to create player objects to keep score/ etc. */
function Player(player) {
  var _this = this;

  var play = "p" + player;
  // Keeping score...
  this.score = 20;
  this.scoreElement = document.getElementById(play + "Score");
  this.minus = document.getElementById(play + "minus");
  this.plus = document.getElementById(play + "plus");
  this.minus5 = document.getElementById(play + "minus5");
  this.plus5 = document.getElementById(play + "plus5");

  this.poison = {
    score: 0,
    scoreElement: document.getElementById(play + "poisonscore"),
    minus: document.getElementById(play + "poisonminus"),
    plus: document.getElementById(play + "poisonplus")
  };

  this.energy = {
    score: 0,
    scoreElement: document.getElementById(play + "energyscore"),
    minus: document.getElementById(play + "energyminus"),
    plus: document.getElementById(play + "energyplus")
  };

  // Initialise scores in HTML
  this.scoreElement.textContent = this.score;
  this.poison.scoreElement.textContent = this.poison.score;
  this.energy.scoreElement.textContent = this.energy.score;

  // Listeners for each score button
  this.minus.onclick = function () {
    _this.score--;
    _this.scoreElement.textContent = _this.score;
  };
  this.plus.onclick = function () {
    _this.score++;
    _this.scoreElement.textContent = _this.score;
  };

  this.minus5.onclick = function () {
    _this.score -= 5;
    _this.scoreElement.textContent = _this.score;
  };
  this.plus5.onclick = function () {
    _this.score += 5;
    _this.scoreElement.textContent = _this.score;
  };

  this.poison.minus.onclick = function () {
    _this.poison.score--;
    _this.poison.scoreElement.textContent = _this.poison.score;
  };
  this.poison.plus.onclick = function () {
    _this.poison.score++;
    _this.poison.scoreElement.textContent = _this.poison.score;
  };

  this.energy.minus.onclick = function () {
    _this.energy.score--;
    _this.energy.scoreElement.textContent = _this.energy.score;
  };
  this.energy.plus.onclick = function () {
    _this.energy.score++;
    _this.energy.scoreElement.textContent = _this.energy.score;
  };
}
var p1 = new Player(1);
var p2 = new Player(2);
/* END PLAYER CREATION */

/* Toggle Menu */
/////////////////

// Set variables for key elements
// Buttons
var navToggle = document.getElementById("button");
var poisonButton = document.getElementById("poison");
var energyButton = document.getElementById("energy");
var keyBtn = [navToggle, poisonButton, energyButton];
// target areas or menus
var mainNav = document.getElementsByClassName("menu");
var poisonTally = document.getElementsByClassName("poisontally");
var energyTally = document.getElementsByClassName("energytally");
var keyArea = [mainNav, poisonTally, energyTally];

var menuFunction = {
  forceInvisible: function forceInvisible(el) {
    // Make target element invisble
    var i = 0;
    while (i < el.length) {
      el[i].classList.add("invisible");
      document.getElementsByClassName("invisible")[i].style.transition = "ease-out all 0.3s";
      i++;
    };
  },
  toggleVisible: function toggleVisible(el) {
    // Establish a function to toggle the class "collapse"
    for (var i = 0; i < el.length; i++) {
      el[i].classList.toggle("invisible");
    }
  }
};

var forceInv = function () {
  var i = 0;
  while (i < keyArea.length) {
    menuFunction.forceInvisible(keyArea[i]);
    i++;
  }
}();

// Add a click event to run the toggleVisible function
navToggle.onclick = function (e) {
  e.preventDefault();
  menuFunction.toggleVisible(mainNav);
};
poisonButton.onclick = function (e) {
  e.preventDefault();
  menuFunction.toggleVisible(poisonTally);
};
energyButton.onclick = function (e) {
  e.preventDefault();
  menuFunction.toggleVisible(energyTally);
};
/* END MENU TOGGLE */

/* Reset button */
//////////////////

var reset = document.getElementById("reset");

// Resets scores and counters back to default
reset.onclick = function (e) {
  e.preventDefault();
  p1.score = 20;
  p1.poison.score = 0;
  p1.energy.score = 0;
  p2.score = 20;
  p2.poison.score = 0;
  p2.energy.score = 0;
  p1.scoreElement.textContent = p1.score;
  p1.poison.scoreElement.textContent = p1.poison.score;
  p1.energy.scoreElement.textContent = p1.energy.score;
  p2.scoreElement.textContent = p2.score;
  p2.poison.scoreElement.textContent = p2.poison.score;
  p2.energy.scoreElement.textContent = p2.energy.score;
};
/* END RESET BUTTON */

/***/ })
/******/ ]);