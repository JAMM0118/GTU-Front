import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { MenuOption } from '../../../interfaces/models.interface';

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[] = [

    {
      icon: 'fa-solid fa-house',
      label: 'Home',
      subLabel: 'Home',
      route: '/dashboard/home',
    },
    {
      icon: 'fa-solid fa-road',
      label: 'Routes',
      subLabel: '',
      route: '/dashboard/routes',
    },
    {
      icon: 'fa-solid fa-traffic-light',
      label: 'Stops',
      subLabel: 'Stops',
      route: '/dashboard/stops',
    },

]

}
