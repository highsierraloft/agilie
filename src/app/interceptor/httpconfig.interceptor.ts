import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {take} from "rxjs/operators";
import {PlacesService} from "../services/places.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private placesService: PlacesService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const login: string = localStorage.getItem('login');
        const password: string = localStorage.getItem('password');

        if (login === "root" && password === "password") {
            request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + login + " " + password)});
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        }

        request = request.clone({headers: request.headers.set('Accept', 'application/json')});

        if (this.placesService.isLoggedIn$.getValue()) {
           return next.handle(request)
        } else {
            return of(null as HttpEvent<any>).pipe(take(1));
        }

    }
}