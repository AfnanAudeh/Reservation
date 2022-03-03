import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusInfoRoutingModule } from './contactus-info-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactusInfoRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactusInfoModule { }
