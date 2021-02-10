import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: 'flights-search',
    component: FlightsSearchComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-module/lazy.module').then(m => m.LazyModule)
  },
];
