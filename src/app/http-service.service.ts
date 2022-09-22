import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  getPicture() {
    return this.http.get('/api/picture');
  }
  getUnit() {
    return this.http.get('./api/unit');
  }
}
