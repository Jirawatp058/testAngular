import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDetailComponent } from './input-detail/input-detail.component';

const routes: Routes = [
  { path: 'input-detail', component: InputDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
