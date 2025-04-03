import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification-header',
  imports: [CommonModule],
  templateUrl: './notification-header.component.html',
})
export class NotificationHeaderComponent {
  // Ejemplo contador de notificaciones
  notificationCount: number = 3;
}
