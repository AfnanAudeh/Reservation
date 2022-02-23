import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { orderItemService } from 'src/app/services/orderItem.service';

@Component({
  selector: 'app-getlist-orderitem',
  templateUrl: './getlist-orderitem.component.html',
  styleUrls: ['./getlist-orderitem.component.css']
})
export class GetlistOrderitemComponent implements OnInit {

  list:any[]=[];
  orderId:FormControl= new FormControl();
 
   constructor(private orderItemService:orderItemService) { }
 
   GetAllOrderItem(){
    this.orderItemService.GetAllOrderItem().subscribe((res:any[])=>{console.log(res);  this.list=res;})
    }
     GetOrderItemByOrderId(orderId:number){
    this.orderItemService.GetOrderItemByOrderId(orderId).subscribe((res:any[])=>{console.log(res);this.list=res;});
    }
     GetOrderItemByOrderItemId(orderItemId :number){
      this.orderItemService.GetOrderItemByOrderItemId(orderItemId).subscribe((res:any[])=>{console.log(res); this.list=res;});
    }
     GetJoinOrderItemAndMenuItem(menuItem:number){
      this.orderItemService.GetJoinOrderItemAndMenuItem(menuItem).subscribe((res:any[])=>{console.log(res); this.list=res;});
    }

search(){
  
if(this.orderId.value){
this.GetOrderItemByOrderId(this.orderId.value);
}
else {

  this.GetAllOrderItem();
}

}

   ngOnInit(): void {
     this.GetAllOrderItem();
   }
 
   DeleteOrderItem(orderItemId:number){
   this.orderItemService.DeleteOrderItem(orderItemId).subscribe(res=>{console.log(res)
     this.GetAllOrderItem();
   });  
   
 }
  

}
