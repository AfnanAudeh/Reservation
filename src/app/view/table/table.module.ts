import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TableRoutingModule } from './table-routing.module';
import { EditTableComponent } from './edit-table/edit-table.component';
import { AddTableComponent } from './add-table/add-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetTablesComponent } from './get-tables/get-tables.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    EditTableComponent,
    AddTableComponent,
    GetTablesComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatDialogModule
  ],
  exports: [NgxSpinnerModule]
})
export class TableModule { }
