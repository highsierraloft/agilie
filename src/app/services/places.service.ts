import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  cityId: number;
  spinnerTimer$: Subject<boolean> = new BehaviorSubject(<boolean>(false));
  spinnerData$: Subject<boolean> = new BehaviorSubject(<boolean>(false));

  constructor(private http: HttpClient) {
  }

  getPlaces(searchData: string): Observable<any> {
    return this.http.post<any>('https://places-dsn.algolia.net/1/places/query', {query: searchData})
  }

  getCityId(cityId) {
    this.cityId = cityId;
  }

  getPlaceInfo(): Observable<any> {
    return this.http.get<any>('https://places-dsn.algolia.net/1/places/' + this.cityId);
  }

  showSpinnerTimer() {
    setTimeout(() => {
      this.spinnerTimer$.next(false);
    }, 300)
  }

  showSpinnerData() {
    this.spinnerData$.next(false);
  }
}
