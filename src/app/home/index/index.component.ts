import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IndexService } from 'src/app/services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  headerArr: any = [];
  indexArr?: any = [];
  image: any;
  sanitizedImageData: any;
  constructor(private indexService: IndexService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.indexService.GetHeader().subscribe(
      result => {
        this.headerArr = result;
      }
    );
    this.indexService.GetIndex().subscribe(
      (result) => {
        this.indexArr = result;
        this.Get(this.indexArr[0]?.bg_Path)
      }
    );

  }
  BookTable() {
    this.router.navigate(['reservation/tables']);
  }
  Get(imageName:string) {
    this.indexService.GetImage(imageName)
      .subscribe(
        (data: any) => {
          this.image = 'data:image/jpg;base64,' + data;
          this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.image);
        }
      );
  }
}
