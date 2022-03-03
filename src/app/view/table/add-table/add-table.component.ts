import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { empty } from 'rxjs';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  path: string = './assets/img/upload.png';
  AddTableForm: FormGroup = new FormGroup({
    max_Person: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    image_Location: new FormControl('', Validators.required)
  });
  constructor(private tableService: TableServiceService, private toastr: ToastrService,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  AddTable() {
    const obj = {
      max_Person: parseInt(this.AddTableForm.value.max_Person),
      details: this.AddTableForm.value.details,
      image_Location: this.AddTableForm.value.image_Location
    }
    this.tableService.CreateTable(obj).subscribe(
      (result) => {
        this.toastr.success('Table Created Succefully')
      });
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
        this.AddTableForm.controls['image_Location'].setValue(result);
        this.path = './assets/img/Tables/' + result;
      }
    );
  }
  Clear() {
    this.path = './assets/img/upload.png';
    this.AddTableForm.reset();;
  }
  backToList() {
    this.router.navigate(['../GetTable'], { relativeTo: this.route });
  }
}
