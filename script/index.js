/* Function to create player objects to keep score/ etc. */
function Player(player) {
  let play = "p" + player;
  // Keeping score...
  this.score =        20;
  this.scoreElement = document.getElementById(play + "Score");
  this.minus =        document.getElementById(play + "minus");
  this.plus =         document.getElementById(play + "plus");
  this.minus5 =       document.getElementById(play + "minus5");
  this.plus5 =        document.getElementById(play + "plus5");
  this.poison = {
    score:        0,
    scoreElement: document.getElementById(play + "poisonscore"),
    minus:        document.getElementById(play + "poisonminus"),
    plus:         document.getElementById(play + "poisonplus")
  };
  this.energy = {
    score:        0,
    scoreElement: document.getElementById(play + "energyscore"),
    minus:        document.getElementById(play + "energyminus"),
    plus:         document.getElementById(play + "energyplus")
  };
  // Initialise scores in HTML
  this.scoreElement.textContent = this.score;
  this.poison.scoreElement.textContent = this.poison.score;
  this.energy.scoreElement.textContent = this.energy.score;
  // Listeners for each score button
  this.minus.addEventListener("click", function() {
    this.score--;
    this.scoreElement.textContent = this.score;
  }.bind(this) );
  this.plus.addEventListener("click", function() {
    this.score++;
    this.scoreElement.textContent = this.score;
  }.bind(this) );
  this.minus5.addEventListener("click", function() {
    this.score -= 5;
    this.scoreElement.textContent = this.score;
  }.bind(this) );
  this.plus5.addEventListener("click", function() {
    this.score += 5;
    this.scoreElement.textContent = this.score;
  }.bind(this) );
  this.poison.minus.addEventListener("click", function() {
    this.poison.score--;
    this.poison.scoreElement.textContent = this.poison.score;
  }.bind(this) );
  this.poison.plus.addEventListener("click", function() {
    this.poison.score++;
    this.poison.scoreElement.textContent = this.poison.score;
  }.bind(this) );
  this.energy.minus.addEventListener("click", function() {
    this.energy.score--;
    this.energy.scoreElement.textContent = this.energy.score;
  }.bind(this) );
  this.energy.plus.addEventListener("click", function() {
    this.energy.score++;
    this.energy.scoreElement.textContent = this.energy.score;
  }.bind(this) );
}

let p1 = new Player(1);
let p2 = new Player(2);
/* END PLAYER CREATION */


 /* Toggle Menu */
/////////////////

// Set variables for key elements
// Buttons
const navToggle    = document.getElementById("button");
const poisonButton = document.getElementById("poison");
const energyButton = document.getElementById("energy");
const keyBtn       = [navToggle, poisonButton, energyButton];
// target areas or menus
const mainNav      = document.getElementsByClassName("menu");
const poisonTally  = document.getElementsByClassName("poisontally");
const energyTally  = document.getElementsByClassName("energytally");
const keyArea      = [mainNav, poisonTally, energyTally];

let menuFunction = {
  forceInvisible: // Make target element invisble
    function(el) {
      for (let i = 0; i < el.length; i++) {
        el[i].classList.add("invisible");
      };
      for (let i = 0; i < el.length; i++) {
        document.getElementsByClassName("invisible")[i].style.transition = "ease-out all 0.3s";
      };
  },
  toggleVisible: // Establish a function to toggle the class "collapse"
    function(el) {
      for (var i = 0; i < el.length; i++) {
        el[i].classList.toggle("invisible");
      }
  }
}

const bundleFunction = function() {
  for (let i = 0; i < keyBtn.length; i++) {
    menuFunction.forceInvisible(keyArea[i])
    ///////////////////////////////////////////////////
  }
};

menuFunction.forceInvisible(mainNav);
menuFunction.forceInvisible(poisonTally);
menuFunction.forceInvisible(energyTally);

// Add a click event to run the toggleVisible function
navToggle.addEventListener("click", function(e) {
  e.preventDefault();
  menuFunction.toggleVisible(mainNav);
});
poisonButton.addEventListener("click", function(e) {
  e.preventDefault();
  menuFunction.toggleVisible(poisonTally);
});
energyButton.addEventListener("click", function(e) {
  e.preventDefault();
  menuFunction.toggleVisible(energyTally);
});
/* END MENU TOGGLE */

 /* Reset button */
//////////////////

let reset = document.getElementById("reset");

// Resets scores and counters back to default
reset.addEventListener("click", function(e) {
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
