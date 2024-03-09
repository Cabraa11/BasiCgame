'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Funcion for: document.querySelector('.message').textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Funcion for: document.querySelector('.score').textContent = score;
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// Funcion for: document.querySelector('.number').textContent = SecretNumber;
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number');

    // When Player Wins
  } else if (guess === SecretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    displayNumber(SecretNumber);
    // also display the highscore when the player wins
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    /* // When guess is too high
  } else if (guess > SecretNumber) {
    if (score > 1) {
      displayMessage('Number is too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
    */
    // When guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(
        guess > SecretNumber ? 'Number is too high' : 'Number is too low'
      );
      score--;
      displayScore(score);
    } else {
      document.querySelector('.message').textContent = 'Game over';
      displayScore(0);
    }
  }
  /* // When guess is too low
   else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

// When player clicks again, restart the game, and restore the score & number variables
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(score);
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
