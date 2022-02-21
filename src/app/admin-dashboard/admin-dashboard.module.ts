import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusinfoComponent } from './contactusinfo/contactusinfo.component';
import { SysimageComponent } from './sysimage/sysimage.component';
import { TablesComponent } from './tables/tables.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutusComponent,
    ContactusinfoComponent,
    SysimageComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule ,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
