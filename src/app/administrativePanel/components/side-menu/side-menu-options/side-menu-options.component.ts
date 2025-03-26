import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOption } from '../../../interfaces/modelos.interface';

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[] = [

    {
      icon: 'fa-solid fa-house',
      label: 'Inicio',
      route: '/dashboard/home',
      style: 'color:#FFFFFF;'
    },
    {
      icon: 'fa-solid fa-bus',
      label: 'Rutas',
      route: '/dashboard/routes',
      style: 'color:#FFFFFF;'
    },
    {
      icon: 'fa-solid fa-hand',
      label: 'Paradas',
      route: '/dashboard/stops',
      style: 'color:#FFFFFF;'
    },

]

}
