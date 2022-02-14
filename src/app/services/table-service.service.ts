import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResrvationTableClass } from '../shared/resrvation-table-class.model';
import { TableClass } from '../shared/table-class.model';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor(private http :HttpClient) { }
GetTables()
{
  return this.http.get<TableClass[]>('https://localhost:44343/api/table/GetAllTables'); 
}
ReserveTable(reservationData:any)
{
  debugger
  this.http.post("https://localhost:44343/api/reservation/InsertReservation",reservationData).
  subscribe(result=>{console.log(result)});
}
FilterByNumberOfChairs(chairs : number)
{
  debugger
  this.http.get<TableClass[]>('https://localhost:44343/api/table/FilterByNumberOfChairs/'+chairs); 
}
}
