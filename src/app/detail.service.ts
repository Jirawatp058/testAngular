import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  
  constructor() { }
  private page = new EventEmitter<string>();
  private inputDetail: detail = {
    filingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0
  };
  
  public setDetail(data: detail){
    console.log(data)
    this.inputDetail = data;
  }

  public getDetail(){
    return this.inputDetail;
  }

  public setPage(data: string){
    this.page.emit(data);
  }

  public getPage(){
    return this.page;
  }




  
}


export interface detail {
  filingType:string;
  month:string;
  year:string;
  saleAmount: number;
  taxAmount : number;
  surcharge: number;
  penalty: number;
  totalAmount: number;
 }