import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { IndexService } from 'src/app/services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  headerArr: any = [];
  indexArr?: any = [];
  image: string='./assets/img/Index/';

  constructor(private indexService: IndexService, private router: Router,
    private spinner: NgxSpinnerService)
   { }

  ngOnInit(): void {
    this.spinner.show();
    this.indexService.GetHeader().subscribe(
      result => {
        this.headerArr = result;
      }
    );
    this.indexService.GetIndex().subscribe(
      (result)=>{
        this.indexArr=result
      this.image=this.image+this.indexArr[0].bg_Path;
      this.spinner.hide();
    }
    );
  }
  BookTable() {
    this.router.navigate(['reservation/tables']);
  }
}
