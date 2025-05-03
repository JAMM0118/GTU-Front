import { Component, inject, signal } from '@angular/core';
import {RouterLink } from '@angular/router';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { GtuAuthService } from '../../services/gtu-auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [ConfirmModalComponent, RouterLink],
  templateUrl: './logout-button.component.html',
})
export class LogoutButtonComponent {
  showLogoutModal = signal(false);
  authService = inject(GtuAuthService);


  openModal() {
    this.showLogoutModal.set(true);
  }

  confirmLogout() {
    this.showLogoutModal.set(false);
    this.authService.logout();
  }
}
