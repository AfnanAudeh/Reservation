import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactusInfoService } from 'src/app/services/contactus-info.service';
import { IndexService } from 'src/app/services/index.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
headerArr:any=[];
contactInfo:any=[];
  constructor(private indexService : IndexService, private router:Router,private contactUsInfo:ContactusInfoService) { }

  ngOnInit(): void {
    this.indexService.GetHeader().subscribe(
      result=>{
        this.headerArr=result;
      }
    );
    this.contactUsInfo.getContactUsInfo().subscribe(
      result=>{
        this.contactInfo=result;
        console.log(result);
        
      }
    )
   }
   
   BookTable()
   {
    this.router.navigate(['reservation/tables']);
   }
   Home()
   {
    this.router.navigate(['']);
   }
   AboutUs()
   {
    this.router.navigate(['aboutus']);
   }
   ContactUs()
   {
    this.router.navigate(['contactus']);
   }
   Login()
   {
    this.router.navigate(['auth/login']);
   }
}
