import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SysImagesService  {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  
  constructor(private http: HttpClient) { }

  uploadImage(file: FormData) {
    
    return this.http.post('https://localhost:44343/api/SysImage/UploadImage/', file,{responseType: 'text'});
  }
  Create(value:any)
  {
    this.http.post('https://localhost:44343/api/sysImage/AddSysImage', value).subscribe();
  }

}
