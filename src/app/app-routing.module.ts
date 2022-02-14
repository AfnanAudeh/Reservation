import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReservationModule } from './reservation/reservation.module';



const routes: Routes = [
 {
   path:'reservation',
  loadChildren:()=>ReservationModule
 },
 {
   path:'contactus',
   component:ContactUsComponent
 }
];

@NgModule({
  imports:
   [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
