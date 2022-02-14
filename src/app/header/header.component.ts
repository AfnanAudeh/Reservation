import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from '../services/index.service';
// work
/////////////////////////////////////
////////////////////////////////////
///////////////////////////////////
///////////////////////////////
///////////////////////////////
//////////////////////////
/////////////////////
//////////
//////
//////
//
//
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input () header_Id :number|undefined;
  @Input() logo_Image : string|undefined;
  @Input () project_Name : string | undefined;
  @Input()  phone :string | undefined;
  @Input() openinG_HOURS :string | undefined;
  @Input() openinG_DAYS :string | undefined;

headerArr:any=[];
  constructor(private indexService : IndexService, private router:Router) { }

  ngOnInit(): void {
    this.indexService.GetHeader().subscribe(
      result=>{
        this.headerArr=result;
      }
    );
   }
   
   BookTable()
   {
    this.router.navigate(['reservation/tables']);
   }
  
}
