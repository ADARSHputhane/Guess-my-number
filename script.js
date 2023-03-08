"use strict";
/*
Dom Manipulation Document object model
console.log(document.querySelector(".message").textContent); // Text content can be used to change the text of a queary selector or to write a value
document.querySelector(".message").textContent = "👁️ Correct Number";
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); // value return the value of selector or assign the value
*/

// Handling click event addEventListener();

var secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
var highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);
  // When there is no Number
  if (!guess) {
    // document.querySelector(".message").textContent = "🚫🚫 No Number";
    displayMessage("🚫🚫 No Number");
    //When the NUmber is correct
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🥳 Correct Number !!";
    displayMessage("🥳 Correct Number !!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector(".message").textContent =
         guess > secretNumber ? "Too High" : "Too Low";
         */
      displayMessage(guess > secretNumber ? "Too high" : "Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You Lost the Game";
      displayMessage("You Lost the Game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // Refactring the code
  // When guess is too high
  // else if (guess > secretNumber) {
  //   // if (score > 1) {
  //   //   document.querySelector(".message").textContent = "Too High";
  //   //   score--;
  //   //   document.querySelector(".score").textContent = score;
  //   // } else {
  //   //   document.querySelector(".message").textContent = "You Lost the Game";
  //   //   document.querySelector(".score").textContent = 0;
  //   // }
  //   // When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
