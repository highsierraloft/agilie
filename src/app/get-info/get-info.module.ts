import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInfoRoutingModule } from './get-info-routing.module';
import { GetInfoComponent } from './get-info.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [GetInfoComponent],
    imports: [
        CommonModule,
        GetInfoRoutingModule,
        MatButtonModule
    ]
})
export class GetInfoModule { }
