"use strict";
// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 9;
let secondCard = 6;
let sum = firstCard + secondCard + 6;
let hasBlackJack = false;
let isAlive = true;
let message;
// console.log(`The sum of the ${firstCard} and ${secondCard} is ${sum}`);

console.log(message);
// console.log(hasBlackJack);
// console.log(isAlive);

let startBtn = document.querySelector("#start-btn");
let msg = document.querySelector("#message-el");

startBtn.addEventListener("click", function () {
  if (sum < 21) {
    message = "Do you want to draw another card?";
    msg.textContent = message;
  } else if (sum === 21) {
    message = "Whoooooh. You have a bkackjack";
    msg.textContent = message;
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    msg.textContent = message;
    isAlive = false;
  }
});
