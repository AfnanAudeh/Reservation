import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { orderItemService } from 'src/app/services/orderItem.service';

import { OrderItem } from 'src/data/orderItem';

@Component({
  selector: 'app-add-orderitem',
  templateUrl: './add-orderitem.component.html',
  styleUrls: ['./add-orderitem.component.css']
})
export class AddOrderitemComponent implements OnInit {

  inserOrderItem= new FormGroup({
    price:new FormControl(),
    quantity:new FormControl(),
    orderId:new FormControl()
  });
  constructor(private orderItemService :orderItemService) { }
  InsertOrderItem(){
 let orderItem: OrderItem=new OrderItem();

    orderItem.Menu_Item_Id=48;
    orderItem.Order_Id=9;
 orderItem.Order_Item_Price=Number.parseFloat(this.inserOrderItem.controls['price'].value);
 orderItem.Order_Item_Quantity=Number.parseInt(this.inserOrderItem.controls['quantity'].value);

  console.log(orderItem.Order_Item_Price+"aaaaa");

  this.orderItemService.InsertOrderItem(orderItem).subscribe(res=>{console.log(res)});
  }
  ngOnInit(): void {
  }

}
