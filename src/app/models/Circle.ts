import { Figure } from './Figure';

export class Circle extends Figure {
  raduis: number;
  perimeter: number;
  area: number;

  constructor(name = 'circle', pic = './../assets/circle.png') {
    super(name, pic);
  }
  getraduis() {
    return this.raduis;
  }

  setraduis(value: number) {
    this.raduis = value;
  }

  getPerimeter() {
    if (this.raduis > 0) {
      this.perimeter = this.raduis * Math.PI;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea() {
    if (this.raduis > 0) {
      this.area = this.raduis * this.raduis * Math.PI;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
