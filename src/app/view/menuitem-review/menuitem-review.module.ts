import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuitemReviewRoutingModule } from './menuitem-review-routing.module';
import { AddMenuitemReviewComponent } from './add-menuitem-review/add-menuitem-review.component';
import { EditMenuitemReviewComponent } from './edit-menuitem-review/edit-menuitem-review.component';
import { ShowMenuitemReviewComponent } from './show-menuitem-review/show-menuitem-review.component';
import { GetlistMenuitemReviewComponent } from './getlist-menuitem-review/getlist-menuitem-review.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AddMenuitemReviewComponent,
    EditMenuitemReviewComponent,
    ShowMenuitemReviewComponent,
    GetlistMenuitemReviewComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MenuitemReviewRoutingModule
  ]
})
export class MenuitemReviewModule { }
