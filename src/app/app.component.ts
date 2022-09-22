import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private service: HttpServiceService) {}
  result: object;
  dataUnit: object;

  ngOnInit(): void {
    this.getDataPicture();
    this.getDataUnit();
  }

  // getapi() {
  //   return this.result;
  // }

  getDataPicture() {
    this.service.getPicture().subscribe((response) => {
      this.result = response;
      console.log(response);
    });
  }
  getDataUnit() {
    this.service.getUnit().subscribe((response) => {
      this.dataUnit = response;
      console.log(response);
    });
  }
}
