import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { GetlistCreditComponent } from './getlist-credit/getlist-credit.component';
import { ShowCreditComponent } from './show-credit/show-credit.component';
import { EditCreditComponent } from './edit-credit/edit-credit.component';
import { AddCreditComponent } from './add-credit/add-credit.component';


@NgModule({
  declarations: [
    GetlistCreditComponent,
    ShowCreditComponent,
    EditCreditComponent,
    AddCreditComponent
  ],
  imports: [
    CommonModule,
    CreditRoutingModule
  ]
})
export class CreditModule { }
