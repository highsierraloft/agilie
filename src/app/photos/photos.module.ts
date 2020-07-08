import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [PhotosComponent],
    imports: [
        CommonModule,
        PhotosRoutingModule, CommonModule,
        MatSliderModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, ReactiveFormsModule, MatCardModule,
    ]
})
export class PhotosModule { }
