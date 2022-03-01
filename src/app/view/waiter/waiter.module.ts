import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaiterRoutingModule } from './waiter-routing.module';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class WaiterModule { }
