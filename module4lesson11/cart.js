'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return `${this.calculateItemPrice()}`;
  },
  add(itemsName, itemsCost, itemsQuantity) {
    this.items.push({itemsName, itemsCost, itemsQuantity});
    this.count += itemsQuantity;
  },
  increaseCount(quantity) {
    this.count += quantity;
  },
  set setDiscount(value) {
    if (value === 'METHED') {
      this.discount = 15;
    } else if (value === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  calculateItemPrice() {
    let sum = 0;
    for (const key in this.items) {
      if (this.items.length > 0) {
        const elem = this.items[key];
        sum += elem.itemsQuantity * this.count;
      }
    }
    return sum - (sum * (this.discount / 100));
  },
  clear() {
    while (this.items.length > 0) {
      this.items.pop();
    }
    this.count = 0;
    this.discount = 0;
    return this.items;
  },
  print() {
    const itemsStr = JSON.stringify(this.items);
    console.log(itemsStr);
    return (`итоговая цена со скидкой - ${this.calculateItemPrice()}`);
  },
};


cart.add('телефон', 10, 15);
cart.add('машина', 10, 15);
cart.add('мясорубка', 10, 15);
cart.add('бойлер', 10, 15);
cart.increaseCount(1);
cart.setDiscount = 'METHED';
console.log(cart.items);
console.log(cart.count);
console.log(cart.totalPrice);
// console.log(cart.clear());
console.log(cart.print());
console.log(cart.discount);
