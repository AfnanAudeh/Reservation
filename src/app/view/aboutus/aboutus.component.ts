import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/services/about-us.service';
import { AboutUsClass } from 'src/app/shared/about-us-class.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  aboutUsArr?: any = [];
  constructor(private AboutusService: AboutUsService) { }
  
  ngOnInit(): void {
    this.AboutusService.GetAboutUs().subscribe(
      (result) => {
         this.aboutUsArr = result ;
        }
      );
  }
  UpdateAboutUs(aboutUs: string) {
    const obj: AboutUsClass = {
      id: this.aboutUsArr[0].id,
      about_Us_Body: aboutUs
    }
    this.AboutusService.UpdateAboutUs(obj).subscribe();
  }
}
