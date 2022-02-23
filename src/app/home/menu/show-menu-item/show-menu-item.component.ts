import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from 'src/app/service/cartItem.service';
import { MenuitemService } from 'src/app/service/menuitem.service';
import { MenuItemDiscountService } from 'src/app/service/menuItemDiscount.service';
import { MenuItemReviewService } from 'src/app/service/menuItemReview.service';
import { CartItem } from 'src/data/cartItem';
import { MenuItemReview } from 'src/data/menuItemReview';
@Component({
  selector: 'app-show-menu-item',
  templateUrl: './show-menu-item.component.html',
  styleUrls: ['./show-menu-item.component.css']
})
export class ShowMenuItemComponent implements OnInit {
  item:any;
  editId:number=28;
  list:any[]=[];
  listDis:any;
 insertMenuReview= new FormGroup({
  rating: new FormControl(),
  content:new FormControl(),
  
});

quantity=new FormControl();



 constructor(private route:ActivatedRoute,private cartItemService:CartItemService,private menuItemDiscount:MenuItemDiscountService,private menuItemService:MenuitemService,private menuReviewService :MenuItemReviewService) { }
 
getMenuItemById(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.menuItemService.getMenuItemById(this.editId).subscribe((res:any[])=>{

 this.item=res[0];
 console.log(this.item)
 
 this.GetMenuItemReviewByMenuItemId(this.editId);
 this.GetMenuItemDiscountByMenuItemId(this.editId);
  
 })
  console.log(this.editId)

 })




}


InsertMenuReview(){
  let menuReview: MenuItemReview=new MenuItemReview(); 
 const v:number=28;
  menuReview.Menu_Item_Content=this.insertMenuReview.controls['content'].value;
  menuReview.Menu_Item_Rating=Number.parseInt(this.insertMenuReview.controls['rating'].value);
  menuReview.Menu_Item_Review_Title='sdf';
  menuReview.Menu_Item_Id=parseInt(this.editId+"");
  
  console.log( menuReview.Menu_Item_Id);
  this.menuReviewService.InsertMenuItemReview(menuReview).subscribe(res=>{console.log(res);
    this.GetMenuItemReviewByMenuItemId(this.editId);
  });
  }
  


  search(){



  }


  DeleteMenuItemReview(reviewId:number){


  this.menuReviewService.DeleteMenuItemReview(reviewId).subscribe(res=>{console.log(res)
    this.GetMenuItemReviewByMenuItemId(this.editId);
  });  



  
}


AddToCartItem(){
let  cartItem:CartItem=new CartItem();
cartItem.Cart_Id=24;
cartItem.Cart_Item_Price=this.item.menu_Item_Price*((100-this.listDis.discount_Rate)/100.0);
cartItem.Cart_Item_Quantity=Number.parseInt(this.quantity.value);
cartItem.Menu_Item_Id=this.item.menu_Item_Id;
this.cartItemService.AddToCartItem(cartItem).subscribe((res)=>{console.log(res);})
}




GetAllMenuItemReview(){
  this.menuReviewService.GetAllMenuItemReview().subscribe((res:any[])=>{console.log(res);  this.list=res;})
  }
  GetMenuItemReviewByMenuItemReviewId(reviewId:number){
  this.menuReviewService.GetMenuItemReviewByMenuItemReviewId(reviewId).subscribe((res:any[])=>{console.log(res);this.list=res;});
  }
 
  GetMenuItemReviewByMenuItemId(menuItemId:number){
    this.menuReviewService.GetMenuItemReviewByMenuItemId(menuItemId).subscribe((res:any[])=>{console.log(res); this.list=res;});  }

    GetMenuItemDiscountByMenuItemId(menuItemId:number){
      this.menuItemDiscount.GetMenuItemDiscountByMenuItemId(menuItemId).subscribe((res:any[])=>{console.log(res);this.listDis=res[0];});
      }
 ngOnInit(): void {
this.getMenuItemById();    
 }

}
