import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { ReservationService } from 'src/app/services/reservation.service';
import { ReservationsReportComponent } from '../reservations-report/reservations-report.component';



@Component({
  selector: 'app-get-reservations',
  templateUrl: './get-reservations.component.html',
  styleUrls: ['./get-reservations.component.css'],

})
export class GetReservationsComponent implements OnInit {
  reservationArr: any = [];
  @Input() reservationFrom: Date | undefined | null;
  @Input() reservationTo: Date | undefined | null;

  constructor(private reservationService: ReservationService, public router:Router,public spinner:NgxSpinnerService) {
  }
  ngOnInit(): void {
    this.spinner.show()
    this.GetReservation();
  }
  Generate() {
    this.router.navigate(['/reservations/ReservationsReport']);
  }
  GetReservation() {
    this.reservationService.GetReservation().subscribe(
      result => {
        this.reservationArr = result;
        this.spinner.hide();
      }
    );
    
  }
  Clear() {
    this.reservationFrom = null;
    this.reservationTo = null;
    this.GetReservation();
  }
  FilterReservations() {
    const obj = {
      id: null,
      reservationFrom: this.reservationFrom,
      reservationTo: this.reservationTo,
      chairs: null
    }
    this.spinner.show()
    if (this.reservationFrom == null && this.reservationTo == null) {
      console.log('Dates are empty');
      this.spinner.hide();
    }
    else if (this.reservationFrom != null && this.reservationTo != null) {
      this.reservationService.FilterReservationsBetweenDates(obj).subscribe(
        (result) => {
          this.reservationArr = result;
          this.spinner.hide();
        });
    }
    else if (this.reservationFrom != null && this.reservationTo == null) {
      this.reservationService.FilterReservationsFromDate(obj).subscribe(
        (result) => {
          this.reservationArr = result;
          this.spinner.hide();
        });
    }
    else if (this.reservationFrom == null && this.reservationTo != null) {
      this.reservationService.FilterReservationsToDate(obj).subscribe(
        (result) => { this.reservationArr = result ;
          this.spinner.hide();
        })
    }

  }
  UpdateState(i: number, state: string) {
    this.spinner.show();
    const obj = {
      reservation_Id: this.reservationArr[i].reservation_Id,
      customer_Id: this.reservationArr[i].customer_Id,
      table_Id: this.reservationArr[i].table_Id,
      reservation_From: this.reservationArr[i].reservation_From,
      reservation_To: this.reservationArr[i].reservation_To,
      res_Status: state
    }
    console.log(obj);
    this.reservationService.UpdateReservation(obj).subscribe(
      (result) => {
        console.log(result);
        this.spinner.hide();
      }
    )
  }

}
