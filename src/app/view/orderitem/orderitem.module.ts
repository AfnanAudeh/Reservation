import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderitemRoutingModule } from './orderitem-routing.module';
import { AddOrderitemComponent } from './add-orderitem/add-orderitem.component';
import { EditOrderitemComponent } from './edit-orderitem/edit-orderitem.component';
import { ShowOrderitemComponent } from './show-orderitem/show-orderitem.component';
import { GetlistOrderitemComponent } from './getlist-orderitem/getlist-orderitem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AddOrderitemComponent,
    EditOrderitemComponent,
    ShowOrderitemComponent,
    GetlistOrderitemComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,   
    OrderitemRoutingModule
  ]
})
export class OrderitemModule { }
