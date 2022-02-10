import { Component, Input, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input () Header_Id :number|undefined;
@Input() Logo_Image : string|undefined;
@Input () Project_name : string | undefined;
  constructor(private indexService : IndexService) { }

  ngOnInit(): void {
    this.indexService.getHeader();
  }

  
}
