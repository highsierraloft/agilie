import {Component, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {PlacesService} from "./services/places.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-agilie';
    isLoggedIn : Observable<boolean>;

    constructor(public dialog: MatDialog, public placesService: PlacesService) {
        this.isLoggedIn = this.placesService.isLoggedIn$.asObservable();
    }


    openLoginDialog(): void {
        const dialogRef = this.dialog.open(LoginDialogComponent, {
            width: '300px',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.login === 'root' && result.password === 'password') {
                this.placesService.isLoggedIn$.next(true);
                localStorage.setItem('login', result.login);
                localStorage.setItem('password', result.password);
            }
        });
    }

    logout() {
        localStorage.setItem('login', '');
        localStorage.setItem('password', '');
        this.placesService.isLoggedIn$.next(false);
    }

}


