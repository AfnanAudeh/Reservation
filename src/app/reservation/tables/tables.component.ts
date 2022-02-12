import { Component, Input, OnInit } from '@angular/core';
import { IndexService } from 'src/app/services/index.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables!: TableClass[];
  constructor(private indexService : IndexService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.indexService.GetTables().subscribe(result=>{this.tables=result  
    } );
    
    
  }

}


