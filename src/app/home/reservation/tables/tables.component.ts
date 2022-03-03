import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';
import { TableServiceService } from 'src/app/services/table-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableDto } from 'src/app/shared/table-dto';
import { ReservationService } from 'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables!: TableClass[];
  filterdByChairs?: TableClass[];
  filterdByDate?: TableClass[];
  @Input() chair: number | undefined | null;
  @Input() reservationFrom: Date | undefined | null;
  @Input() reservationTo: Date | undefined | null;

  image: any = [];
  constructor(private tableService: TableServiceService, public dialog: MatDialog,
    private spinner: NgxSpinnerService, private reservationService: ReservationService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.GetAllTables();

  }
  GetAllTables() {
    this.spinner.show();
    this.tableService.GetTables().subscribe(result => {
      this.tables = result
      this.spinner.hide();
    });
  }

  // ***************************************** Should i test it
  Filter() {
    this.spinner.show()
    const filter = {
      id: null,
      reservationFrom: this.reservationFrom,
      reservationTo: this.reservationTo,
      chairs: this.chair
    }
    if (filter.reservationFrom != null && filter.reservationTo != null && filter.chairs == null) {
      this.tableService.FilterByDate(filter).subscribe(
        (result) => {
          this.tables = result;
          this.spinner.hide()
        })
    }
    else if (filter.reservationFrom != null && filter.reservationTo != null && filter.chairs != null) {
      this.tableService.FilterByDateAndChair(filter).subscribe(result => { this.tables = result; this.spinner.hide() })
    }
    else if (filter.reservationFrom == null && filter.reservationTo == null && filter.chairs != null) {
      this.tableService.FilterByNumberOfChairs(filter.chairs).subscribe(
        result => {
          this.tables = result;
          this.spinner.hide();
        })
    }
    else if (filter.reservationFrom == null && filter.reservationTo != null || filter.reservationFrom != null && filter.reservationTo == null) {
      this.toastr.error('You Should Enter 2 Dates')
      this.spinner.hide();
    }
    else if (filter.reservationFrom == null && filter.reservationTo == null && filter.chairs == null) {
      this.spinner.hide();
    }
  }
  Clear() {
    this.chair = null
    this.reservationFrom = null;
    this.reservationTo = null;
    this.GetAllTables();
  }

}
