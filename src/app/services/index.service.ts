import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class IndexService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  GetHeader() {
    return this.http.get<any>('https://localhost:44343/api/header/GetHeader');
  }

  GetFooter() {
    return this.http.get<any>('https://localhost:44343/api/footer/GetFooter');
  }
  GetFooterH() {
    return this.http.get<any>('https://localhost:44343/api/footer/GetFooterHeader');
  }
  GetIndex() {
    return this.http.get<any>(this.url + 'index/GetIndexTable');
  }
  GetImage(imageName:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'text/plain; charset=utf-8'
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get('https://localhost:44343/api/index/Get/'+imageName, httpOptions)
  }
}
