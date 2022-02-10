import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http :HttpClient) { }
header:any=[];
  GetHeader()
  {
    return this.http.get<any>('https://localhost:44343/api/header/GetHeader'); 
  }

GetFooter()
{
  return this.http.get<any>('https://localhost:44343/api/footer/GetFooter'); 
}
GetFooterH()
{
  return this.http.get<any>('https://localhost:44343/api/footer/GetFooterHeader'); 
}

}
