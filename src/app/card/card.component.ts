import { Component, OnInit, Input } from '@angular/core';
import { Square } from '../models/Square';
import { Circle } from '../models/Circle';
import { Rectangle } from '../models/Rectangle';
import { Triangle } from '../models/Triangle';
import { Figure } from './../models/Figure';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}
  square = new Square();
  circle = new Circle();
  rectangle = new Rectangle();
  triangle = new Triangle();
  pictures: Figure[];
  unit: any[];
  showForm = false;
  showForm1 = true;
  showForm2 = true;
  showForm3 = true;
  showForm4 = true;
  picName: string;
  side: number;
  raduis: number;
  length: number;
  width: number;
  side1: number;
  side2: number;
  side3: number;
  device = 'm';
  show = true;
  chekboxPerimeter = true;
  chekboxArea = false;

  ngOnInit(): void {
    this.pictures = [this.square, this.circle, this.rectangle, this.triangle];
    this.unit = [
      { id: 1, name: 'Meters', value: 'm' },
      { id: 2, name: 'Decimeters', value: 'dm' },
      { id: 3, name: 'Centimers', value: 'cm' },
      { id: 4, name: 'Kilometers', value: 'km' },
    ];
  }
  onChange(deviceValue) {
    this.device = deviceValue.value;
  }
  onChangeCheckBox(input) {
    this.chekboxPerimeter = input.checked;
    this.chekboxArea = !input.checked;
    console.log(this.chekboxArea, this.chekboxPerimeter);
  }

  getResult(name: string, choice: string, unit: string) {
    if (choice === 'perimeter') {
      switch (name) {
        case 'square':
          return this.getConvertPerimeter(
            this.square.getPerimeter(),
            'm',
            unit
          );
        case 'circle':
          return this.getConvertPerimeter(
            this.circle.getPerimeter(),
            'm',
            unit
          );
        case 'rectangle':
          return this.getConvertPerimeter(
            this.rectangle.getPerimeter(),
            'm',
            unit
          );
        case 'triangle':
          return this.getConvertPerimeter(
            this.triangle.getPerimeter(),
            'm',
            unit
          );
        // default:
        //   alert('Choix non pris en charge');
        //   return null;
      }
    } else {
      switch (name) {
        case 'square':
          return this.getConvertArea(this.square.getArea(), 'm', unit);
        case 'circle':
          return this.getConvertArea(this.circle.getArea(), 'm', unit);
        case 'rectangle':
          return this.getConvertArea(this.rectangle.getArea(), 'm', unit);
        // case 'triangle':
        //   return this.getConvertArea(this.triangle.getArea(), 'm', unit);
        // default:
        //   alert('Choix non pris en charge');
        //   return null;
      }
    }
    return null;
  }

  handleSide(input) {
    this.side = Number(input.value);
  }
  handleRaduis(input) {
    this.raduis = Number(input.value);
  }
  handleWidth(input) {
    this.width = Number(input.value);
  }
  handleLength(input) {
    this.length = Number(input.value);
  }
  handleSide1(input) {
    this.side1 = Number(input.value);
  }
  handleSide2(input) {
    this.side2 = Number(input.value);
  }
  handleSide3(input) {
    this.side3 = Number(input.value);
  }
  handleSubmit() {
    this.square.setSide(this.side);
    this.circle.setraduis(this.raduis);
    this.rectangle.setLength(this.length);
    this.rectangle.setWidth(this.width);
    this.triangle.setside1(this.side1);
    this.triangle.setside2(this.side2);
    this.triangle.setside3(this.side3);
    this.show = false;
    console.log(this.square, this.circle, this.rectangle, this.triangle);
  }

  PictureSelected(name: string) {
    switch (name) {
      case 'square':
        this.showForm1 = false;
        this.showForm2 = true;
        this.showForm3 = true;
        this.showForm4 = true;
        this.picName = 'square';
        break;
      case 'circle':
        this.showForm1 = true;
        this.showForm2 = false;
        this.showForm3 = true;
        this.showForm4 = true;
        this.picName = 'circle';
        break;
      case 'rectangle':
        this.showForm1 = true;
        this.showForm2 = true;
        this.showForm3 = false;
        this.showForm4 = true;
        this.picName = 'rectangle';
        break;
      case 'triangle':
        this.showForm1 = true;
        this.showForm2 = true;
        this.showForm3 = true;
        this.showForm4 = false;
        this.picName = 'triangle';
        break;
      default:
        this.showForm1 = true;
        this.showForm2 = true;
        this.showForm3 = true;
        this.showForm4 = true;
        this.picName = '';
        break;
    }
    this.showForm = false;
    this.device = 'm';
  }

  //
  getConvertPerimeter(value: number, startUnit: string, endUnit: string) {
    switch (startUnit) {
      case 'm':
        return this.getPerimeterToMeter(value, endUnit);
      case 'dm':
        return this.getPerimeterToDecimeter(value, endUnit);
      case 'cm':
        return this.getPerimeterToCentimeter(value, endUnit);
      case 'km':
        return this.getPerimeterToKilometer(value, endUnit);
      default:
        return 'Choix non pris en charge';
    }
  }
  // function getting perimeter
  getPerimeterToMeter(value: number, unitName: string) {
    switch (unitName) {
      case 'dm':
        return value * 10;
      case 'cm':
        return value * 100;
      case 'km':
        return value / 1000;
      default:
        return value;
    }
  }
  getPerimeterToDecimeter(value: number, unitName: string) {
    switch (unitName) {
      case 'cm':
        return value * 10;
      case 'm':
        return value / 10;
      case 'km':
        return value / 10000;
      default:
        return value;
    }
  }
  getPerimeterToCentimeter(value: number, unitName: string) {
    switch (unitName) {
      case 'dm':
        return value / 10;
      case 'm':
        return value / 100;
      case 'km':
        return value / 100000;
      default:
        return value;
    }
  }
  getPerimeterToKilometer(value: number, unitName: string) {
    switch (unitName) {
      case 'm':
        return value * 1000;
      case 'dm':
        return value * 10000;
      case 'cm':
        return value * 100000;
      default:
        return value;
    }
  }

  //
  getConvertArea(value: number, startUnit: string, endUnit: string) {
    switch (startUnit) {
      case 'm':
        return this.getAreaToMeter(value, endUnit);
      case 'dm':
        return this.getAreaToDecimeter(value, endUnit);
      case 'cm':
        return this.getAreaToCentimeter(value, endUnit);
      case 'km':
        return this.getAreaToKilometer(value, endUnit);
      default:
        return 'Choix non pris en charge';
    }
  }
  // function getting area
  getAreaToMeter(value: number, unitName: string) {
    switch (unitName) {
      case 'dm':
        return value * 100;
      case 'cm':
        return value * 10000;
      case 'km':
        return value / 1000000;
      default:
        return value;
    }
  }
  getAreaToDecimeter(value: number, unitName: string) {
    switch (unitName) {
      case 'cm':
        return value * 100;
      case 'm':
        return value / 100;
      case 'km':
        return value / 100000000;
      default:
        return value;
    }
  }
  getAreaToCentimeter(value: number, unitName: string) {
    switch (unitName) {
      case 'dm':
        return value / 100;
      case 'm':
        return value / 10000;
      case 'km':
        return value / 10000000000;
      default:
        return value;
    }
  }
  getAreaToKilometer(value: number, unitName: string) {
    switch (unitName) {
      case 'm':
        return value * 1000000;
      case 'dm':
        return value * 100000000;
      case 'cm':
        return value * 10000000000;
      default:
        return value;
    }
  }
}
