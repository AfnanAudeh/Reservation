import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { orderItemService } from 'src/app/services/orderItem.service';


@Component({
  selector: 'app-show-orderitem',
  templateUrl: './show-orderitem.component.html',
  styleUrls: ['./show-orderitem.component.css']
})
export class ShowOrderitemComponent implements OnInit {


  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private orderItemService:orderItemService) { }
 
 GetOrderItemByOrderItemId(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.orderItemService.GetOrderItemByOrderItemId(this.editId).subscribe((res:any[])=>{
 this.item=res[0];
 console.log(this.item)
 })
  console.log(this.editId)

 })

}


 ngOnInit(): void {
this.GetOrderItemByOrderItemId();    
 }

}
