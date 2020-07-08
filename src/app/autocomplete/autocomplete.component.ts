import {Component, OnInit} from '@angular/core';
import {PlacesService} from "../services/places.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  inputValue: string;
  places = [];
  placeId: any;

  constructor(
    private placesService: PlacesService,
    private router: Router
  ) {}

  getPlaces() {
    if (this.inputValue.length > 2) {
      this.placesService.getPlaces(this.inputValue).subscribe(value => {
        console.log(value.hits);
        this.places = value.hits;
      });
    } else {
      this.places = [];
    }
  };

  selectCity(index) {
    this.placeId = this.places[index].objectID;
  }

  onSubmitClick() {
    this.placesService.getCityId(this.placeId);
    this.router.navigateByUrl('/get-info')
  }
}
