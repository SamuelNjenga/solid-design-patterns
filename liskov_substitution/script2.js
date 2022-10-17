class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
}

class Square extends Shape {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseShapeWidth(shape) {
  shape.setWidth(shape.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseShapeWidth(rectangle1);
increaseShapeWidth(square);

console.log(rectangle1.area());
console.log(square.area());
