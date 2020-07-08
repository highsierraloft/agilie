import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";


const routes: Routes = [{
  path: 'autocomplete',
  loadChildren: () => import('./autocomplete/autocomplete.module').then(m => m.AutocompleteModule),
}, {
  path: 'photos',
  loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
},
  {
    path: 'get-info',
    loadChildren: () => import('./get-info/get-info.module').then(m => m.GetInfoModule),
    canActivate: [AuthGuardGuard]
},
  {
    path: '',   redirectTo: '/autocomplete', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/autocomplete'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
