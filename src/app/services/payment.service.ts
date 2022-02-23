    import { CartItem } from "src/data/cartItem";
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { Router } from '@angular/router';
    import { Login } from 'src/data/login';
    import { environment } from 'src/environments/environment';
    import { SharedModule } from '../shared/shared.module';
    import jwt_decode from 'jwt-decode';
    import { Register } from 'src/data/register';
    import { ContactUs } from "src/data/contactUs";
    import { ContactUsInfo } from "src/data/contactUsInfo";
    import { Header } from "src/data/header";
import { MenuItemDiscount } from "src/data/menuItemDiscount";
import { Payment } from "src/data/payment";
    @Injectable({
      providedIn: 'root'
    })
    export class PaymentService {
    
      headerDict={
        'Content-Type':'application/json',
        'Accept':'application/json'
        }
     requestOptions={
          headers:new HttpHeaders(this.headerDict)
          }
     constructor(public http:HttpClient,private route:Router) {

      }
     InsertPayment(payment:Payment){
      return  this.http.post<boolean>(environment.apiUrl+"Payment/InsertPayment",payment,this.requestOptions);



     }
     UpdatePayment(payment:Payment){
     return   this.http.put<boolean>(environment.apiUrl+"Payment/UpdatePayment",payment,this.requestOptions);


     }
     DeletePaymentByPaymentId(PaymentId:number){
     return   this.http.delete<boolean>(environment.apiUrl+"Payment/DeletePaymentByPaymentId?PaymentId="+PaymentId,this.requestOptions);


     }
     GetAllPayment(){
     return   this.http.get<any[]>(environment.apiUrl+"Payment/GetAllPayment",this.requestOptions);


     }
     GetPaymentByPaymentId(paymentId:number ){
      return   this.http.get<any[]>(environment.apiUrl+"Payment/GetPaymentByPaymentId?paymentId="+paymentId,this.requestOptions);
 
         
      }   

    
    }
    

