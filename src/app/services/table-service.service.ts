import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResrvationTableClass } from '../shared/resrvation-table-class.model';
import { TableClass } from '../shared/table-class.model';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor(private http: HttpClient) { }
  GetTables() {
    return this.http.get<TableClass[]>(environment.apiUrl+'table/GetAllTables');
  }
  CreateTable(table: any) {
    this.http.post(environment.apiUrl+"reservation/InsertReservation", table);
  }
  UpdateTable(table: any) {
    this.http.put(environment.apiUrl+"reservation/InsertReservation", table);
  }
  DeleteTable(id: number) {
    this.http.put(environment.apiUrl+'reservation/InsertReservation/' + id, this.requestOptions);
  }
  ReserveTable(reservationData: any) {
    this.http.post(environment.apiUrl+"reservation/InsertReservation", reservationData).
      subscribe(result => { console.log(result) });
  }
  FilterByNumberOfChairs(chairs: number) {
    return this.http.get<TableClass[]>(environment.apiUrl+'table/FilterByNumberOfChairs/' + chairs);
  }
  FilterByDate(filter:any) {
  
    return this.http.post<TableClass[]>(environment.apiUrl+'table/getTableByDate',filter);
  }
  FilterByDateAndChair(filter:any) 
  {
    return this.http.post<TableClass[]>(environment.apiUrl+'table/getTableByDateAndPerson/',filter );
  }
}

