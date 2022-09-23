import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

import { Circle } from '../app/models/Circle';
import { Square } from '../app/models/Square';
import { Rectangle } from '../app/models/Rectangle';
import { Triangle } from '../app/models/Triangle';
import { Figure } from './../app/models/Figure';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private service: HttpServiceService) {}

  pic: object;
  dataUnit: object;
  square = new Square();
  circle = new Circle();
  rectangle = new Rectangle();
  triangle = new Triangle();
  pictures: Figure[];
  unit: any[];
  show = true;
  showForm = false;
  showForm1 = true;
  showForm2 = true;
  showForm3 = true;
  showForm4 = true;
  picName: string;
  side: number;
  raduis: number;
  base: number;
  height: number;
  length: number;
  width: number;
  side1: number;
  side2: number;
  side3: number;
  startUnit = 'm';
  endUnit = 'm';
  chekboxPerimeter = false;
  chekboxArea = false;
  ngOnInit(): void {
    this.getDataPicture();
    this.getDataUnit();
    this.pictures = [this.square, this.circle, this.rectangle, this.triangle];
    this.unit = [
      { id: 1, name: 'Meters', unitPerimeter: 'm', unitArea: 'm^2' },
      { id: 2, name: 'Decimeters', unitPerimeter: 'dm', unitArea: 'dm^2' },
      { id: 3, name: 'Centimers', unitPerimeter: 'cm', unitArea: 'cm^2' },
      { id: 4, name: 'Kilometers', unitPerimeter: 'km', unitArea: 'km^2' },
    ];
  }

  getDataPicture() {
    this.service.getPicture().subscribe((response) => {
      this.pic = response;
      console.log(this.pic);
    });
  }
  getDataUnit() {
    this.service.getUnit().subscribe((response) => {
      this.dataUnit = response;
      console.log(this.dataUnit);
    });
  }

  onChange(select) {
    this.startUnit = select.value;
  }
  onChangePmt(input) {
    this.endUnit = input.value;
  }
  onChangeArea(select) {
    this.endUnit = select.value;
  }
  onChangeCheckBoxPerimeter() {
    this.chekboxArea = false;
    this.chekboxPerimeter = true;
    this.chekboxPerimeter ? (this.endUnit = 'm') : (this.endUnit = 'm^2');
  }
  onChangeCheckBoxArea() {
    this.chekboxArea = true;
    this.chekboxPerimeter = false;
    this.chekboxPerimeter ? (this.endUnit = 'm') : (this.endUnit = 'm^2');
  }

  getshow() {
    if (this.chekboxArea && !this.showForm4) {
      return false;
    } else {
      return true;
    }
  }
  getChoise() {
    if (this.chekboxPerimeter) {
      return 'perimeter';
    } else {
      return 'area';
    }
  }

  getChangeStartUnit(value) {
    switch (value) {
      case 'm':
        return 'm^2';
      case 'dm':
        return 'dm^2';
      case 'cm':
        return 'cm^2';
      case 'km':
        return 'km^2';
      default:
        return 'm^2';
    }
  }

  //returns the result of the calculation based on the selected data
  getResult(name: string, choice: string, unitStart, unitEnd: string) {
    if (choice === 'perimeter') {
      switch (name) {
        case 'square':
          return this.getConvertPerimeter(
            this.square.getPerimeter(),
            unitStart,
            unitEnd
          );
        case 'circle':
          return this.getConvertPerimeter(
            this.circle.getPerimeter(),
            unitStart,
            unitEnd
          );
        case 'rectangle':
          return this.getConvertPerimeter(
            this.rectangle.getPerimeter(),
            unitStart,
            unitEnd
          );
        case 'triangle':
          return this.getConvertPerimeter(
            this.triangle.getPerimeter(),
            unitStart,
            unitEnd
          );
      }
    } else {
      switch (name) {
        case 'square':
          return this.getConvertArea(
            this.square.getArea(),
            this.getChangeStartUnit(unitStart),
            unitEnd
          );
        case 'circle':
          return this.getConvertArea(
            this.circle.getArea(),
            this.getChangeStartUnit(unitStart),
            unitEnd
          );
        case 'rectangle':
          return this.getConvertArea(
            this.rectangle.getArea(),
            this.getChangeStartUnit(unitStart),
            unitEnd
          );
        case 'triangle':
          return this.getConvertArea(
            this.triangle.getArea(),
            this.getChangeStartUnit(unitStart),
            unitEnd
          );
      }
    }
    return null;
  }

  // Input recovery
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
  handleBase(input) {
    this.base = Number(input.value);
  }
  handleHeight(input) {
    this.height = Number(input.value);
  }
  // registration of inputs
  handleSubmit() {
    this.square.setSide(this.side);
    this.circle.setraduis(this.raduis);
    this.rectangle.setLength(this.length);
    this.rectangle.setWidth(this.width);
    this.triangle.setside1(this.side1);
    this.triangle.setside2(this.side2);
    this.triangle.setside3(this.side3);
    this.triangle.setBase(this.base);
    this.triangle.setHeight(this.height);
    this.show = false;
  }
  //image selection
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
    this.show = true;
  }

  // perimeter conversion (m,dm,cm,km)
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

  // area conversion (m,dm,cm and km)^2
  getConvertArea(value: number, startUnit: string, endUnit: string) {
    switch (startUnit) {
      case 'm^2':
        return this.getAreaToMeter(value, endUnit);
      case 'dm^2':
        return this.getAreaToDecimeter(value, endUnit);
      case 'cm^2':
        return this.getAreaToCentimeter(value, endUnit);
      case 'km^2':
        return this.getAreaToKilometer(value, endUnit);
      default:
        return 'Choix non pris en charge';
    }
  }
  // function getting area to square meter
  getAreaToMeter(value: number, unitName: string) {
    switch (unitName) {
      case 'dm^2':
        return value * 100;
      case 'cm^2':
        return value * 10000;
      case 'km^2':
        return value / 1000000;
      default:
        return value;
    }
  }
  // function getting area to square decimeter
  getAreaToDecimeter(value: number, unitName: string) {
    switch (unitName) {
      case 'cm^2':
        return value * 100;
      case 'm^2':
        return value / 100;
      case 'km^2':
        return value / 100000000;
      default:
        return value;
    }
  }
  //function getting area to cm^2
  getAreaToCentimeter(value: number, unitName: string) {
    switch (unitName) {
      case 'dm^2':
        return value / 100;
      case 'm^2':
        return value / 10000;
      case 'km^2':
        return value / 10000000000;
      default:
        return value;
    }
  }
  // getting area to km^2
  getAreaToKilometer(value: number, unitName: string) {
    switch (unitName) {
      case 'm^2':
        return value * 1000000;
      case 'dm^2':
        return value * 100000000;
      case 'cm^2':
        return value * 10000000000;
      default:
        return value;
    }
  }
}
