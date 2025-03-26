import {Component } from '@angular/core';
import { FormsComponent } from "../../components/forms/forms.component";
import type { Form } from '../../interfaces/models.interface';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-routes-page',
  imports: [FormsComponent, HeaderComponent],
  templateUrl: './routes-page.component.html',
})
export default class RoutesPageComponent {

  routeForm: Form[] = [

    {
     title: 'Nombre de la ruta',
     type: 'text',

    },
    {
     title: 'Descripcion',
     type: 'text',

    },
    {
     title: 'Horario de inicio',
     type: 'text',
    },
    {
      title: 'Horario de Finalización',
      type: 'text',
     },
    {
     title: 'Barrios',
     type: 'text',
    },
    {
     title: 'Paradas',
     type: 'text',
    },
   ]
}
