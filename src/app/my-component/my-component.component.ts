import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  @Input() dataPicture;

  ngOnInit(): void {
    console.log('props fils :', this.dataPicture);
  }
}
