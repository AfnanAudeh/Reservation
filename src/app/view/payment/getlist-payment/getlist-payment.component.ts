import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-getlist-payment',
  templateUrl: './getlist-payment.component.html',
  styleUrls: ['./getlist-payment.component.css']
})
export class GetlistPaymentComponent implements OnInit {

  list:any[]=[];
  
   constructor(private paymentService:PaymentService) { }
 
   ngOnInit(): void {
     this.GetAllPayment();
   }
 
   search(){ }
 DeletePaymentByPaymentId(paymentId:number){

  
  this.paymentService.DeletePaymentByPaymentId(paymentId).subscribe(res=>{console.log(res)})
 }

 GetAllPayment(){
  this.paymentService.GetAllPayment().subscribe((res:any[])=>{console.log(res);  this.list=res;})
 }
}
