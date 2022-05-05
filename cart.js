'use strict';

const cart = {
  items: [],
  count: 0,
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
  calculateItemPrice() {
    let sum = 0;
    for (const key in this.items) {
      if (this.items.length > 0) {
        const elem = this.items[key];
        sum += elem.itemsQuantity * this.count;
      }
    }
    return sum;
  },
  clear() {
    while (this.items.length > 0) {
      this.items.pop();
    }
    this.count = 0;
    return this.items;
  },
  print() {
    const itemsStr = JSON.stringify(this.items);
    console.log(itemsStr);
    return (`итоговая цена - ${this.calculateItemPrice()}`);
  },
};


cart.add('телефон', 10, 15);
cart.add('машина', 10, 15);
cart.add('мясорубка', 10, 15);
cart.add('бойлер', 10, 15);
cart.increaseCount(1);
console.log(cart.items);
console.log(cart.count);
console.log(cart.totalPrice);
// console.log(cart.calculateItemPrice());
// console.log(cart.clear());
console.log(cart.print());
