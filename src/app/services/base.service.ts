import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
public url:string ="https://localhost:44343/api/";
  constructor() { }
}
