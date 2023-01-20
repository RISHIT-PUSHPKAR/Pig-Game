<<<<<<< HEAD
"use strict";

// SELECTING BUTTON THE ELEMENTS

const reset_btn = document.querySelector(".reset");
const roll_btn = document.querySelector(".roll");
const hold_btn = document.querySelector(".hold");

// SELECTING SCORE DISPLAYING ELEMENTS

const winner_confetti_1 = document.querySelector("#confetti-1");
const winner_confetti_2 = document.querySelector("#confetti-2");
const winning_player = document.querySelector(".winner");
const arrow_1 = document.querySelector(".la");
const arrow_2 = document.querySelector(".ra");
const rolling_dice = document.querySelector(".rd"); // selecting rolling dice

let p1_currentScore = document.querySelector(".p1-currentScore");
let p2_currentScore = document.querySelector(".p2-currentScore");

let p1_finalScore = document.querySelector(".p1-finalScore");
let p2_finalScore = document.querySelector(".p2-finalScore");

// INITIAL CONDITIONS

winner_confetti_1.classList.add("hidden");
winner_confetti_2.classList.add("hidden");
winning_player.classList.add("hidden");

let scores = [0, 0];
let active_player = 1;
let current_score = 0;
p1_currentScore.textContent = 0;
p2_currentScore.textContent = 0;

p1_finalScore.textContent = 0;
p2_finalScore.textContent = 0;

arrow_1.classList.remove("hidden");
arrow_2.classList.add("hidden");

let dices = document.querySelectorAll(".dice"); //selecting all images of dice

for (let i = 0; i < dices.length; i++) {
  // iterating and adding hidden class
  dices[i].classList.add("hidden");
}

// ROLLING ON/OFF FUNCTION

function rolling_on() {
  rolling_dice.classList.remove("hidden");
}

function rolling_off() {
  rolling_dice.classList.add("hidden");
}

function showing_dice() {
  rolling_off();
  let random_num = Math.floor(Math.random() * 6) + 1;

  function display_off() {
    // adding hidden class to the dice
    dices[random_num].classList.add("hidden");
  }

  dices[random_num].classList.remove("hidden");
  setTimeout(display_off, 150);
  setTimeout(rolling_on, 150);

  if (random_num !== 1) {
    current_score += random_num;
    document.querySelector(`.p${active_player}-currentScore`).textContent =
      current_score;
  } else {
    document.querySelector(`.p${active_player}-currentScore`).textContent = 0;
    current_score = 0;
    active_player = active_player === 1 ? 2 : 1; // switching player
    arrow_1.classList.toggle("hidden");
    arrow_2.classList.toggle("hidden");
  }
}

function show_final_score() {
  scores[active_player - 1] += current_score;

  if (Math.max(...scores) < 100) {
    document.querySelector(`.p${active_player}-finalScore`).textContent =
      scores[active_player - 1];
    console.log(scores[active_player - 1]);
    current_score = 0;
    document.querySelector(`.p${active_player}-currentScore`).textContent = 0;

    active_player = active_player === 1 ? 2 : 1; // switching player
    arrow_1.classList.toggle("hidden");
    arrow_2.classList.toggle("hidden");
  } else {
    console.log(Math.max(scores));
    document.querySelector(".winner").textContent = `PLAYER-${active_player}`;
    winning_player.classList.remove("hidden");
    winner_confetti_1.classList.remove("hidden");
    winner_confetti_2.classList.remove("hidden");
    document.getElementById("winnerid").style.transform = "scale(2.5)";
    scores[active_player - 1] += current_score;
    document.querySelector(`.p${active_player}-finalScore`).textContent =
      scores[active_player - 1];
  }
}

// if (Math.max(scores) < 100) {
//   console.log(Math.max(scores));
//   winning_player.classList.remove("hidden");
// }
// RESETTING THE GAME FUNCTION

function replay() {
  winner_confetti_1.classList.add("hidden");
  winner_confetti_2.classList.add("hidden");
  winning_player.classList.add("hidden");
  let scores = [0, 0];
  let active_player = 1;
  let current_score = 0;
  p1_currentScore.textContent = 0;
  p2_currentScore.textContent = 0;

  p1_finalScore.textContent = 0;
  p2_finalScore.textContent = 0;

  arrow_1.classList.remove("hidden");
  arrow_2.classList.add("hidden");

  let dices = document.querySelectorAll(".dice"); //selecting all images of dice

  for (let i = 0; i < dices.length; i++) {
    // iterating and adding hidden class
    dices[i].classList.add("hidden");
  }
}

// if (Number(p1_finalScore.textContent) > 100) {
//   winning_player.classList.remove("hidden");
// }

// IMPLEMENTATION

document.querySelector(".roll").addEventListener("mouseover", rolling_on);
document.querySelector(".roll").addEventListener("mouseout", rolling_off);
document.querySelector(".roll").addEventListener("click", showing_dice);
document.querySelector(".hold").addEventListener("click", show_final_score);
document.querySelector(".reset").addEventListener("click", replay);
=======
"use strict";

