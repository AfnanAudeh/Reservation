import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../services/about-us.service';
import { IndexService } from '../services/index.service';
import { AboutUsClass } from '../shared/about-us-class.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
aboutUsArr?:any=[];
  constructor(private AboutusService:AboutUsService ) { }

  ngOnInit(): void {
    this.AboutusService.GetAboutUs().subscribe(
      result=>{ this.aboutUsArr=result;  
        console.log(this.aboutUsArr);
          
      });
  }

}
