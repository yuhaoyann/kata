let prompt = require("prompt-sync")();
const guessNumber = function (number) {
  let guessed = [];
  let n = 0;
  let answer = prompt("Guess a number: ");
  answer = Number(answer);
  while (answer !== number) {
    if (isNaN(answer)) {
      console.log('Not a Number! Try again!');
    } else {
      if (guessed.includes(answer)) {
        console.log('Already Guessed!');
      } else if (answer > number) {
        console.log('Too High!');
        guessed.push(answer);
        n++;
      } else if (answer < number) {
        console.log('Too Small');
        guessed.push(answer);
        n++;
      }
    }
    answer = prompt("Guess a number: ");
    answer = Number(answer);
  }
  n++;
  return 'You got it! You took ' + n + ' attempts!';
}
let number = Math.floor((Math.random()*100));
console.log(number);
console.log(guessNumber(number));