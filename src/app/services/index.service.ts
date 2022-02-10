import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http :HttpClient) { }

  getHeader()
  {
    return this.http.get('https://localhost:44343/api/header/GetHeader').subscribe(
      (result: any) => { console.log(result);
       },
      err => { console.log(err) }
    );
  }
}
