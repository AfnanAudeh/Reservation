import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/basicOrder.service';
import { orderItemService } from 'src/app/services/orderItem.service';
import { PaymentService } from 'src/app/services/payment.service';
import { WaiterService } from 'src/app/services/waiter.service';

import { Payment } from 'src/data/payment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  list:any[]=[];

  listAvaWaiter:any[]=[];

  
   constructor(private orderService:OrderService,
    private waiterService:WaiterService,
    private orderItemService :orderItemService,
    private paymentService:PaymentService) { }
 
   
     // sort about id and waiter id ==null all order  assign waiter

  GetOrderByWaiterId(waiterId:number){
      this.orderService.GetOrderByWaiterId(waiterId).subscribe(res=>{console.log(res)
      
      this.list=res;
      
      })
   }
  
   ngOnInit(): void {

    this.GetOrderByWaiterId(36);

   }
   UpdateAccessStatusByOrderId(orderId:number){

    this.orderService.UpdateAccessStatusByOrderId(orderId,"yes").subscribe(res=>console.log(res));
    this.GetOrderByWaiterId(36);


   }
   
   UpdatePaymentStatusByOrderId(orderId:number){

    
    this.orderService.UpdatePaymentStatusByOrderId(orderId,"yes").subscribe(res=>{
      console.log(res);
    this.GetOrderByWaiterId(36);
    });
   
    this.GetOrderItemByOrderId(orderId);
   }
   GetOrderItemByOrderId(orderId:number){

    this.orderItemService.GetOrderItemByOrderId(orderId).subscribe(res=>{

    console.log(res);
    this.orderItems=res;
    this.InsertPayment(orderId);

    });
   }

InsertPayment(orderId:number) 
{
let payment:Payment=new Payment();
payment.Payment_Price=this.totalPrice();
payment.Payment_Currncy="Jordan";
payment.Payment_Method_Id=2;
payment.Order_Id=orderId;
console.log(orderId+"  ")
payment.Credit_Id=null;
this.paymentService.InsertPayment(payment).subscribe(res=>{

console.log(res)

});

}
orderItems:any[]=[];
totalPrice(){

  let totalPrice=0;
  this.orderItems.forEach(element => {
  totalPrice+=element.order_Item_Price*element.order_Item_Quantity;
 
  });

  console.log("totalprice="+totalPrice);
  return totalPrice;
}
  
   
}
