import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DataTablePageComponent} from "./data-table-page/data-table-page.component";
import {GoogleMapPageComponent} from "./google-map-page/google-map-page.component";
import {MapSearchPageComponent} from "./map-search-page/map-search-page.component";

const appRoutes: Routes = [
  { // default path
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path: 'data-table', component: DataTablePageComponent},
  {path: 'google-map', component: GoogleMapPageComponent},
  {path: 'map-search', component: MapSearchPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
