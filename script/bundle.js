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
  this.minus.addEventListener("click", function () {
    this.score--;
    this.scoreElement.textContent = this.score;
  }.bind(this));
  this.plus.addEventListener("click", function () {
    this.score++;
    this.scoreElement.textContent = this.score;
  }.bind(this));
  this.minus5.addEventListener("click", function () {
    this.score -= 5;
    this.scoreElement.textContent = this.score;
  }.bind(this));
  this.plus5.addEventListener("click", function () {
    this.score += 5;
    this.scoreElement.textContent = this.score;
  }.bind(this));
  this.poison.minus.addEventListener("click", function () {
    this.poison.score--;
    this.poison.scoreElement.textContent = this.poison.score;
  }.bind(this));
  this.poison.plus.addEventListener("click", function () {
    this.poison.score++;
    this.poison.scoreElement.textContent = this.poison.score;
  }.bind(this));
  this.energy.minus.addEventListener("click", function () {
    this.energy.score--;
    this.energy.scoreElement.textContent = this.energy.score;
  }.bind(this));
  this.energy.plus.addEventListener("click", function () {
    this.energy.score++;
    this.energy.scoreElement.textContent = this.energy.score;
  }.bind(this));
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
// target areas or menus
var mainNav = document.getElementsByClassName("menu");
var poisonTally = document.getElementsByClassName("poisontally");
var energyTally = document.getElementsByClassName("energytally");

var menuFunction = {
  forceInvisible: // Make target element invisble
  function forceInvisible(el) {
    for (var i = 0; i < el.length; i++) {
      el[i].classList.add("invisible");
    };
    for (var _i = 0; _i < el.length; _i++) {
      document.getElementsByClassName("invisible")[_i].style.transition = "ease-out all 0.3s";
    };
  },
  toggleVisible: // Establish a function to toggle the class "collapse"
  function toggleVisible(el) {
    for (var i = 0; i < el.length; i++) {
      el[i].classList.toggle("invisible");
    }
  }

  /*const bundleFunction = function() {
  
  };*/
};menuFunction.forceInvisible(mainNav);
menuFunction.forceInvisible(poisonTally);
menuFunction.forceInvisible(energyTally);

// Add a click event to run the toggleVisible function
navToggle.addEventListener("click", function (e) {
  e.preventDefault();
  menuFunction.toggleVisible(mainNav);
});
poisonButton.addEventListener("click", function (e) {
  e.preventDefault();
  menuFunction.toggleVisible(poisonTally);
});
energyButton.addEventListener("click", function (e) {
  e.preventDefault();
  menuFunction.toggleVisible(energyTally);
});
/* END MENU TOGGLE */

/* Reset button */
//////////////////

var reset = document.getElementById("reset");

// Resets scores and counters back to default
reset.addEventListener("click", function (e) {
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
});
/* END RESET BUTTON */

/***/ })
/******/ ]);