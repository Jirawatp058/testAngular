import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent implements OnInit {

  constructor(public detailService: DetailService) { }


  monthList:Array<{ value: string; month: string; }> = [
    {value:"1", month:"January"},
    {value:"2", month:"February"},
    {value:"3", month:"March"},
    {value:"4", month:"April"},
    {value:"5", month:"May"},
    {value:"6", month:"June"},
    {value:"7", month:"July"},
    {value:"8", month:"August"},
    {value:"9", month:"September"},
    {value:"10", month:"October"},
    {value:"11", month:"November"},
    {value:"12", month:"December"}
  ]
  filingType:string = "0";
  month:string = "";
  year:string = "";
  saleAmount: string = "";
  taxAmount : string = "";
  surcharge: string = "";
  penalty: string = "200.00";
  totalAmount: string = "";


  date1 = new Date();
  currentMonth:number = 0;
  ngOnInit(): void {
    this.currentMonth = this.date1.getMonth()+1;
    console.log(this.currentMonth)
  }


  removeCommasSaleAmount(){
    const replaceText = this.saleAmount.replaceAll(',', '');
    this.saleAmount = replaceText;
  }

  addCommasSaleAmount(){
    this.saleAmount = (Number(this.saleAmount).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const taxAmountTmp = (Number(this.saleAmount.replaceAll(',', '')) * 0.07).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.taxAmount = taxAmountTmp;
    this.surcharge = (Number(this.taxAmount.replaceAll(',', ''))*0.1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.sumTotalAmount();
    console.log(this.surcharge);
  }

  filterContentSaleAmount($event: string) {
    const replaceText = $event.replace('a', '');
    this.saleAmount = replaceText
  }

  removeCommasTaxAmount(){
    const replaceText = this.taxAmount.replaceAll(',', '');
    this.taxAmount = replaceText;
  }

  addCommasTaxAmount(){
    this.taxAmount = (Number(this.taxAmount).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.surcharge = (Number(this.taxAmount.replaceAll(',', ''))*0.1).toFixed(2).toString();
    this.sumTotalAmount();
    console.log(this.surcharge)
  }
  filterContentTaxAmount($event: string) {
    console.log($event)
    const replaceText = $event.replace('a', '');
    this.taxAmount = replaceText
  }

  sumTotalAmount(){
    if(this.filingType === '1'){
      this.totalAmount = (Number(this.taxAmount.replaceAll(',', '')) + Number(this.surcharge.replaceAll(',', '')) + Number(this.penalty.replaceAll(',', ''))).toFixed(2).toString();
    } else {
      this.totalAmount = Number(this.taxAmount.replaceAll(',', '')).toFixed(2).toString();
    }
    

  }

  next(){
    if(!this.filingType || !this.month || !this.year || !this.saleAmount || this.saleAmount == "0.00"){
      return;
    }
    
    let inputDetail = {
      filingType: this.filingType,
      month: this.month,
      year: this.year,
      saleAmount: Number(this.saleAmount.replaceAll(',', '')),
      taxAmount: Number(this.taxAmount.replaceAll(',', '')),
      surcharge: this.filingType === '1' ? Number(this.surcharge.replaceAll(',', '')): 0,
      penalty: this.filingType === '1' ? Number(this.penalty.replaceAll(',', '')):0,
      totalAmount: Number(this.totalAmount.replaceAll(',', ''))
    }
    this.detailService.setDetail(inputDetail);
    this.detailService.setPage("confirm");
  }
}
