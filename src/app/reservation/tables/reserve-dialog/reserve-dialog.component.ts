import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {
  ReserveForm:FormGroup=new FormGroup({
    table_Id:new FormControl('',Validators.required),
    reservation_From:new FormControl('',Validators.required),
    reservation_To:new FormControl('',Validators.required)
  });
  tableId:number;
  constructor(@Inject (MAT_DIALOG_DATA) public data:any) 
  {
    this.tableId=data.TableId;
   }

  ngOnInit(): void {
    console.log(this.tableId);
    
  }
CreateReservetion()
{

}
}
