import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
