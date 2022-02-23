import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/basicOrder.service';
import { CartItemService } from 'src/app/services/cartItem.service';
import { CreditService } from 'src/app/services/credit.service';
import { orderItemService } from 'src/app/services/orderItem.service';
import { PaymentService } from 'src/app/services/payment.service';

import { Basicorder } from 'src/data/basicOrder';
import { CartItem } from 'src/data/cartItem';
import { Credit } from 'src/data/credit';
import { OrderItem } from 'src/data/orderItem';
import { Payment } from 'src/data/payment';
import { CartitemModule } from '../cartitem.module';

@Component({
  selector: 'app-getlist-cart-items',
  templateUrl: './getlist-cart-items.component.html',
  styleUrls: ['./getlist-cart-items.component.css']
})
export class GetlistCartItemsComponent implements OnInit {
  defaultSelected = 0;
  selection: number=0;
 seasons:string[]=["credit","cash"];
 favoriteSeason:string="";
 orderId:number=-1;
 creditNumber:FormControl=new FormControl();
  
  constructor( private orderItemService:orderItemService
    ,private orderService:OrderService
    ,private creditService:CreditService  ,
    private cartItemService:CartItemService,
    private paymentService:PaymentService,
    private router:Router) { }
list:any[]=[];


RequestOrder(){
let totalprice:number=this.totalPrice();
let credit:any;
if(this.selection==0){
 this.creditService.GetCreditByCreditNumber(this.creditNumber.value).subscribe(async res=>{

credit=res[0];
if(credit!=null)
{
  console.log(credit.credit_Amount+"  "+totalprice)

if(credit.credit_Amount!=null&&totalprice!=null&&credit.credit_Amount>totalprice)
{
   this.InsertTrans("yes" ,"no");
  credit.credit_Amount=credit.credit_Amount-totalprice;
  this.creditService.UpdeteAmountByCreditNumber(credit).subscribe(res=>{console.log("update amount")});
  this.orderService.GetLastOrderId().subscribe((res:any[])=>{
 
    console.log(res[0].order_Id+"ddd");
   this.orderId=res[0].order_Id;
   this.InsertPayment(res[0].order_Id,credit.credit_Id);
  
   })
 
  
}
else 
{

console.log("you havnot monay");

}}else 
{ console.log("number isnot found ");
}});
}
else if (this.selection==1){
  this.InsertTrans("no" ,"no");}
}





async InsertTrans(paymentStatus:string ,accessStatus:string){

  let order:Basicorder =new Basicorder();
  order.Access_Status=accessStatus;
  order.Payment_Status=paymentStatus;
  order.Customer_Id=1;
  order.Waiter_Id=null;
  let max=-1;


 this.orderService.InsertOrder(order).subscribe(res=>{console.log("order")});
 
  this.list.forEach(element => {
    let orderItem:OrderItem=new OrderItem();
    orderItem.Order_Item_Price=element.cart_Item_Price;
    orderItem.Order_Item_Quantity=element.cart_Item_Quantity;
    orderItem.Order_Id=max;
    orderItem.Menu_Item_Id=element.menu_Item_Id;
    console.log(element.menu_Item_Id);
    this.orderItemService.InsertOrderItem(orderItem).subscribe(res=>{console.log(res)})

  });
  
  
}
InsertPayment(orderId:number,creditId:number) 
{
let payment:Payment=new Payment();
payment.Payment_Price=this.totalPrice();
payment.Payment_Currncy="Jordan";
payment.Payment_Method_Id=2;
payment.Order_Id=orderId;
console.log(orderId+"  "+creditId)
payment.Credit_Id=creditId;
this.paymentService.InsertPayment(payment).subscribe(res=>{

console.log(res)

});

}
totalPrice(){

  let totalPrice=0;
  this.list.forEach(element => {
  totalPrice+=element.cart_Item_Price*element.cart_Item_Quantity;
  });
return totalPrice;
}
  
  DeleteFromCartItemByCartItemId(cartItemId:number){

   this.cartItemService.DeleteFromCartItemByCartItemId(cartItemId).subscribe(res=>{
   console.log(res);
   this.GetCartItemByCartId(24);
   })

  }
  DeleteAllCartItemByCartId(cartId:number){

   this.cartItemService.DeleteAllCartItemByCartId(cartId).subscribe(res=>{
   
    console.log(res);
  

   })
  }
  GetCartItemByCartId(cartId:number){  

  
   this.cartItemService.GetCartItemByCartId(cartId).subscribe((res:any[])=>{
   console.log(res);
   this.list=res;

   })

  }

  ngOnInit(): void {
    this.GetCartItemByCartId(24);
  }

}
