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


var colorConfig = {
  blue: '#22559c',
  green: '#79bd8f'

  /* PLAYER CREATION FUNCTION */
};function Player(player) {
  var _this = this;

  var play = "p" + player;
  var num = player;

  // Keeping score...
  this.score = 20;
  this.scoreElement = document.getElementById(play + "Score");
  this.minus = document.getElementById(play + "minus");
  this.plus = document.getElementById(play + "plus");
  this.minus5 = document.getElementById(play + "minus5");
  this.plus5 = document.getElementById(play + "plus5");

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

  this.poison = {
    score: 0,
    scoreElement: document.getElementById(play + "poisonscore"),
    minus: document.getElementById(play + "poisonminus"),
    plus: document.getElementById(play + "poisonplus")
  };

  this.poison.minus.onclick = function () {
    _this.poison.score--;
    _this.poison.scoreElement.textContent = _this.poison.score;
  };
  this.poison.plus.onclick = function () {
    _this.poison.score++;
    _this.poison.scoreElement.textContent = _this.poison.score;
  };

  this.energy = {
    score: 0,
    scoreElement: document.getElementById(play + "energyscore"),
    minus: document.getElementById(play + "energyminus"),
    plus: document.getElementById(play + "energyplus")
  };

  this.energy.minus.onclick = function () {
    _this.energy.score--;
    _this.energy.scoreElement.textContent = _this.energy.score;
  };
  this.energy.plus.onclick = function () {
    _this.energy.score++;
    _this.energy.scoreElement.textContent = _this.energy.score;
  };

  // Initialise scores in HTML
  this.scoreElement.textContent = this.score;
  this.poison.scoreElement.textContent = this.poison.score;
  this.energy.scoreElement.textContent = this.energy.score;

  this.color = {
    element: document.getElementById(play + "theme"),
    target: document.getElementById("player" + num + "bg"),
    update: function update(bgColor, textColor) {
      _this.color.target.style.background = bgColor;
      _this.color.target.style.color = textColor;
    }
  };

  this.color.element.onchange = function () {
    var choice = _this.color.element.value;
    var updoot = _this.color.update;
    switch (choice) {
      case 'white':
        updoot('white', 'black');
        break;
      case 'blue':
        updoot(colorConfig.blue, 'white');
        break;
      case 'black':
        updoot('black', 'white');
        break;
      case 'red':
        updoot('red', 'black');
        break;
      case 'green':
        updoot(colorConfig.green, 'black');
        break;
      case 'purple':
        updoot('purple', 'white');
        break;
      default:
        updoot('white', 'black');
        break;
    }
  };
}

var p1 = new Player(1);
var p2 = new Player(2);

/* TOGGLE MENU */
// Buttons
var navToggle = document.getElementById("button");
var poisonButton = document.getElementById("poison");
var energyButton = document.getElementById("energy");
var keyBtn = [navToggle, poisonButton, energyButton];
// more buttons
var colorButton = document.getElementById("color");
var lifeButton = document.getElementById("life");
// target areas or menus
var mainNav = document.getElementsByClassName("menu");
var poisonTally = document.getElementsByClassName("poisontally");
var energyTally = document.getElementsByClassName("energytally");
var keyArea = [mainNav, poisonTally, energyTally];
// more target areas
var colorMenu = document.getElementsByClassName("colormenu")[0];
var lifeMenu = document.getElementsByClassName("lifemenu")[0];
var keyAreaHide = [colorMenu, lifeMenu];

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
  },
  forceDisplayNone: function forceDisplayNone(el) {
    return el.classList.add("hidden");
  },
  toggleDisplayNone: function toggleDisplayNone(el) {
    return el.classList.toggle("hidden");
  }
};

var forceInv = function () {
  var i = 0;
  while (i < keyArea.length) {
    menuFunction.forceInvisible(keyArea[i]);
    i++;
  }
}();

var forceDispNone = function () {
  var i = 0;
  while (i < keyAreaHide.length) {
    menuFunction.forceDisplayNone(keyAreaHide[i]);
    i++;
  }
}();

// Add a click event to run the toggleVisible function
navToggle.onclick = function () {
  menuFunction.toggleVisible(mainNav);
};
poisonButton.onclick = function () {
  menuFunction.toggleVisible(poisonTally);
};
energyButton.onclick = function () {
  menuFunction.toggleVisible(energyTally);
};

colorButton.onclick = function () {
  menuFunction.toggleDisplayNone(colorMenu);
};
lifeButton.onclick = function () {
  menuFunction.toggleDisplayNone(lifeMenu);
};
/* END MENU TOGGLE */

/* LIFE CHANGER */
var lifeChanger = document.getElementById("lifechanger");

lifeChanger.onchange = function () {
  p1.score = parseInt(lifeChanger.value);
  p2.score = parseInt(lifeChanger.value);
  p1.scoreElement.textContent = p1.score;
  p2.scoreElement.textContent = p2.score;
};

/* RESET BUTTON */
var reset = document.getElementById("reset");

// Resets scores and counters back to default
reset.onclick = function (e) {
  e.preventDefault();
  lifeChanger.value = 20;
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

/***/ })
/******/ ]);