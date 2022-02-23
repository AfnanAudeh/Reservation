import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetlistCartItemsComponent } from './getlist-cart-items/getlist-cart-items.component';

const routes: Routes = [
{
path:'getlist'
,
component:GetlistCartItemsComponent

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartitemRoutingModule { }
