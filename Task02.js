'use strict';

const firstLetter = text => {
  let letter = prompt(text);

  return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
}

console.log(firstLetter('Напишите слово'));
