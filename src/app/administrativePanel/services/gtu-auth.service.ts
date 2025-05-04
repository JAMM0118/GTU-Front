import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginResponse } from '../interfaces/reponses.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GtuAuthService {
  private router = inject(Router);
  private http = inject(HttpClient);
  responseStatus = signal(200);
  responseMessage = signal('');

  login(email: string, password: string)   {
    this.http.post<LoginResponse>(environment.backEndGTU_Login, {
        email: email,
        password: password
    },
    { observe: 'response' }) .subscribe({
      next: (response) => {
      const res = response.body!;
      console.log('✅ Login correcto:', res);
      localStorage.setItem('userName', res.name);
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('userRole',res.role);
      this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.responseStatus.set(error.status);
        console.log('❌ Login incorrecto:', error.status);
        console.log('❌ Login incorrecto:', error.error.message);
        this.responseMessage.set(error.error.message);
      }
    })
  }
  logout() {
    localStorage.clear();
  }
}
