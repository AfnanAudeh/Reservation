import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderitemComponent } from './add-orderitem/add-orderitem.component';
import { EditOrderitemComponent } from './edit-orderitem/edit-orderitem.component';
import { GetlistOrderitemComponent } from './getlist-orderitem/getlist-orderitem.component';
import { ShowOrderitemComponent } from './show-orderitem/show-orderitem.component';

const routes: Routes = [
  {
    path:'getlistOrderItem'
    ,
    component:GetlistOrderitemComponent
  },
  {
path:'show/:id',
component :ShowOrderitemComponent
  },
 {
   path:'edit/:id',
component:EditOrderitemComponent
   }
  ,{
path:'add'
,component:AddOrderitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderitemRoutingModule { }
