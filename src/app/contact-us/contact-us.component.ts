import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer} from '@angular/platform-browser';
import { ContactUsServiceService } from '../services/contact-us-service.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  contactUsInfoArr?:any=[];
  SafeMap;
  map:string=this.contactUsInfoArr[0]?.site_Map;
  status?:boolean;
  ContactUsForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    subject:new FormControl('', Validators.required),
    message:new FormControl('', Validators.required)
  });



  constructor(private contactUsService:ContactUsServiceService,private sanitizer: DomSanitizer) 
  {
    this.SafeMap=this.sanitizer.bypassSecurityTrustUrl(this.map);
  }

  ngOnInit(): void {
    this.contactUsService.getContactUsInfo().subscribe(
      result=>{this.contactUsInfoArr=result
        console.log(result);
      }
  );
  }
  SendContactUs()
  {
    const obj = {
    name:  this.ContactUsForm.value.name.toString(),
    email: this.ContactUsForm.value.email.toString(),
    phone: this.ContactUsForm.value.phone.toString(),
    subject:this.ContactUsForm.value.subject.toString(),
    message:this.ContactUsForm.value.message.toString(),
    }
    debugger
    let x=this.contactUsService.AddContactUs(obj);
    if(x)
    {
      this.status=true
    }
  }

}
