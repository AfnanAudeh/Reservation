import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableServiceService } from 'src/app/services/table-service.service';
import { TableClass } from 'src/app/shared/table-class.model';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
@Component({
  selector: 'app-get-tables',
  templateUrl: './get-tables.component.html',
  styleUrls: ['./get-tables.component.css']
})
export class GetTablesComponent implements OnInit {

  tables!: TableClass[];
  image: any = [];
  path: string = './assets/img/Tables/';
  images: String[] = [];
  constructor(private tableService: TableServiceService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.GetAllTables();

  }
  GetAllTables() {
    this.tableService.GetTables().subscribe(result => {
      this.spinner.show();
      this.tables = result
      this.GetImages(this.tables);
      this.spinner.hide();
    });
  }
  GetImages(arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      this.images[i] = this.path + arr[i].image_Location;
    }
  }
  AddTable() {
    this.router.navigate(['Tables/AddTable']);
  }
  EditTable(id?: number) {
    this.router.navigateByUrl('Tables/EditTable', { state: { id } });

  }
  DeleteTable(id?: number) {
    this.tableService.DeleteTable(id).subscribe();
  }
  DownloadReport() {
    let row: any[] = []
    let rowD: any[] = []
    let col = ['Table Id', 'Chairs number','Details' ,'Image']; // initialization for headers
    let title = "Resturant Tables" // title of report
    for (let a = 0; a < this.tables.length; a++) {
      row.push(this.tables[a].table_Id)
      row.push(this.tables[a].max_Person)
      row.push(this.tables[a].details)
      row.push(this.tables[a].image_Location)
      rowD.push(row);
      row = [];
    }
    this.getReport(col, rowD, title);
  }

  getReport(col: any[], rowD: any[], title: any) {
    const totalPagesExp = "{total_pages_count_string}";
    var pdf: any;
    pdf = new jsPDF('l', 'pt', 'legal');
    pdf.setTextColor(51, 156, 255);
    pdf.text("Resturant Tables", 450, 40);
    pdf.text(Date.now, 100, 40); // 450 here is x-axis and 80 is y-axis
    //pdf.text(Date.now, 450, 80); // 450 here is x-axis and 80 is y-axis
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