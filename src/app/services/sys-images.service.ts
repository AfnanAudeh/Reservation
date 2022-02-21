import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SysImagesService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  image?:string;
  constructor(private http: HttpClient) { }

  uploadImage(file: FormData) {
    debugger
    this.http.post('https://localhost:44320/api/SysImage/UploadImage/', file,this.requestOptions).subscribe
    (
      (result)=>{console.log(result);},
      (error)=>{console.log(error);
      }
    );
  }
  Create(value:any)
  {
    this.http.post('https://localhost:44320/api/sysImage/AddSysImage', value).subscribe();
  }

}
