"use strict";

let firstCard = 9;
let secondCard = 6;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;

let startBtn = document.querySelector("#start-btn");
let drawBtn = document.querySelector("#new-card");
let msg = document.querySelector("#message-el");

let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

startBtn.addEventListener("click", startGame);

function startGame() {
  cardsEl.textContent = `Cards: ${firstCard} | ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 21) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Whoooooh. You have a bkackjack";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  msg.textContent = message;
}
// startBtn.addEventListener("click", function () {
// });

drawBtn.addEventListener("click", function () {
  let card = 2;
  sum += card;
  startGame();
});
