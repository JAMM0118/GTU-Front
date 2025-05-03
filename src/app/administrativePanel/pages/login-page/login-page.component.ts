import { Component, inject, signal } from '@angular/core';
import { GtuAuthService } from '../../services/gtu-auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginForm } from '../../interfaces/models.interface';
import { RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';
import { LoadingModalComponent } from "../../components/loadingModal/loadingModal.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  imports: [CommonModule, FormsModule, LoadingModalComponent],
})

export default class LoginPageComponent {
  email = signal('');
  password = signal('');
  isLoading = signal(false);
  showPassword = signal(false);
  submitted = signal(false);
  errors = signal<LoginForm>({});

  private auth = inject(GtuAuthService)

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  validate() {
    const errorObj: LoginForm = {};
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

  onSubmit() {
    this.submitted.set(true);
    if (this.validate()) {
      console.log('✅ Login correcto:', {
        email: this.email(),
        password: this.password(),
      }
    );
    this.isLoading.set(true);
    this.auth.login(this.email(), this.password());

    }
  }
}
