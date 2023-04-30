import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DetailService, detail } from '../detail.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-confirm-and-review',
  templateUrl: './confirm-and-review.component.html',
  styleUrls: ['./confirm-and-review.component.css']
})
export class ConfirmAndReviewComponent implements OnInit {

  constructor(public detailService: DetailService) { }
  detail:detail = {
    filingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0
  }
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
  filingType:string = "";
  month:Array<{ value: string; month: string; }> = [];
  year:string = "";
  saleAmount: string = "";
  taxAmount : string = "";
  surcharge: string = "";
  penalty: string = "200.00";
  totalAmount: string = "";


  ngOnInit(): void {
    this.detail = this.detailService.getDetail();
    this.filingType = this.detail.filingType === "0"? "Ordinary Filing" : "Additional Filing";
    this.month = this.monthList.filter(data => data.value === this.detail.month);
    this.year = this.detail.year;
    this.saleAmount = (Number(this.detail.saleAmount).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.taxAmount = (Number(this.detail.taxAmount).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.surcharge = (Number(this.detail.surcharge).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.penalty = (Number(this.detail.penalty).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.totalAmount = (Number(this.detail.totalAmount).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
  }

  confirm(){
    Swal.fire(
      'Tax Filling Detail',
      JSON.stringify(this.detail),
      'success'
    )
  }
}
