import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  AddTableForm: FormGroup = new FormGroup({
    max_Person: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    image_Location: new FormControl('', Validators.required)
  });
  constructor(private tableService:TableServiceService) { }

  ngOnInit(): void {
  }
  AddTable()
  {
    const obj={
      max_Person:this.AddTableForm.value.max_Person,
      details:this.AddTableForm.value.details,
      image_Location:this.AddTableForm.value.image_Location
    }
    this.tableService.CreateTable(obj).subscribe();
  }
  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.tableService.uploadImage(formData).subscribe(
      (result)=>{
        this.AddTableForm.value.image_Location=result;
      }
    );
  }
}
