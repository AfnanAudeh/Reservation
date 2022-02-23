import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { orderItemService } from 'src/app/services/orderItem.service';
import { OrderItem } from 'src/data/orderItem';

@Component({
  selector: 'app-edit-orderitem',
  templateUrl: './edit-orderitem.component.html',
  styleUrls: ['./edit-orderitem.component.css']
})
export class EditOrderitemComponent implements OnInit {
  list:any;
  editId:number=-1;
    constructor(private orderItemService:orderItemService,private route:ActivatedRoute) { }
  
    editOrderItem= new FormGroup({
      price:new FormControl(),
      quantity:new FormControl(),
      orderId:new FormControl()
    });
    UpdateOrderItem(){  
    let orderItem: OrderItem=new OrderItem();
    
    orderItem.Order_Item_Id=this.list.order_Item_Id;
    orderItem.Order_Item_Price=Number.parseFloat(this.editOrderItem.controls['price'].value);
    orderItem.Order_Item_Quantity=Number.parseInt(this.editOrderItem.controls['quantity'].value);
   orderItem.Order_Id=this.list.order_Id;
   orderItem.Menu_Item_Id=this.list.menu_Item_Id;
     console.log(orderItem.Order_Item_Price+"aaaaa");
   
     this.orderItemService.UpdateOrderItem(orderItem).subscribe(res=>{console.log(res)});
  
  }
  GetOrderItemByOrderItemId(orderItemId:number){
    this.orderItemService.GetOrderItemByOrderItemId(orderItemId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
    }
  
  ngOnInit(): void {
  
  this.route.params.subscribe(res=>{
   this.editId= res['id'];
  this.GetOrderItemByOrderItemId(this.editId);
  });
  }
  
}
