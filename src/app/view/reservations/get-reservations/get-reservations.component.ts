import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from 'src/app/services/reservation.service';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
@Component({
  selector: 'app-get-reservations',
  templateUrl: './get-reservations.component.html',
  styleUrls: ['./get-reservations.component.css']
})
export class GetReservationsComponent implements OnInit {
  reservationArr: any = [];
  @Input() reservationFrom: Date | undefined;
  @Input() reservationTo: Date | undefined;
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.GetReservation();
  }
  GetReservation() {
    this.reservationService.GetReservation().subscribe(
      result => {
        this.reservationArr = result;
      }
    );
  }
  FilterReservations() {
    const obj = {
      id:null,
      reservationFrom: this.reservationFrom,
      reservationTo: this.reservationTo,
      chairs:null
    }
    if (this.reservationFrom == null && this.reservationTo==null) {
      console.log('Dates are empty');
    }
    else if (this.reservationFrom != null && this.reservationTo != null) {
      this.reservationService.FilterReservationsBetweenDates(obj).subscribe(
        (result) => {
           this.reservationArr = result;
        });
    }
    else if (this.reservationFrom != null && this.reservationTo == null) {
      this.reservationService.FilterReservationsFromDate(obj).subscribe(
        (result) => { 
        this.reservationArr = result;
         console.log(result);
        });
    }
    else if(this.reservationFrom == null && this.reservationTo != null)
    {
      this.reservationService.FilterReservationsToDate(obj).subscribe((result) => { this.reservationArr = result })
    }

  }
  UpdateState(i: number, state: string) {

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
      }
    )
  }
  DownloadReport() {
    let row: any[] = []
    let rowD: any[] = []
    let col = ['Reservation Id', 'Customer Id', 'Table Id', 'Reservation From', 'Reservation To', 'Reservation State']; // initialization for headers
    let title = "Reservations Report" // title of report
    for (let a = 0; a < this.reservationArr.length; a++) {//Data
      row.push(this.reservationArr[a].reservation_Id)
      row.push(this.reservationArr[a].customer_Id)
      row.push(this.reservationArr[a].table_Id)
      row.push(this.reservationArr[a].reservation_From)
      row.push(this.reservationArr[a].reservation_To)
      row.push(this.reservationArr[a].res_Status)
      rowD.push(row);
      row = [];
    }
    this.getReport(col, rowD, title);
  }

  getReport(col: any[], rowD: any[], title: any) {//Download
    const totalPagesExp = "{total_pages_count_string}";
    var pdf: any;
    pdf = new jsPDF('l', 'pt', 'legal');
    pdf.setTextColor(51, 156, 255);
    pdf.text("Resturant Reservations", 450, 40);
    pdf.text("" + title, 435, 100);  //
    pdf.setLineWidth(1.5);
    pdf.line(5, 107, 995, 107)
    var pageContent = function (data: any) {
      // HEADER

      // FOOTER
      var str = "Page " + data.pageCount;
      // Total page number plugin only available in jspdf v1.0+
      if (typeof pdf.putTotalPages === 'function') {
        str = str + " of " + totalPagesExp;
      }
      pdf.setFontSize(10);
      var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
      pdf.text(str, data.settings.margin.left, pageHeight - 10); // showing current page number
    };
    pdf.autoTable(col, rowD,
      {
        addPageContent: pageContent,
        margin: { top: 110 },
      });

    //for adding total number of pages // i.e 10 etc
    if (typeof pdf.putTotalPages === 'function') {
      pdf.putTotalPages(totalPagesExp);
    }

    pdf.save(title + '.pdf');
  }
}
