import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomersRoutingModule } from './customers-routing.module';
import { GetCustomersComponent } from './get-customers/get-customers.component';


@NgModule({
  declarations: [
    GetCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgxSpinnerModule
  ]
})
export class CustomersModule { }
