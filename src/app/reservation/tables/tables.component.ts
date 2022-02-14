import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';
import { TableServiceService } from 'src/app/services/table-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables!: TableClass[];
  chairs = new FormControl('');
  constructor(private tableService: TableServiceService, public dialog: MatDialog,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.tableService.GetTables().subscribe(result => {
      this.tables = result
      this.spinner.hide();
    });
    

  }
  FilterByCairs(chairs : number)
  {
    let noOfChairs=this.chairs.value;
    debugger
    this.tableService.FilterByNumberOfChairs(noOfChairs);
  }
  }


