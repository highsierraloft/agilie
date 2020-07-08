import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInfoComponent } from './get-info.component';

const routes: Routes = [{ path: '', component: GetInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInfoRoutingModule { }
