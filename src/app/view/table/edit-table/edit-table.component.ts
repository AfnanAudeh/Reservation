import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableServiceService } from 'src/app/services/table-service.service';
import { TableClass } from 'src/app/shared/table-class.model';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  path: string = './assets/img/Tables';
  tableId: number =0;
  table?: any=[];
  EditTableForm: FormGroup = new FormGroup({
    max_Person: new FormControl(''),
    details: new FormControl(''),
    image_Location: new FormControl('')
  });
  constructor(private tableService: TableServiceService, private router: Router,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.tableId=history.state.id
    this.tableService.GetById(this.tableId).subscribe(
      (result) => {
        this.table = result
        console.log(result);
        
      }
    );
  }
  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.tableService.uploadImage(formData).subscribe(
      (result) => {
        this.EditTableForm.controls['image_Location'].setValue(result);
        this.path = './assets/img/Tables/' + result;
        this.toastr.success('Updated Succefully')
      }
    );
  }
  UpdateTable() {

  }
}
