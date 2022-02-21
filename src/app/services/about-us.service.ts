import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUsClass } from '../shared/about-us-class.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  

  constructor(private http :HttpClient) { }

  UpdateAboutUs(aboutUs : any)
  {
    return this.http.put('https://localhost:44343/api/aboutUs/UpdateAboutUs',aboutUs);
  }
  GetAboutUs()
  {
    return this.http.get<AboutUsClass>('https://localhost:44343/api/aboutUs/GetAboutUs'); 
  }
}
