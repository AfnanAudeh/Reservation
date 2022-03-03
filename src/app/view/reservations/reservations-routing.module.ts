import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetReservationsComponent } from './get-reservations/get-reservations.component';
import { ReservationsReportComponent } from './reservations-report/reservations-report.component';

const routes: Routes = [
  {
    path:"GetReservations",
    component:GetReservationsComponent
  },
  {
    path:"ReservationsReport",
    component:ReservationsReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
