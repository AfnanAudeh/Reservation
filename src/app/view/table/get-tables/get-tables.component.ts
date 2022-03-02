import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableServiceService } from 'src/app/services/table-service.service';
import { TableClass } from 'src/app/shared/table-class.model';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { MatDialog } from '@angular/material/dialog';
import { AddTableComponent } from '../add-table/add-table.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
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
  constructor(private tableService: TableServiceService, private router: Router, private spinner: NgxSpinnerService,public dialog: MatDialog) { }

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
    this.dialog.open(AddTableComponent ,{ width: '1000px' });
  }
  EditTable(id?: number) {
    this.router.navigateByUrl('Tables/EditTable', { state: { id } });

  }
  DeleteTable(id?: number) {
    this.tableService.DeleteTable(id).subscribe();
  }
  
}