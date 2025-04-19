import { Component, inject, signal } from '@angular/core';
import { GtuAuthService } from '../../services/gtu-auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { loginForm } from '../../interfaces/models.interface';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  imports: [CommonModule, FormsModule],
})

export default class LoginPageComponent {
  email = signal('');
  password = signal('');
  showPassword = signal(false);
  submitted = signal(false);
  errors = signal<loginForm>({});

  private auth = inject(GtuAuthService)

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  validate() {
    const errorObj: loginForm = {};
    const emailVal = this.email().trim();
    const passwordVal = this.password().trim();

    if (!emailVal) {
      errorObj.email = 'El correo es obligatorio.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailVal)) {
      errorObj.email = 'Formato de correo inválido.';
    }

    if (!passwordVal) {
      errorObj.password = 'La contraseña es obligatoria.';
    }

    this.errors.set(errorObj);
    return Object.keys(errorObj).length === 0;
  }

  onSubmit(event?: Event) {
    event?.preventDefault();
    this.submitted.set(true);
    if (this.validate()) {
      console.log('✅ Login correcto:', {
        email: this.email(),
        password: this.password(),
      });
      console.log('✅ Login correcto:', { email: this.email, password: this.password });
      const response = this.auth.login(this.email(), this.password());

      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      console.log('✅ Tokens guardados en localStorage');

      const roles = this.auth.getUserRoles();
      console.log('📦 Roles y permisos:', roles);
    }
  }
}
