import { Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

export const routes: Routes = [

  {
    canActivate: [authGuard],
    path: 'dashboard',
    canActivateChild: [authGuard],
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
        path: 'assign-driver',
        loadComponent: () => import('./administrativePanel/pages/assign-driver-page/assign-driver-page.component')
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
    path: 'reset-password',
    loadComponent: () => import('./administrativePanel/pages/reset-password-page/reset-password-page.component')
  },
  {

    path: '**',
    redirectTo: 'login'
  }
];
