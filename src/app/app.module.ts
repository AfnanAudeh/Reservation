import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { IndexService } from './services/index.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { IndexComponent } from './home/index/index.component';
import { AdminDashboardComponent } from './Dashboards/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Dashboards/customer-dashboard/customer-dashboard.component';
import { WaiterDashboardComponent } from './Dashboards/waiter-dashboard/waiter-dashboard.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { AdminLayoutComponent } from './layouts copy/admin-layout/admin-layout.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    ContactUsComponent,
    IndexComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    WaiterDashboardComponent,
    AdminLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ComponentsModule,
    MatDialogModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    ToastrModule,
    NgxMatNativeDateModule,
    CommonModule

  ],
  exports: [MatFormFieldModule,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent],
  providers: [IndexService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
