"use strict";

window.addEventListener("DOMContentLoaded", start);

// Global variables

let result = null;
let guess = null;
let guesses = [];
let isButtonsInitialized = false;

function start() {
  console.log("Starting game...");

  document.querySelector("#btn-confirm-number").addEventListener("click", enterNumber);
}

function enterNumber() {
  console.log("enterNumber()");

  // Visually display confirmed number
  result = document.querySelector("#input-number-to-guess").value;
  document.querySelector("#p-confirmed-number").innerHTML = result;

  // Initiate guessing
  handleGuess();
}

function handleGuess() {
  console.log("handleGuess()");
  console.log("Current guess: " + guess);

  // Check for win
  if (result == guess) {
    console.log("You win!");
    return;
  }

  // If new guess
  if (guess == null) {
    console.log("newGuess()");
    guess = Math.floor(Math.random() * 100);
    console.log(guess);
  }

  // Wait for user feedback
  if (!isButtonsInitialized) {
    document.querySelector("#btn-too-low").addEventListener("click", tooLow);
    document.querySelector("#btn-too-high").addEventListener("click", tooHigh);
    isButtonsInitialized = true;
  }
}

function tooLow() {
  console.log("tooLow()");
  guess++;
  handleGuess();
}

function tooHigh() {
  console.log("tooHigh()");
  guess--;
  handleGuess();
}
