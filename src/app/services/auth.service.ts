import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from "jwt-decode";
import { Register } from 'src/data/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
  login(objLogin:Login){
    
     
    
  console.log(objLogin.Email+" "+objLogin.Pass);
  this.http.post(environment.apiUrl+'Jwt/?email='+objLogin.Email+'&pass='+objLogin.Pass,this.requestOptions).subscribe((res:any)=>{
  const token= res.token;
   console.log(token);
   localStorage.setItem('token',token);
   let data:any=jwt_decode(token);
   console.log(data.role);
   localStorage.setItem('role',data.role);

  });

  }
  register(register:Register){

    this.http.post(environment.apiUrl+'Register/AddCustomer',register,this.requestOptions).subscribe((res:any)=>{
     console.log(res);
  });
}
}  

    //provider      injector tree   compontent       
 // authservice -->  ngmoudule        
                     //parent     <--   parent ▲
                     //child   -->      child  |