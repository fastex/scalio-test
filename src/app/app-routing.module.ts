import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path: 'aaa',
    loadChildren: () => import('./aaa/aaa.module').then(m => m.AaaModule),
    canLoad: [AuthGuard]
   },
  {
    path: 'bbb',
    loadChildren: () => import('./bbb/bbb.module').then(m => m.BbbModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
