import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/reponses.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GtuAuthService {
  private router = inject(Router);
  private http = inject(HttpClient);

  login(email: string, password: string)  {
    this.http.post<LoginResponse>(environment.backEndGTU_Login, {
        email: email,
        password: password
    }) .subscribe((res) => {
      console.log('✅ Login correcto:', res);
      const accessToken = res.accessToken;
      const userRole = res.role
      const userName = res.name;
      localStorage.setItem('userName', userName);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userRole',userRole);
      console.log('✅ Token guardados en localStorage');
      console.log('📦 Roles y permisos:', userRole);
      this.router.navigate(['/dashboard']);

    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.clear();
    console.log(localStorage.getItem('accessToken'));
  }
}
