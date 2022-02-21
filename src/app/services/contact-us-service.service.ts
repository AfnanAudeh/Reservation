import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUsClass } from '../shared/contact-us-class';
import { ContactUsInfoClass } from '../shared/contact-us-info-class';

@Injectable({
  providedIn: 'root'
})
export class ContactUsServiceService {

  constructor(private http:HttpClient) { }

  AddContactUs(contactUs :ContactUsClass)
  {
    debugger
    return this.http.post<ContactUsClass>('https://localhost:44343/api/contactUs/AddContactUs',contactUs).subscribe(
      result=>{return true
      },
      error=>{return false}
    ); 
  }
  GetContactUsBySubject(subject :string)
  {
    return this.http.get<ContactUsClass>('https://localhost:44343/api/contactUs/GetContactUsBySubject/'+subject); 
  }
  GetAllContactUs()
  {
    return this.http.get<ContactUsClass>('https://localhost:44343/api/contactUs/GetAllContactUs'); 
  }


  
}
