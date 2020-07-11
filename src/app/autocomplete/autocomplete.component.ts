import {Component} from '@angular/core';
import {PlacesService} from "../services/places.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
    inputValue = '';
    places = [];
    placeId: any;
    lastPlaces = [];
    sumPlaces = [];

    constructor(
        private placesService: PlacesService,
        private router: Router
    ) {
    }

    getPlaces() {
        if (this.inputValue.length > 2) {
            this.placesService.getPlaces(this.inputValue).subscribe(value => {
                this.places = value.hits;
                if (this.lastPlaces.length) {
                    this.sumPlaces = [];
                    this.sumPlaces = this.lastPlaces.concat(this.places);

                } else {
                    this.sumPlaces = this.places;
                }
            });
        } else {
            this.places = [];
            this.sumPlaces = [];
        }
    };

    selectCity(index) {
        if (this.lastPlaces.length < 3) {
            this.lastPlaces.push(this.sumPlaces[index]);
        } else {
            this.lastPlaces.shift();
            this.lastPlaces.push(this.sumPlaces[index]);
        }
        this.placeId = this.sumPlaces[index].objectID;
    }

    onSubmitClick() {
        this.placesService.getCityId(this.placeId);
        this.router.navigateByUrl('/get-info')
    }
}
