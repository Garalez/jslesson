'use strict';

const cart = {
  items : [],
  totalPrice : 0,
  count : 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(itemsName, itemsCost, itemsQuantity) {
    this.items.push({itemsName, itemsCost, itemsQuantity});
    this.totalPrice = itemsCost * itemsQuantity;
    this.count += itemsQuantity;
  },
  increaseCount(quantity) {
    this.count += quantity;
  },
  calculateItemPrice() {
    let sum = 0;
    for (let key in this.items) {
      const elem = this.items[key];
      sum += elem.itemsQuantity * this.count;
    }
    this.totalPrice = sum;
    return sum;
  },
  clear() {
    while(this.items.length > 0) {
      this.items.pop();
    }
    this.totalPrice = 0;
    this.count = 0;
    return this.items;
  },
  print() {
    const itemsStr = JSON.stringify(this.items);
    console.log(itemsStr);
    return (`итоговая цена - ${this.totalPrice}`);
  },
}



cart.add('телефон', 10, 15);
cart.add('машина', 10, 15);
cart.add('мясорубка', 10, 15);
cart.add('бойлер', 10, 15);
cart.increaseCount(1);
console.log(cart.items);
console.log(cart.count);
console.log(cart.totalPrice);
console.log(cart.calculateItemPrice());
// console.log(cart.clear());
console.log(cart.print());
