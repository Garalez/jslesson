'use strict';

const amountBorder = 30000;

const calculate = (amount, qty, promo) => {
  if (qty >= 10) {
    amount -= amount * 0.03;
  }
  if ((amount - amountBorder) > 0) {
    const discount = (amount - amountBorder) * 0.15;
    amount -= discount
  }
  if (promo === 'METHED') {
    const discount = amount * 0.1;
    amount -= discount;
  } else if (promo === 'G3H2Z1' && amount >= 2000) {
    const discount = 500;
    amount -= discount;
  }

  return amount;
}

console.log(`К оплате: ${calculate(31000, 10, 'METHED')} рублей.`)
