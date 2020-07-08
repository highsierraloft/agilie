import {Component, OnInit} from '@angular/core';
import {PlacesService} from "../services/places.service";

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.scss']
})
export class GetInfoComponent implements OnInit {

  cityData: any;


  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
    // this.onGetInfo();
  }

  onGetInfo() {
    this.placesService.spinnerData$.next(true);
    this.placesService.spinnerTimer$.next(true);

    this.placesService.getPlaceInfo().subscribe(value => {
      this.placesService.showSpinnerTimer();
      this.cityData = value;
      if (value !== undefined) {
        this.placesService.showSpinnerData();
      }
    });
  }
}
