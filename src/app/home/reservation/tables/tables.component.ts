import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';
import { TableServiceService } from 'src/app/services/table-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableDto } from 'src/app/shared/table-dto';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables!: TableClass[];
  filter?: TableDto;
  filterdByChairs?: TableClass[];
  filterdByDate?: TableClass[];
  @Input() chair: number | undefined;
  @Input() id: number | undefined;
  @Input() reservationFrom: Date | undefined;
  @Input() reservationTo: Date | undefined;
  sanitizedImageData: any;
  sanitizer: any;
  image: any=[];
  constructor(private tableService: TableServiceService, public dialog: MatDialog, private spinner: NgxSpinnerService) { }

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
  Get(imageName:string[]) {
    this.tableService.GetImage(imageName)
      .subscribe(
        (data: any) => {
          this.image = 'data:image/jpg;base64,' + data;
          this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.image);
        }
      );
  }
  // ***************************************** Should i test it
  Filter() {
    if (this.filter?.chairs != null)
      {
        if (this.filter?.reservationFrom == null && this.filter?.reservationTo == null) {
        this.tableService.FilterByNumberOfChairs(this.filter.chairs).subscribe((result) => { this.tables = result; })
      }
    }
  }
  FilterByChairs(value: any) {
    this.chair = parseInt(value);
    this.tableService.FilterByNumberOfChairs(this.chair).subscribe(result => {
      this.filterdByChairs = result
    });
    if (this.filterdByChairs) {
      this.tables = this.filterdByChairs;
    }

  }
  FilterByDate(value1?: any, value2?: any) {
    this.reservationFrom = value1;
    this.reservationTo = value2;
    let filter = {
      reservationFrom: this.reservationFrom,
      reservationTo: this.reservationTo
    }
    this.tableService.FilterByDate(filter).subscribe((result) => { this.tables = result });

  }
  FilterByDateAndChair(filter: any) {
    debugger
    this.tableService.FilterByDateAndChair(filter).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

}
