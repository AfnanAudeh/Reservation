import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footerArr:any=[]
  constructor(private indexService: IndexService) { }

  ngOnInit(): void {
this.indexService.GetFooterH().subscribe(
  result=>{this.footerArr=result
  
  }
);
  }

}
