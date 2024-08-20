"use strict";
/*/ introduction of DOM
// query selector
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";
// document.querySelector(".message").textContent = "";

document.querySelector(".number-show").textContent = 13;
document.querySelector(".score").textContent = 18;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

// Event listener - when our code reacts to something that happens in the DOM,we need to use an event listener.*/

// In addeventlistener function we must pass two arguments event and event handler function

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // when there is no number
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!☹";
    displayMessage("No number!☹");
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct number!🎉";
    displayMessage("Correct number!🎉");
    document.querySelector(".number-show").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#62b948";
    document.querySelector(".number-show").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      // guess > secretNumber ? "Guess is too high!" : "Guess is too low! ";
      displayMessage(
        guess > secretNumber ? "Guess is too high!" : "Guess is too low! "
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "YOU LOST THE GAME!";
      displayMessage("YOU LOST THE GAME!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// when we want that the background change color everytime user did right guess ,for that we have to manupulate CSS style: for this we have to write some instructions under snippet 'when the user wins' 1. select whole body of the page 2. write style property with queryselector 3.the property ill be in camel case and the value wil e under quotes as string

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-show").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(201, 71, 97)";
  document.querySelector(".number-show").style.width = "16rem";
});

// refactoring meaning restructure the code but without changing how it works.
