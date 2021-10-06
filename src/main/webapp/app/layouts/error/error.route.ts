import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';
import {NotFoundComponent} from "app/pages/not-found/not-found.component";

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      pageTitle: 'error.title',
    },
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      pageTitle: 'error.title',
      errorMessage: 'error.http.403',
    },
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      pageTitle: 'error.title',
      errorMessage: 'error.http.404',
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
