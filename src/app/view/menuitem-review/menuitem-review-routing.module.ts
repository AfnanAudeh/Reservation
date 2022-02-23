import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuitemReviewComponent } from './add-menuitem-review/add-menuitem-review.component';
import { EditMenuitemReviewComponent } from './edit-menuitem-review/edit-menuitem-review.component';
import { GetlistMenuitemReviewComponent } from './getlist-menuitem-review/getlist-menuitem-review.component';
import { ShowMenuitemReviewComponent } from './show-menuitem-review/show-menuitem-review.component';

const routes: Routes = [

  {
    path:'getlistmenuitemdreview'
    ,
    component:GetlistMenuitemReviewComponent
  }

,
  {
path:'show/:id',
component :ShowMenuitemReviewComponent
  }
 ,
 {
   path:'edit/:id'
,
component:EditMenuitemReviewComponent
   }
   ,
  {
path:'add'
,component:AddMenuitemReviewComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuitemReviewRoutingModule { }
