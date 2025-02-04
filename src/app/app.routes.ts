import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'me',
    loadComponent: () => import('./pages/me/me.page').then((m) => m.MePage),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
