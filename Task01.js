'use strict';

const getConverter = money => {
  let resultMoney = prompt(money);

  resultMoney *= 1.2;

  resultMoney *= 73; 

  return (`Количество в рублях - ${resultMoney}`);
}

console.log(getConverter('Введите сумму в евро'));
