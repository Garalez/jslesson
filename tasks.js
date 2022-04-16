'use strict';

const rain = (Math.random()>=0.5) ? 1 : 0;

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!')
} else {
  console.log('Дождя нет!');
}

{
  const math = +prompt("Введите кол-во баллов по математике:");
  const russian = +prompt("Введите кол-во баллов по русскому языку:");
  const informatics = +prompt("Введите кол-во баллов по информатике:");

  if ((math + russian + informatics) >= 265){
    console.log('Поздравляю, вы поступили на бюджет!');
  }
}

{
  const money = +prompt('Введите сумму кратную 100р');

  if (money % 100){
    console.log('Банкомат может выдать только купюры номиналом 100р');
  } else if (isNaN(money)) {
    console.log('Ошибка ввода данных');
  } else {
    console.log('Получите ваши деньги');
}
}