// SELECTING BUTTON THE ELEMENTS

const reset_btn = document.querySelector(".reset");
const roll_btn = document.querySelector(".roll");
const hold_btn = document.querySelector(".hold");

// SELECTING SCORE DISPLAYING ELEMENTS

const winner_confetti_1 = document.querySelector("#confetti-1");
const winner_confetti_2 = document.querySelector("#confetti-2");
const winning_player = document.querySelector(".winner");
const arrow_1 = document.querySelector(".la");
const arrow_2 = document.querySelector(".ra");
const rolling_dice = document.querySelector(".rd"); // selecting rolling dice

let p1_currentScore = document.querySelector(".p1-currentScore");
let p2_currentScore = document.querySelector(".p2-currentScore");

let p1_finalScore = document.querySelector(".p1-finalScore");
let p2_finalScore = document.querySelector(".p2-finalScore");

// INITIAL CONDITIONS

winner_confetti_1.classList.add("hidden");
winner_confetti_2.classList.add("hidden");
winning_player.classList.add("hidden");

let scores = [0, 0];
let active_player = 1;
let current_score = 0;
p1_currentScore.textContent = 0;
p2_currentScore.textContent = 0;

p1_finalScore.textContent = 0;
p2_finalScore.textContent = 0;

arrow_1.classList.remove("hidden");
arrow_2.classList.add("hidden");

let dices = document.querySelectorAll(".dice"); //selecting all images of dice

for (let i = 0; i < dices.length; i++) {
  // iterating and adding hidden class
  dices[i].classList.add("hidden");
}

// ROLLING ON/OFF FUNCTION

function rolling_on() {
  rolling_dice.classList.remove("hidden");
}

function rolling_off() {
  rolling_dice.classList.add("hidden");
}

function showing_dice() {
  rolling_off();
  let random_num = Math.floor(Math.random() * 6) + 1;

  function display_off() {
    // adding hidden class to the dice
    dices[random_num].classList.add("hidden");
  }

  dices[random_num].classList.remove("hidden");
  setTimeout(display_off, 150);
  setTimeout(rolling_on, 150);

  if (random_num !== 1) {
    current_score += random_num;
    document.querySelector(`.p${active_player}-currentScore`).textContent =
      current_score;
  } else {
    document.querySelector(`.p${active_player}-currentScore`).textContent = 0;
    current_score = 0;
    active_player = active_player === 1 ? 2 : 1; // switching player
    arrow_1.classList.toggle("hidden");
    arrow_2.classList.toggle("hidden");
  }
}

function show_final_score() {
  scores[active_player - 1] += current_score;

  if (Math.max(...scores) < 100) {
    document.querySelector(`.p${active_player}-finalScore`).textContent =
      scores[active_player - 1];
    console.log(scores[active_player - 1]);
    current_score = 0;
    document.querySelector(`.p${active_player}-currentScore`).textContent = 0;

    active_player = active_player === 1 ? 2 : 1; // switching player
    arrow_1.classList.toggle("hidden");
    arrow_2.classList.toggle("hidden");
  } else {
    console.log(Math.max(scores));
    document.querySelector(".winner").textContent = `PLAYER-${active_player}`;
    winning_player.classList.remove("hidden");
    winner_confetti_1.classList.remove("hidden");
    winner_confetti_2.classList.remove("hidden");
    document.getElementById("winnerid").style.transform = "scale(2.5)";
    scores[active_player - 1] += current_score;
    document.querySelector(`.p${active_player}-finalScore`).textContent =
      scores[active_player - 1];
  }
}

// if (Math.max(scores) < 100) {
//   console.log(Math.max(scores));
//   winning_player.classList.remove("hidden");
// }
// RESETTING THE GAME FUNCTION

function replay() {
  winner_confetti_1.classList.add("hidden");
  winner_confetti_2.classList.add("hidden");
  winning_player.classList.add("hidden");
  let scores = [0, 0];
  let active_player = 1;
  let current_score = 0;
  p1_currentScore.textContent = 0;
  p2_currentScore.textContent = 0;

  p1_finalScore.textContent = 0;
  p2_finalScore.textContent = 0;

  arrow_1.classList.remove("hidden");
  arrow_2.classList.add("hidden");

  let dices = document.querySelectorAll(".dice"); //selecting all images of dice

  for (let i = 0; i < dices.length; i++) {
    // iterating and adding hidden class
    dices[i].classList.add("hidden");
  }
}

// if (Number(p1_finalScore.textContent) > 100) {
//   winning_player.classList.remove("hidden");
// }

// IMPLEMENTATION

document.querySelector(".roll").addEventListener("mouseover", rolling_on);
document.querySelector(".roll").addEventListener("mouseout", rolling_off);
document.querySelector(".roll").addEventListener("click", showing_dice);
document.querySelector(".hold").addEventListener("click", show_final_score);
document.querySelector(".reset").addEventListener("click", replay);
>>>>>>> 53016999a2b88e23fae9d04ffa87b81ce3790e8a
