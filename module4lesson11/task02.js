'use strict';

const count = [];
const numbers = arr => {
  console.log('arr: ', arr);
  const result = arr.reduce((a, b) => a + b, 0);
  console.log('result: ', result);
  if (result < 50) {
    const num = Math.floor(Math.random() * 11);
    console.log('num: ', num);
    arr.push(num);
  } else {
    return arr;
  }
  return numbers(arr);
};

numbers(count);
