"use strict";

window.addEventListener("DOMContentLoaded", start);

// Global variables

let star = 0;
let end = 100;
let middle = null;
let targetValue;
let guess = null;
let guesses = [];

function start() {
  console.log("Starting game...");

  document.querySelector("#btn-confirm-number").addEventListener("click", enterNumber);
  document.querySelector("#btn-too-low").addEventListener("click", tooLow);
  document.querySelector("#btn-too-high").addEventListener("click", tooHigh);
}

function enterNumber() {
  console.log("enterNumber()");

  // Visually display confirmed number
  targetValue = document.querySelector("#input-number-to-guess").value;
  document.querySelector("#p-confirmed-number").innerHTML = "Answer is: " + targetValue;

  // Initiate guessing
  handleGuess(targetValue);
}

function handleGuess() {
  console.log("handleGuess()");
  console.log("Current guess: " + guess);
  console.log("Current targetValue: " + targetValue);

  // If new guess
  if (guess == null) {
    console.log("newGuess()");
    guess = Math.floor(Math.random() * 100);
    console.log(guess);
  }

  // Check for win
  if (targetValue == guess) {
    console.log("You win!");
    const list = document.querySelector("#guess-list");
    const html = `<li>I guess ${guess} - It is correct!</li>`;
    list.insertAdjacentHTML("beforeend", html);
    return;
  }

  const list = document.querySelector("#guess-list");
  const html = `<li>I guess ${guess} - is it correct?</li>`;
  list.insertAdjacentHTML("beforeend", html);
}

function recieveGuess() {}

function tooLow() {
  console.log("tooLow()");
  star = guess + 1;
  guess = Math.floor((star + end) / 2);
  handleGuess();
}

function tooHigh() {
  console.log("tooHigh()");
  end = guess - 1;
  guess = Math.floor((star + end) / 2);
  handleGuess();
}
