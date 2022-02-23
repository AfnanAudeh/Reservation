import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestimonialService } from 'src/app/services/testimonal.service';

import { Testimonial } from 'src/data/testimonial';

@Component({
  selector: 'app-add-testimonail',
  templateUrl: './add-testimonail.component.html',
  styleUrls: ['./add-testimonail.component.css']
})
export class AddTestimonailComponent implements OnInit {
  insertTestimonial= new FormGroup({
    testimonialMessage:new FormControl(),
    customerId:new FormControl(),
  });
  constructor(private testimoialService :TestimonialService) { }
  InsertTestimonial(){
 let  testimonail: Testimonial=new Testimonial();


 testimonail.Testimonial_Message=this.insertTestimonial.controls['testimonialMessage'].value;
 testimonail.Customer_Id=Number.parseInt(this.insertTestimonial.controls['customerId'].value);


  this.testimoialService.InsertTestimonial(testimonail).subscribe(res=>{console.log(res)});
  }
  ngOnInit(): void {

  }

}
