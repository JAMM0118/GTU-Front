import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'dashboard',
    loadComponent: () => import('./administrativePanel/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./administrativePanel/pages/home-page/home-page.component')

      },
      {
        path: 'routes',
        loadComponent: () => import('./administrativePanel/pages/routes-page/routes-page.component')

      },

      {
        path: 'stops',
        loadComponent: () => import('./administrativePanel/pages/stops-page/stops-page.component')
      },
      {
        path: 'users',
        loadComponent: () => import('./administrativePanel/pages/users-page/users-page.component')
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./administrativePanel/pages/login-page/login-page.component')
  },
  {

    path: '**',
    redirectTo: 'login'
  }
];
