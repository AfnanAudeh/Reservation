import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { ShowMenuItemComponent } from './show-menu-item/show-menu-item.component';
import { ListMenuItemComponent } from './list-menu-item/list-menu-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {NgbModule,NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    ShowMenuItemComponent,
    ListMenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class MenuModule { }
