import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AutocompleteModule { }
