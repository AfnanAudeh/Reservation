import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItemReviewService } from 'src/app/services/menuItemReview.service';


@Component({
  selector: 'app-getlist-menuitem-review',
  templateUrl: './getlist-menuitem-review.component.html',
  styleUrls: ['./getlist-menuitem-review.component.css']
})
export class GetlistMenuitemReviewComponent implements OnInit {

  list:any[]=[];
  rating:FormControl= new FormControl();
  menuItemId:FormControl= new FormControl();
   constructor(private menuReviewService:MenuItemReviewService) { }
 
   ngOnInit(): void {
     this.GetAllMenuItemReview();
   }
 
   search(){

 if(this.menuItemId.value!=null&&this.menuItemId.value)

    this.GetMenuItemReviewByMenuItemId(this.menuItemId.value);

    else {

      this.GetAllMenuItemReview();
    }
 
   }


   DeleteMenuItemReview(reviewId:number){
   this.menuReviewService.DeleteMenuItemReview(reviewId).subscribe(res=>{console.log(res)
     this.GetAllMenuItemReview();
   });  
   
 }
 GetAllMenuItemReview(){
   this.menuReviewService.GetAllMenuItemReview().subscribe((res:any[])=>{console.log(res);  this.list=res;})
   }
   GetMenuItemReviewByMenuItemReviewId(reviewId:number){
   this.menuReviewService.GetMenuItemReviewByMenuItemReviewId(reviewId).subscribe((res:any[])=>{console.log(res);this.list=res;});
   }
  
   GetMenuItemReviewByMenuItemId(menuItemId:number){
     this.menuReviewService.GetMenuItemReviewByMenuItemId(menuItemId).subscribe((res:any[])=>{console.log(res); this.list=res;});  }
 

}
