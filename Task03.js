'use strict';

const reverse = (txt) => {
  let letter = prompt(txt);

  return letter.split("").reverse().join("");
}

console.log(reverse('введите слово'));