import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { GetReservationsComponent } from './get-reservations/get-reservations.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetReservationsComponent
  ],
  imports: [
    ReservationsRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class ReservationsModule { }
