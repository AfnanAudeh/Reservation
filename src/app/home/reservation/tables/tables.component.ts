import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';
import { TableServiceService } from 'src/app/services/table-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableDto } from 'src/app/shared/table-dto';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables!: TableClass[];
  filterdByChairs?: TableClass[];
  filterdByDate?: TableClass[];
  @Input() chair: number | undefined;
  @Input() id: number | undefined;
  @Input() reservationFrom: Date | undefined;
  @Input() reservationTo: Date | undefined;

  image: any = [];
  constructor(private tableService: TableServiceService, public dialog: MatDialog, private spinner: NgxSpinnerService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.GetAllTables();

  }
  GetAllTables() {
    this.tableService.GetTables().subscribe(result => {
      this.tables = result
      this.spinner.hide();
    });
  }
 
  // ***************************************** Should i test it
  Filter() {
    const filter = {
      reservationFrom: this.reservationFrom,
      reservationTo: this.reservationTo,
      chairs: this.chair
    }
    if (filter.reservationFrom != null && filter.reservationTo != null && filter.chairs == null) {
      this.tableService.FilterByDate(filter).subscribe(result => { this.tables = result })
    }
    else if (filter.reservationFrom != null && filter.reservationTo != null && filter.chairs != null) {
      this.tableService.FilterByDateAndChair(filter).subscribe(result => { this.tables = result })
    }
  }
  Clear() {
    this.chair = 0
    this.reservationFrom = undefined;
    this.reservationTo = undefined;
  }

}
