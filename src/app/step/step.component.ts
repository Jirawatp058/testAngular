import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  constructor(public detailService: DetailService) { }
  page:string = "";

  ngOnInit() {
    this.detailService.getPage().subscribe(x => {
      this.page = x
    });
  }

}
