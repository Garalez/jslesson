'use strict';

const productTitle = "футболка";
const productQuantity = +'2';
const productCategory = "бельё";
const productPrice = +'15';

console.log("productTitle", productTitle);
console.log("productQuantity", productQuantity);
console.log("productCategory", productCategory);
console.log("productPrice", productPrice);
console.log(productQuantity * productPrice);

{
const title = prompt("Наименование товара");
const quantity = +prompt("Количество товара");
const category = prompt("Категория товара");
const price = +prompt("Цена товара");

console.log('"На складе ' + quantity + ' единицы товара ' + '"' + title + '"' + ' на сумму ' + quantity * price + ' деревянных"');
console.log(typeof quantity);
console.log(typeof price);
}