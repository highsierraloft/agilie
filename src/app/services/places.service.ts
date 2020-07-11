import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject, zip} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  cityId: number;
  showSpinner$: Subject<boolean> = new BehaviorSubject(<boolean>(false));
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(<boolean>(false));


  constructor(private http: HttpClient) {
  }

  getPlaces(searchData: string): Observable<any> {
    return this.http.post<any>('https://places-dsn.algolia.net/1/places/query', {query: searchData})
  }

  setCityId(cityId) {
    this.cityId = cityId;
  }

  getPlaceInfo(): Observable<any> {
    return this.http.get<any>('https://places-dsn.algolia.net/1/places/' + this.cityId);
  }

}
