export class Figure {
   name: string;
   pictureName: string;

  constructor(Name = '', pic = '') {
    this.name = Name;
    this.pictureName = pic;
  }
  getName() {
    return this.name;
  }

  getPictureName() {
    return this.pictureName;
  }

  setPictureName(value: string) {
    this.pictureName = value;
  }

  setName(value: string) {
    this.name = value;
  }
}
