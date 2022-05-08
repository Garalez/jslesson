'use strict';

let numberSelected = (Math.random() * 101);
numberSelected = Math.round(numberSelected);
console.log(numberSelected);
alert('Введите число от 1 до 100');

const guessNumber = () => {
  const numberToGuess = +prompt('Введите число');
  if (!isNaN(numberToGuess) && numberToGuess >= 1) {
    if (numberToGuess < numberSelected) {
      alert('Больше!');
    } else if (numberToGuess > numberSelected) {
      alert('Меньше!');
    } else if (numberToGuess === numberSelected) {
      alert('Правильно!');
      return;
    }
  } else {
    alert('Можно вводить только числа от 1 до 100');
    return;
  }
  return guessNumber();
};

guessNumber();
