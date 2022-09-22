import { Figure } from './Figure';

export class Circle extends Figure {
  raduis: number;
  perimeter: number;
  area: number;

  constructor(raduis = 0, name = 'circle', pic = 'fa fa-circle-thin') {
    super(name, pic);
    this.raduis = raduis;
    this.perimeter = 0;
    this.area = 0;
  }
  getraduis() {
    return this.raduis;
  }

  setraduis(value: number) {
    this.raduis = value;
  }

  getPerimeter() {
    if (this.raduis && this.raduis > 0) {
      this.perimeter = this.raduis * Math.PI;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea() {
    if (this.raduis && this.raduis > 0) {
      this.area = this.raduis * this.raduis * Math.PI;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
