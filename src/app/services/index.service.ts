import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class IndexService{

  constructor(private http: HttpClient) {
    
  }

  GetHeader() {
    return this.http.get<any>(environment.apiUrl+'header/GetHeader');
  }

  GetFooter() {
    return this.http.get<any>(environment.apiUrl+'footer/GetFooter');
  }
  GetFooterH() {
    return this.http.get<any>(environment.apiUrl+'footer/GetFooterHeader');
  }
  GetIndex() {
    return this.http.get<any>(environment.apiUrl+ + 'index/GetIndexTable');
  }
  GetImage(imageName:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'text/plain; charset=utf-8'
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get(environment.apiUrl+'index/Get/'+imageName, httpOptions)
  }
}
