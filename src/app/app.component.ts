import { Component } from '@angular/core';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';
  page:string = "";
  constructor(public detailService: DetailService) { }

  ngOnInit(): void {
    this.detailService.getPage().subscribe(x => {
      this.page = x
    });
  }

}
