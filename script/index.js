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
  this.minus.onclick = () => {
    this.score--;
    this.scoreElement.textContent = this.score;
  };
  this.plus.onclick = () => {
    this.score++;
    this.scoreElement.textContent = this.score;
  };

  this.minus5.onclick = () => {
    this.score -= 5;
    this.scoreElement.textContent = this.score;
  };
  this.plus5.onclick = () => {
    this.score += 5;
    this.scoreElement.textContent = this.score;
  };

  this.poison.minus.onclick = () => {
    this.poison.score--;
    this.poison.scoreElement.textContent = this.poison.score;
  };
  this.poison.plus.onclick = () => {
    this.poison.score++;
    this.poison.scoreElement.textContent = this.poison.score;
  };

  this.energy.minus.onclick = () => {
    this.energy.score--;
    this.energy.scoreElement.textContent = this.energy.score;
  };
  this.energy.plus.onclick = () => {
    this.energy.score++;
    this.energy.scoreElement.textContent = this.energy.score;
  };
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
  forceInvisible: el => { // Make target element invisble
    let i = 0;
    while(i < el.length) {
      el[i].classList.add("invisible");
      document.getElementsByClassName("invisible")[i]
        .style.transition = "ease-out all 0.3s";
      i++;
    };
  },
  toggleVisible: el => { // Establish a function to toggle the class "collapse"
    for (var i = 0; i < el.length; i++) {
      el[i].classList.toggle("invisible");
    }
  }
};

const forceInv = (() => {
  let i = 0;
  while (i < keyArea.length) {
    menuFunction.forceInvisible(keyArea[i]);
    i++;
  }
})();

// Add a click event to run the toggleVisible function
navToggle.onclick    = () => { menuFunction.toggleVisible(mainNav); };
poisonButton.onclick = () => { menuFunction.toggleVisible(poisonTally); };
energyButton.onclick = () => { menuFunction.toggleVisible(energyTally); };
/* END MENU TOGGLE */

 /* Reset button */
//////////////////

const reset = document.getElementById("reset");
// Resets scores and counters back to default
reset.onclick = e => {
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

const colour = document.getElementById("colour");

colour.onclick = () => {
  
};
