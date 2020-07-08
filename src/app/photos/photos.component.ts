import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../services/photos.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos$ = new BehaviorSubject(<object>(null));

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void{
    this.photosService.getPhotos().subscribe(value => {
      this.photos$.next(value);
      console.log(this.photos$.value)
    })
  }

}
