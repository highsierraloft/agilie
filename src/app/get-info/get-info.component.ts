import {Component} from '@angular/core';
import {PlacesService} from "../services/places.service";
import {combineLatest, timer} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.scss']
})
export class GetInfoComponent {

  cityData: object;

  constructor(private placesService: PlacesService) {
  }

  onGetInfo() {
    this.placesService.showSpinner$.next(true);
    combineLatest([timer(300), this.placesService.getPlaceInfo()]).pipe(map(v => v[1])).subscribe(data => {
      this.cityData = data;
      this.placesService.showSpinner$.next(false);
    });
  }
}
