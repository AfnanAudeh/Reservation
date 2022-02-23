import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentMethodService } from 'src/app/services/paymentMethod.service';

import { PaymentMethod } from 'src/data/paymentMethod';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.css']
})
export class AddPaymentMethodComponent implements OnInit {

  insertPaymentMethod= new FormGroup({
    name: new FormControl(),
  });
  constructor(private paymentMethodService :PaymentMethodService) { }
  InsertPaymentMethod(){
 let paymentMethod: PaymentMethod=new PaymentMethod();


 paymentMethod.Payment_Method_Name=this.insertPaymentMethod.controls['name'].value;


  this.paymentMethodService.InsertPaymentMethod(paymentMethod).subscribe(res=>{console.log(res)});
  }
  ngOnInit(): void {
  }

}
