import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbbComponent } from './bbb.component';

const routes: Routes = [
  { path: '', component: BbbComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbbRoutingModule { }
