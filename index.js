"use strict";
// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 9;
let secondCard = 6;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
// console.log(`The sum of the ${firstCard} and ${secondCard} is ${sum}`);

if (sum <= 21) {
  message = "Do you want to draw another card?";
} else if (sum === 21) {
  message = "Whoooooh. You have a bkackjack";
  hasBlackJack = true;
} else {
  message = "You are out of the game";
  isAlive = false;
}
console.log(message);
// console.log(hasBlackJack);
// console.log(isAlive);

let startBtn = document.querySelector("#start-btn");
console.log(startBtn);
