import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItemReviewService } from 'src/app/services/menuItemReview.service';

import { MenuItemReview } from 'src/data/menuItemReview';

@Component({
  selector: 'app-add-menuitem-review',
  templateUrl: './add-menuitem-review.component.html',
  styleUrls: ['./add-menuitem-review.component.css']
})
export class AddMenuitemReviewComponent implements OnInit {

  insertMenuReview= new FormGroup({
    rating: new FormControl(),
    content:new FormControl(),
    menuItemId:new FormControl()
    
  });
  constructor(private menuReviewService :MenuItemReviewService) { }
  InsertMenuReview(){
 let menuReview: MenuItemReview=new MenuItemReview(); 
   menuReview.Menu_Item_Content=this.insertMenuReview.controls['content'].value;
   menuReview.Menu_Item_Rating=Number.parseInt(this.insertMenuReview.controls['rating'].value);
  menuReview.Menu_Item_Review_Title='sdf';
  menuReview.Menu_Item_Id=Number.parseInt(this.insertMenuReview.controls['menuItemId'].value);

  this.menuReviewService.InsertMenuItemReview(menuReview).subscribe(res=>{console.log(res)});
  }
  ngOnInit(): void {
  }

}
