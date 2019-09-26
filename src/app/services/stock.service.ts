import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Stock } from '../models/stock.model';
import { Schedule } from "../models/schedule.model";
import { BehaviorSubject, Observable } from 'rxjs';
import { STOCK } from "../mock/mock-stock";
import { SCHEDULE } from "../mock/mock-schedule"
  
@Injectable({providedIn: 'root'})
export class StockService {

  private stocks: BehaviorSubject<Array<Stock>>;
  private schedule: BehaviorSubject<Array<Schedule>>;


  constructor(private http: HttpClient) { 
    this.stocks = new BehaviorSubject<Array<Stock>>(STOCK);
    this.schedule = new BehaviorSubject<Array<Schedule>>(SCHEDULE)
  }

  getStock(){
    return this.stocks.asObservable(); 
  }
  getSchedule(){
    return this.schedule.asObservable();
  }

  setStock(stock: Stock){
    let stocks = this.stocks.getValue();
    stocks.push(stock);
    this.stocks.next(stocks);
  }
 
}

