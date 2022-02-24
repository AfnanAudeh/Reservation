import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactusInfoService } from 'src/app/services/contactus-info.service';
import { ContactUsInfoClass } from 'src/app/shared/contact-us-info-class';


@Component({
  selector: 'app-contactusinfo',
  templateUrl: './contactusinfo.component.html',
  styleUrls: ['./contactusinfo.component.css']
})
export class ContactusinfoComponent implements OnInit {
  contactUsInfo?: any = {};
  ContactUsInfoForm: FormGroup = new FormGroup({
    location: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    open_Hours: new FormControl(''),
    open_Days: new FormControl('')
  });

  constructor(private contactUsInfoService: ContactusInfoService) { }

  ngOnInit(): void {
    this.contactUsInfoService.getContactUsInfo().subscribe(
      (result) => {
        this.contactUsInfo = result
        console.log(result);

      });
  }

  UpdateContactUsInfo() {
    const obj: ContactUsInfoClass = {
      id: this.contactUsInfo[0].id,
      location: this.ContactUsInfoForm.value.location,
      email: this.ContactUsInfoForm.value.email,
      phone: this.ContactUsInfoForm.value.phone,
      open_Hours: this.ContactUsInfoForm.value.open_Hours,
      open_Days: this.ContactUsInfoForm.value.open_Days
    }
    this.contactUsInfoService.UpdateContactUsInfo(obj).subscribe(result=>{console.log(result);
    });
  }
}
