import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUsInfoClass } from '../shared/contact-us-info-class';

@Injectable({
  providedIn: 'root'
})
export class ContactusInfoService {

  constructor(private http :HttpClient) { }
  getContactUsInfo()
  {
    return this.http.get<ContactUsInfoClass>('https://localhost:44343/api/contactUsInfo/GetContactUsInfo'); 
  }

  UpdateContactUsInfo(contactUsInfo :ContactUsInfoClass)
  {
    return this.http.put('https://localhost:44343/api/contactUsInfo/UpdateContactUsInfo',contactUsInfo); 
  }
}
