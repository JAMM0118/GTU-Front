import { Component, Input } from '@angular/core';
import { SearchHeaderComponent } from './searchHeader/search-header.component';
import { NotificationHeaderComponent } from './notificationHeader/notification-header.component';
import { ProfileHeaderComponent } from './profileHeader/profile-header.component';

@Component({
  selector: 'app-header',
  imports: [SearchHeaderComponent, NotificationHeaderComponent, ProfileHeaderComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title: string = "GTU Project";
}
