import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReservationModule } from './reservation/reservation.module';



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
 }
];

@NgModule({
  imports:
   [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
