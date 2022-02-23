import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartitemRoutingModule } from './cartitem-routing.module';
import { GetlistCartItemsComponent } from './getlist-cart-items/getlist-cart-items.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    GetlistCartItemsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    MatRadioModule,
    MatCardModule,
    CartitemRoutingModule
  ]
})
export class CartitemModule { }
