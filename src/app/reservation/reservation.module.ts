import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReservationRoutingModule } from './reservation-routing.module';
import { TablesComponent } from './tables/tables.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    TablesComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class ReservationModule { }
