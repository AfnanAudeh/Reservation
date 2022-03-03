import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {
  customersArr:any=[]
  constructor(private customerService:CustomerService,public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.GetCustomers();
  }
  GetCustomers() {
    this.customerService.GetAllCustomers().subscribe(
      result => { 
      this.customersArr=result;
      this.spinner.hide();
    }
    );
  }
}
