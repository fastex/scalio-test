import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbbRoutingModule } from './bbb-routing.module';
import { BbbComponent } from './bbb.component';


@NgModule({
  declarations: [
    BbbComponent
  ],
  imports: [
    CommonModule,
    BbbRoutingModule
  ]
})
export class BbbModule { }
