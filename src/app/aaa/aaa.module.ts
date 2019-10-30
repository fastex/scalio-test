import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AaaRoutingModule } from './aaa-routing.module';
import { AaaComponent } from './aaa.component';


@NgModule({
  declarations: [
    AaaComponent
  ],
  imports: [
    CommonModule,
    AaaRoutingModule
  ]
})
export class AaaModule { }
