import { Component, signal } from '@angular/core';
import {RouterLink } from '@angular/router';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [ConfirmModalComponent, RouterLink],
  templateUrl: './logout-button.component.html',
})
export class LogoutButtonComponent {
  showLogoutModal = signal(false);


  openModal() {
    this.showLogoutModal.set(true);
  }

  confirmLogout() {
    this.showLogoutModal.set(false);
    localStorage.clear();
  }
}
