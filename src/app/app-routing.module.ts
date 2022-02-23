import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ReservationModule } from './home/reservation/reservation.module';
import { IndexComponent } from './home/index/index.component';



const routes: Routes = [
 {
  path:'reservation',
  loadChildren:()=>ReservationModule
 },
 {
  path:'admin',
  loadChildren:()=>AdminDashboardModule
 },
 {
   path:'contactus',
   component:ContactUsComponent
 },
 {
   path:'aboutus',
   component:AboutUsComponent
 },
 {
   path:'',
   component:IndexComponent
 }
];

@NgModule({
  imports:
   [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
