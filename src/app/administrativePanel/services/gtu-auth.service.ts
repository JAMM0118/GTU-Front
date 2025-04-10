import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GtuAuthService {
  login(email: string, password: string) : {accessToken: string; refreshToken: string} {
    const accessToken = 'simulado_access_token';
    const refreshToken = 'simulado_refresh_token';

    console.log('🔐 Simulando login con:', email, password);

    return {
      accessToken,
      refreshToken,
    };
  }

  getUserRoles() {
    return {
      name: 'Margarita',
      roles: [
        {
          name: 'admin',
          modules: ['Usuarios', 'Reportes', 'Dashboard']
        }
      ]
    };
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.clear();
  }
}
