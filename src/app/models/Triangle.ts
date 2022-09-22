import { Figure } from './Figure';

export class Triangle extends Figure {
  side1: number;
  side2: number;
  side3: number;
  perimeter: number;
  area: number;

  constructor(
    side1 = 0,
    side2 = 0,
    side3 = 0,
    name = 'triangle',
    pic = 'fa fa-circle-thin'
  ) {
    super(name, pic);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.perimeter = 0;
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

  setside1(value: number) {
    this.side1 = value;
  }

  setside2(value: number) {
    this.side2 = value;
  }

  setside3(value: number) {
    this.side3 = value;
  }

  getPerimeter() {
    if (
      typeof this.side1 == 'number' &&
      typeof this.side2 == 'number' &&
      typeof this.side3 == 'number' &&
      this.side1 > 0 &&
      this.side2 > 0 &&
      this.side3 > 0
    ) {
      this.perimeter = this.side1 + this.side2 + this.side3;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea(base: number, height: number) {
    if (
      typeof base == 'number' &&
      typeof height == 'number' &&
      base > 0 &&
      height > 0
    ) {
      this.area = (base * height) / 2;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
