import { Figure } from './Figure';

export class Square extends Figure {
  side: number;
  perimeter: number;
  area: number;

  constructor(name = 'square', pic = './../assets/square.png') {
    super(name, pic);
  }
  getSide() {
    return this.side;
  }
  setSide(value: number) {
    this.side = value;
  }

  getPerimeter() {
    if (this.side > 0) {
      this.perimeter = this.side * 4;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea() {
    if (this.side > 0) {
      this.area = this.side * this.side;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
