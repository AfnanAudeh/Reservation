import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { EditTableComponent } from './edit-table/edit-table.component';
import { AddTableComponent } from './add-table/add-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetTablesComponent } from './get-tables/get-tables.component';

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
     ReactiveFormsModule
  ]
})
export class TableModule { }