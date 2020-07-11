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
    const randPage = Math.floor(Math.random() * 101);
    return this.http.get<any>('http://jsonplaceholder.typicode.com/photos?_start=' + randPage + '&_limit=10');
  }
}
