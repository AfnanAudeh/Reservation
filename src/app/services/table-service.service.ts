import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<TableClass[]>('https://localhost:44343/api/table/GetAllTables');
  }
  CreateTable(table: any) {
    this.http.post("https://localhost:44343/api/reservation/InsertReservation", table);
  }
  UpdateTable(table: any) {
    this.http.put("https://localhost:44343/api/reservation/InsertReservation", table);
  }
  DeleteTable(id: number) {
    this.http.put('https://localhost:44343/api/reservation/InsertReservation/' + id, this.requestOptions);
  }
  ReserveTable(reservationData: any) {
    this.http.post("https://localhost:44343/api/reservation/InsertReservation", reservationData).
      subscribe(result => { console.log(result) });
  }
  FilterByNumberOfChairs(chairs: number) {
    return this.http.get<TableClass[]>('https://localhost:44343/api/table/FilterByNumberOfChairs/' + chairs);
  }
  FilterByDate(filter:any) {
  
    // let parametrs = getParamsFromDto(filter)
    return this.http.post<TableClass[]>('https://localhost:44343/api/table/getTableByDate',filter);
  }
  FilterByDateAndChair(filter:any) 
  {
    return this.http.post<TableClass[]>('https://localhost:44343/api/table/getTableByDateAndPerson/',filter );
  }
}

