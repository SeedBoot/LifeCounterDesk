const getId=function(x){return document.getElementById(x);};
const getClass=function(x){return document.getElementsByClassName(x);};
const getSelector=function(x){return document.querySelector(x);};

function player(player) {
  this.score =        20;
  this.scoreElement = getId("p" + player + "Score");
  this.minus =        getId("p" + player + "minus");
  this.plus =         getId("p" + player + "plus");
  this.minus5 =       getId("p" + player + "minus5");
  this.plus5 =        getId("p" + player + "plus5");
  this.poison = {
    score:        0,
    scoreElement: getId("p" + player + "poisonscore"),
    minus:        getId("p" + player + "poisonminus"),
    plus:         getId("p" + player + "poisonplus")
  };
  this.energy = {
    score:        0,
    scoreElement: getId("p" + player + "energyscore"),
    minus:        getId("p" + player + "energyminus"),
    plus:         getId("p" + player + "energyplus")
  };
  this.minusScore = function() {
    this.score--;
    this.scoreElement.textContent = this.score;
  };
  this.plusScore = function() {
    this.score++;
    this.scoreElement.textContent = this.score;
  };
    this.minus5Score = function() {
    this.score -= 5;
    this.scoreElement.textContent = this.score;
  };
  this.plus5Score = function() {
    this.score += 5;
    this.scoreElement.textContent = this.score;
  };
}

player.minus.onclick = function(e) {
  e.preventDefault();
  this.minusScore();
};

let p1 = new player(1);
let p2 = new player(2);
//player scores, buttons and counters
/*
let p1 = {
  score: 20,
  scoreElement: getId("p1Score"),
  minus: getId("p1minus"),
  plus: getId("p1plus"),
  minus5: getId("p1minus5"),
  plus5: getId("p1plus5"),
  poison: {
    score: 0,
    scoreElement: getId("p1poisonscore"),
    minus: getId("p1poisonminus"),
    plus: getId("p1poisonplus")
  },
  energy: {
    score: 0,
    scoreElement: getId("p1energyscore"),
    minus: getId("p1energyminus"),
    plus: getId("p1energyplus")
  }
};
let p2 = {
  score: 20,
  scoreElement: getId("p2Score"),
  minus: getId("p2minus"),
  plus: getId("p2plus"),
  minus5: getId("p2minus5"),
  plus5: getId("p2plus5"),
  poison: {
    score: 0,
    scoreElement: getId("p2poisonscore"),
    minus: getId("p2poisonminus"),
    plus: getId("p2poisonplus")
  },
  energy: {
    score: 0,
    scoreElement: getId("p2energyscore"),
    minus: getId("p2energyminus"),
    plus: getId("p2energyplus")
  }
};

  //////////////
 /*  -1  +1  */
//////////////

// functions to add or remove score
/*
function minusScore(player) {
  player.score--;
  player.scoreElement.textContent = player.score;
}
function plusScore(player) {
  player.score++;
  player.scoreElement.textContent = player.score;
}

// listeners to change score
p1.minus.onclick = function(e) {
  e.preventDefault();
  minusScore(p1);
};
p1.plus.onclick = function(e) {
  e.preventDefault();
  plusScore(p1);
};
p2.minus.onclick = function(e) {
  e.preventDefault();
  minusScore(p2);
};
p2.plus.onclick = function(e) {
  e.preventDefault();
  plusScore(p2);
};
*/
  //////////////
 /*  -5  +5  */
//////////////

// functions to add or remove score
/*
function minus5Score(player) {
  player.score -= 5;
  player.scoreElement.textContent = player.score;
}
function plus5Score(player) {
  player.score += 5;
  player.scoreElement.textContent = player.score;
}

// listeners to change score
p1.minus5.onclick = function(e) {
  e.preventDefault();
  minus5Score(p1);
};
p1.plus5.onclick = function(e) {
  e.preventDefault();
  plus5Score(p1);
};
p2.minus5.onclick = function(e) {
  e.preventDefault();
  minus5Score(p2);
};
p2.plus5.onclick = function(e) {
  e.preventDefault();
  plus5Score(p2);
};
*/
/* END SCORE BUTTONS */

// define score in html
p1.scoreElement.textContent = p1.score;
p2.scoreElement.textContent = p2.score;

  /////////////////
 /* Toggle Menu */
/////////////////

// Set variables for key elements
let navToggle = getId("button");
let mainNav = getClass("menu");

// loop for both lists either side of the menu
// adding .collapsed to the mainNav(s)
function makeInvisible() {
  for (let i = 0; i < mainNav.length; i++) {
    mainNav[i].classList.add("invisible");
  };

  for (let i = 0; i < mainNav.length; i++) {
    getClass("invisible")[i].style.transition = "ease-out all 0.3s";
  };
}
makeInvisible();

// Establish a function to toggle the class "collapse"
function mainNavToggle() {
  for (var i = 0; i < mainNav.length; i++) {
    mainNav[i].classList.toggle("invisible");
    mainNav[i].classList.toggle("visible");
  }
}

// Add a click event to run the mainNavToggle function
navToggle.addEventListener("click", function(e) {
  e.preventDefault();
  mainNavToggle();
});
/* END MENU TOGGLE */

  ////////////////////
 /* Counter toggle */
////////////////////

p1.poison.scoreElement.textContent = p1.poison.score;
p1.energy.scoreElement.textContent = p1.energy.score;
p2.poison.scoreElement.textContent = p2.poison.score;
p2.energy.scoreElement.textContent = p2.energy.score;

  //////////////////
 /* Reset button */
//////////////////

let reset = getId("reset");

// Resets scores and counters back to default
reset.addEventListener("click", function(e) {
  e.preventDefault();
  p1.score = 20;
  p2.score = 20;
  p1.scoreElement.textContent = p1.score;
  p2.scoreElement.textContent = p2.score;
});
/* END RESET BUTTON */
