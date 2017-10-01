const getId=function(x){return document.getElementById(x);}
const getClass=function(x){return document.getElementsByClassName(x);}
const getSelector=function(x){return document.querySelector(x);}

//player scores and buttons
let p1 = {
  score: 20,
  scoreElement: getId("p1Score"),
  minus: getId("p1minus"),
  plus: getId("p1plus")
}
let p2 = {
  score: 20,
  scoreElement: getId("p2Score"),
  minus: getId("p2minus"),
  plus: getId("p2plus")
}

// define score in html
p1.scoreElement.textContent = p1.score;
p2.scoreElement.textContent = p2.score;

function minusScore(player) {
  player.score--;
  player.scoreElement.textContent = player.score;
}
function plusScore(player) {
  player.score++;
  player.scoreElement.textContent = player.score;
}

// functions to add or remove score
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

////////////////////////////////////
/*///////// Toggle Menu /////////*/
//////////////////////////////////
// Set variables for key elements
var navToggle = getId('button');
var mainNav = getClass('menu');

// loop for both lists either side of the menu
// adding .collapsed to the mainNav(s)
for (var i = 0; i < mainNav.length; i++) {
  mainNav[i].classList.add('invisible');
};

for (var i = 0; i < mainNav.length; i++) {
  getClass('invisible')[i].style.transition = 'ease-out all 0.3s';
};

// Establish a function to toggle the class "collapse"
function mainNavToggle() {
  for (var i = 0; i < mainNav.length; i++) {
    mainNav[i].classList.toggle('invisible');
    mainNav[i].classList.toggle('visible');
  }
}

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', function(e) {
  e.preventDefault();
  mainNavToggle();
});
/* END MENU TOGGLE */

//////////////////////////
/* Toggle Counter menu */
////////////////////////


