import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TableServiceService } from 'src/app/services/table-service.service';
import { TableClass } from 'src/app/shared/table-class.model';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  path: string = './assets/img/Tables/';

  tableId: number = 0;
  chair: number = 0;
  details: string = '';
  image: string = '';
  table: TableClass = new TableClass();

  constructor(private tableService: TableServiceService, private router: Router,
    public spinner: NgxSpinnerService, private route: ActivatedRoute, 
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.tableId = param['id'];
      this.getTableById();
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
       this.table.image_Location=result;
        this.image = this.path + result;
      }
    );
  }

  UpdateTable(from: NgForm) {
  
    this.tableService.UpdateTable(this.table).subscribe(
      (result) => {
        if(result){
          this.toastr.success('Hello world!', 'Toastr fun!');
          this.backToList();
        }
      },(error) =>
      {
        alert("An error has occured");
      }
    );
  }

  getTableById() {
    this.spinner.show()
    this.tableService.GetById(this.tableId).subscribe(
      (result) => {
        this.table = result;
        console.log(this.table);
        this.image = this.path + this.table?.image_Location;
        this.spinner.hide();
      }
    );
  }

  backToList(){
    this.router.navigate(['../../GetTable'], {relativeTo: this.route});
  }
}
