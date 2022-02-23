import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItemReviewService } from 'src/app/services/menuItemReview.service';

import { MenuItemReview } from 'src/data/menuItemReview';

@Component({
  selector: 'app-edit-menuitem-review',
  templateUrl: './edit-menuitem-review.component.html',
  styleUrls: ['./edit-menuitem-review.component.css']
})
export class EditMenuitemReviewComponent implements OnInit {
  list:any;
  editId:number=-1;
    constructor(private menuReviewService:MenuItemReviewService,private route:ActivatedRoute) { }
  
    editMenuReview= new FormGroup({
      rating: new FormControl(),
      content:new FormControl(),
    });
  UpdateMenuCategory(){  
  let menuReview :MenuItemReview =new MenuItemReview();
  menuReview.Menu_Item_Review_Id=this.list.menu_Item_Review_Id;
  menuReview.Menu_Item_Content=this.editMenuReview.controls['content'].value;
  menuReview.Menu_Item_Rating=Number.parseInt(this.editMenuReview.controls['rating'].value);
 menuReview.Menu_Item_Review_Title='sdf';
 menuReview.Menu_Item_Id=48;

  //menuCategory.Menu_Category_Parent_Id=Number.parseInt(this.editMenuCategory.controls['parentId'].value);*/
  console.log('deaa');
  this.menuReviewService.UpdateMenuItemReview(menuReview).subscribe((res)=>{console.log(res)});   
  
  }
  GetMenuItemReviewByMenuItemReviewId(reviewId:number){
    this.menuReviewService.GetMenuItemReviewByMenuItemReviewId(reviewId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
    }
  
  ngOnInit(): void {
  
  this.route.params.subscribe(res=>{
  this.editId= res['id'];
  this.GetMenuItemReviewByMenuItemReviewId(this.editId);
  });
  }
  

}
