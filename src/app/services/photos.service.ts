import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<any> {
    return this.http.get<any>('http://jsonplaceholder.typicode.com/photos?_start=10&_limit=10');
  }
}
