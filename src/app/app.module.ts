import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { FormsModule } from '@angular/forms';
import { DetailService } from './detail.service';
import { ConfirmAndReviewComponent } from './confirm-and-review/confirm-and-review.component';
import { StepComponent } from './step/step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    InputDetailComponent,
    ConfirmAndReviewComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
