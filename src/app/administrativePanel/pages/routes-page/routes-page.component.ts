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
     id: 'name',

    },
    {
     title: 'Descripcion',
     type: 'text',
     id: 'description',

    },
    {
     title: 'Horario de inicio',
     type: 'text',
     id: 'timeStart'
    },
    {
      title: 'Horario de Finalización',
      type: 'text',
      id: 'timeFinish'
     },
    {
     title: 'Barrios',
     type: 'text',
     id: 'neighborhood'
    },
    {
     title: 'Paradas',
     type: 'text',
     id: 'stops'
    },
   ]
}
