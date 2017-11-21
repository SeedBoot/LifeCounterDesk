const getId=function(x){return document.getElementById(x);};
const getClass=function(x){return document.getElementsByClassName(x);};
const getSelector=function(x){return document.querySelector(x);};

function player(player) {
  let play = "p" + player;

  this.score =        20;

  this.scoreElement = getId(play + "Score");
  this.minus =        getId(play + "minus");
  this.plus =         getId(play + "plus");
  this.minus5 =       getId(play + "minus5");
  this.plus5 =        getId(play + "plus5");

  this.poison = {
    score:        0,
    scoreElement: getId(play + "poisonscore"),
    minus:        getId(play + "poisonminus"),
    plus:         getId(play + "poisonplus")
  };

  this.energy = {
    score:        0,
    scoreElement: getId(play + "energyscore"),
    minus:        getId(play + "energyminus"),
    plus:         getId(play + "energyplus")
  };

  /*this.minusScore = function() {
    this.score--;
    this.scoreElement.textContent = this.score;
  };*/
  this.minus.onclick = function() {
    this.score--;
    this.scoreElement.textContent = this.score;
  }.bind(this);

  this.plus.onclick = function() {
    this.score++;
    this.scoreElement.textContent = this.score;
  }.bind(this);

  this.minus5.onclick = function() {
    this.score -= 5;
    this.scoreElement.textContent = this.score;
  }.bind(this);

  this.plus5.onclick = function() {
    this.score += 5;
    this.scoreElement.textContent = this.score;
  }.bind(this);

  this.poison.minus.onclick = function() {
    this.poison.score--;
    this.poison.scoreElement.textContent = this.poison.score;
  }.bind(this);

  this.plus = function() {
    this.poison.score++;
    this.poison.scoreElement.textContent = this.poison.score;
  };

  this.minusEnergy = function() {
    this.energy.score--;
    this.energy.scoreElement.textContent = this.energy.score;
  };
  this.plusEnergy = function() {
    this.energy.score++;
    this.energy.scoreElement.textContent = this.energy.score;
  };
}

let p1 = new player(1);
let p2 = new player(2);

console.log(p1);
console.log(p2);
/* listeners to change score */
/* PLAYER 1 */
/*  -1  +1  */
/*p1.minus.onclick = function(e) {
  e.preventDefault();
  p1.minusScore();
};
p1.plus.onclick = function(e) {
  e.preventDefault();
  p1.plusScore();
};*/

/*  -5  +5  
p1.minus5.onclick = function(e) {
  e.preventDefault();
  p1.minus5Score();
};
p1.plus5.onclick = function(e) {
  e.preventDefault();
  p1.plus5Score();
};
*/
/*p2.minus.onclick = function(e) {
  e.preventDefault();
  p2.minusScore();
};
p2.plus.onclick = function(e) {
  e.preventDefault();
  p2.plusScore();
};

p2.minus5.onclick = function(e) {
  e.preventDefault();
  p2.minus5Score();
};
p2.plus5.onclick = function(e) {
  e.preventDefault();
  p2.plus5Score();
};*/

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
