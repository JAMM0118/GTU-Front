import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [ConfirmModalComponent],
  templateUrl: './logout-button.component.html',
})
export class LogoutButtonComponent {
  showLogoutModal = signal(false);

  constructor(private router: Router) {}

  openModal() {
    this.showLogoutModal.set(true);
  }

  confirmLogout() {
    this.showLogoutModal.set(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
