
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from 'jwt-decode';
import { Register } from 'src/data/register';
import { AboutUs } from 'src/data/aboutus';
import { Basicorder } from 'src/data/basicOrder';
import { Observable, Timestamp } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  }
  constructor(public http: HttpClient, private route: Router) { }


  InsertOrder(order: Basicorder) {

    return this.http.post<boolean>(environment.apiUrl + "Order/InsertOrder", order, this.requestOptions);
  }

  UpdateOrder(order: Basicorder) {
    return this.http.put<boolean>(environment.apiUrl + "Order/UpdateOrder", order, this.requestOptions);
  }
  DeleteOrder(orderId: number) {
    return this.http.delete<boolean>(environment.apiUrl + "Order/DeleteOrder?orderId=" + orderId, this.requestOptions);
  }
  GetAllOrder() {
    return this.http.get<any[]>(environment.apiUrl + "Order/GetAllOrder", this.requestOptions);
  }
  GetOrderById(orderId: number) {
    return this.http.get<any[]>(environment.apiUrl + "Order/GetOrderById?orderId=" + orderId, this.requestOptions);
  }
  GetOrderByDate(fromDate: Date, toDate: Date) {
    console.log(fromDate);
    return this.http.get<any[]>(environment.apiUrl + "Order/GetOrderByDate?fromDate=" + fromDate.toISOString() + "&toDate=" + toDate.toISOString(), this.requestOptions);
  }
  UpdatePaymentStatusByOrderId(OrderId: number, PaymentStatus: string) {
    return this.http.put<boolean>(environment.apiUrl + "Order/UpdatePaymentStausByOrderId?OrderId=" + OrderId + "&PaymentStatus=" + PaymentStatus, this.requestOptions);
  }
  UpdateAccessStatusByOrderId(OrderId: number, AccessStatus: string) {
    return this.http.put<boolean>(environment.apiUrl + "Order/UpdateAccessStatusByOrderId?OrderId=" + OrderId + "&AccessStatus=" + AccessStatus, this.requestOptions);

  }
  UpdateWaiterIdByOrderId(OrderId: number, WaiterId: number) {
    return this.http.put<boolean>(environment.apiUrl + "Order/UpdateWaiterIdByOrderId?OrderId=" + OrderId + "&WaiterId=" + WaiterId, OrderId, this.requestOptions);
  }

  GetLastOrderId() {
    return this.http.get<any[]>(environment.apiUrl + "Order/GetLastOrderId", this.requestOptions);
  }

  GetOrderByWaiterId(waiterId: number) {
    return this.http.get<any[]>(environment.apiUrl + "Order/GetOrderByWaiterId?waiterId=" + waiterId, this.requestOptions);
  }
  GetOrderNotAssignWaiter() {
    return this.http.get<any[]>(environment.apiUrl + "Order/GetOrderNotAssignWaiter", this.requestOptions);
  }

}  