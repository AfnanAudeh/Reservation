import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { OrderService } from 'src/app/services/basicOrder.service';
import { WaiterService } from 'src/app/services/waiter.service';


@Component({
  selector: 'app-getlist-order',
  templateUrl: './getlist-order.component.html',
  styleUrls: ['./getlist-order.component.css']
})
export class GetlistOrderComponent implements OnInit {

  list:any[]=[];

  listAvaWaiter:any[]=[];
  defaultSelected = 2
  selection: number=0;
    orderId=new FormControl();

    from:Date=new Date();
    to:Date=new Date();
    
  
   constructor(private orderService:OrderService,private waiterService:WaiterService) { }
 
   selectedSortOrder: string = "Sort by...";

   ChangeSortOrder(order_Id:number,waiterId:number) { 

    console.log(order_Id+"    "+waiterId)

    this.orderService.UpdateWaiterIdByOrderId(order_Id,waiterId).subscribe(res=>{
      console.log(res)
    this.GetAllOrder();
    this.GetAvailableWaiter();
    });
   }
   
     // sort about id and waiter id ==null all order  assign waiter

   GetAvailableWaiter(){
    this.waiterService.GetAvailableWaiter().subscribe(res=>{console.log(res);
    this.listAvaWaiter=res;
    })
   }

   
   ngOnInit(): void {
     this.GetAllOrder();
     this.GetAvailableWaiter();
 

   }
   UpdateAccessStatusByOrderId(){

    this.orderService.UpdateAccessStatusByOrderId(10,"n").subscribe(res=>console.log(res));
   }
   UpdateWaiterIdByOrderId(){

    this.orderService.UpdateWaiterIdByOrderId(10,4).subscribe(res=>console.log(res));


   }
   UpdatePaymentStatusByOrderId(){

    
    this.orderService.UpdatePaymentStatusByOrderId(10,"n").subscribe(res=>console.log(res));
   }
   search(){

    console.log(this.from)
    this.orderService.GetOrderByDate(this.from,this.to).subscribe((res:any[])=>{

this.list=res;

    });
 
   }
   DeleteOrder(orderId:number){
   this.orderService.DeleteOrder(orderId).subscribe(res=>{console.log(res)
     this.GetAllOrder();
   });  
   
 }
   GetAllOrder(){
   this.orderService.GetAllOrder().subscribe((res:any[])=>{console.log(res);  this.list=res;})
   }
   GetOrderById(orderId:number){
   this.orderService.GetOrderById(orderId).subscribe((res:any[])=>{console.log(res);this.list=res;});
   }
   
   GetOrderByDate(from :Date,to :Date){
    this.orderService.GetOrderByDate(from,to).subscribe((res:any[])=>{console.log(res);this.list=res;});
    }
   
  


}
