import { Component, OnInit } from '@angular/core';
import { ContactusInfoService } from 'src/app/services/contactus-info.service';
import { IndexService } from 'src/app/services/index.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerArr: any = []
  contactInfoArr: any = []
  constructor(private indexService: IndexService, private contactUsInfo: ContactusInfoService) { }

  ngOnInit(): void {
    this.indexService.GetFooterH().subscribe(
      result => {
        this.footerArr = result
      }
    );
    this.contactUsInfo.getContactUsInfo().subscribe(
      result => {
        this.contactInfoArr = result
      }
    );
  }

}
