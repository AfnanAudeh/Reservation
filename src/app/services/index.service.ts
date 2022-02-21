import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUsClass } from '../shared/about-us-class.model';

@Injectable({
  providedIn: 'root'
})

export class IndexService {

  constructor(private http: HttpClient) { }

  GetHeader() {
    return this.http.get<any>('https://localhost:44343/api/header/GetHeader');
  }

  GetFooter() {
    return this.http.get<any>('https://localhost:44343/api/footer/GetFooter');
  }
  GetFooterH() {
    return this.http.get<any>('https://localhost:44343/api/footer/GetFooterHeader');
  }

}
