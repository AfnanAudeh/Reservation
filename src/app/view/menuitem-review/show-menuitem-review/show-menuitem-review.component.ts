import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemReviewService } from 'src/app/services/menuItemReview.service';


@Component({
  selector: 'app-show-menuitem-review',
  templateUrl: './show-menuitem-review.component.html',
  styleUrls: ['./show-menuitem-review.component.css']
})
export class ShowMenuitemReviewComponent implements OnInit {

 
  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private menuReviewService:MenuItemReviewService) { }
 
 GetMenuItemReviewByMenuItemReviewId(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.menuReviewService.GetMenuItemReviewByMenuItemReviewId(this.editId).subscribe((res:any[])=>{
   console.log(res);
 this.item=res[0];

 })
  console.log(this.editId)

 })

}


 ngOnInit(): void {
this.GetMenuItemReviewByMenuItemReviewId();    
 }

}
