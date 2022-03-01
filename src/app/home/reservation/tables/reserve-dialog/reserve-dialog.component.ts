import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationService } from 'src/app/services/reservation.service';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {
  isVisible = false;
  Message=false;
  ReserveForm: FormGroup = new FormGroup({
    table_Id: new FormControl('', Validators.required),
    reservation_From: new FormControl('', Validators.required),
    reservation_To: new FormControl('', Validators.required)
  });
  tableId: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private tableService: TableServiceService,private reservationService:ReservationService) {
    this.tableId = data.TableId;
  }

  ngOnInit(): void {}
  
  CreateReservetion() {
    this.isVisible = true;
    const obj = {
      table_Id: this.tableId,
      customer_Id: 4,
      reservation_From: this.ReserveForm.value.reservation_From.toString(),
      reservation_To: this.ReserveForm.value.reservation_To.toString(),
      res_Status: "PENDING"
    }
    console.log(obj);
    this.reservationService.ReserveTable(obj).subscribe(
      (result)=>{
        this.isVisible = false;
        this.Message=true
      }
    );

  }
}
