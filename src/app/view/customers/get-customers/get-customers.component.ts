import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {
  customersArr:any=[]
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.GetCustomers();
  }
  GetCustomers() {
    this.customerService.GetAllCustomers().subscribe(
      result => { 
      this.customersArr=result; }
    );
  }
}
