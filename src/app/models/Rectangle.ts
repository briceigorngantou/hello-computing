import { Figure } from './Figure';

export class Rectangle extends Figure {
  width: number;
  length: number;
  perimeter: number;
  area: number;

  constructor(
    width = 0,
    length = 0,
    name = 'rectangle',
    pic = 'fa fa-square-o'
  ) {
    super(name, pic);
    this.width = width;
    this.length = length;
    this.perimeter = 0;
    this.area = 0;
  }
  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  setWidth(value: number) {
    this.width = value;
  }

  setLength(value: number) {
    this.length = value;
  }

  getPerimeter() {
    if (
      typeof this.width === 'number' &&
      typeof this.length === 'number' &&
      this.width > 0 &&
      this.length > 0
    ) {
      this.perimeter = (this.width + this.length) * 2;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea() {
    if (
      typeof this.width === 'number' &&
      typeof this.length === 'number' &&
      this.width > 0 &&
      this.length > 0
    ) {
      this.area = this.width * this.length;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
