import { Figure } from './Figure';

export class Triangle extends Figure {
  side1: number;
  side2: number;
  side3: number;
  base: number;
  height: number;
  perimeter: number;
  area: number;

  constructor(
    side1 = 0,
    side2 = 0,
    side3 = 0,
    base = 0,
    height = 0,
    name = 'triangle',
    pic = './../assets/triangle.png'
  ) {
    super(name, pic);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    (this.base = base), (this.height = height), (this.perimeter = 0);
    this.area = 0;
  }
  getside1() {
    return this.side1;
  }
  getside2() {
    return this.side2;
  }
  getside3() {
    return this.side3;
  }
  getbase() {
    return this.side3;
  }
  getheight() {
    return this.side3;
  }

  setside1(value: number) {
    this.side1 = value;
  }
  setside2(value: number) {
    this.side2 = value;
  }
  setside3(value: number) {
    this.side3 = value;
  }
  setBase(value: number) {
    this.base = value;
  }
  setHeight(value: number) {
    this.height = value;
  }

  getPerimeter() {
    if (this.side1 > 0 && this.side2 > 0 && this.side3 > 0) {
      this.perimeter = this.side1 + this.side2 + this.side3;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea() {
    if (this.base > 0 && this.height > 0) {
      this.area = (this.base * this.height) / 2;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
