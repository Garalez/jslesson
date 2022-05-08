'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set rectangleWidth(value) {
    if (typeof value === 'number') {
      this.width = value;
    } else {
      console.error('Введите число');
    }
  },
  set rectangleHeight(value) {
    if (typeof value === 'number') {
      this.height = value;
    } else {
      console.error('Введите число');
    }
  },
  get rectangleArea() {
    return `Площадь прямоугольника = ${this.width * this.height}см.`;
  },
  get rectanglePerimeter() {
    return `Периметр прямоугольника = ${(this.width + this.height) * 2}см.`;
  },
};

rectangle.rectangleWidth = 10;
rectangle.rectangleHeight = 5;
console.log(rectangle.width);
console.log(rectangle.rectangleArea);
console.log(rectangle.rectanglePerimeter);
