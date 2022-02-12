import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReservationRoutingModule } from './reservation-routing.module';

import {MatCardModule} from '@angular/material/card';
import { TablesComponent } from './tables/tables.component';
import { TablesCardsComponent } from './tables/tables-cards/tables-cards.component';
import { TableDialogComponent } from './tables/table-dialog/table-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReserveDialogComponent } from './tables/reserve-dialog/reserve-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    TablesComponent,
    TablesCardsComponent,
    TableDialogComponent,
    ReserveDialogComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports:[ CommonModule,
    ReservationRoutingModule,
    SharedModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
    entryComponents:[TableDialogComponent,ReserveDialogComponent]
})
export class ReservationModule { }
