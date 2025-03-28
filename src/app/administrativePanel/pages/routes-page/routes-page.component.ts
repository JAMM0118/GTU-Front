import {Component } from '@angular/core';
import type { Form, List } from '../../interfaces/models.interface';
import { HeaderComponent } from "../../components/header/header.component";
import { ShowFormComponent } from "../../../shared/showForm/showForm.component";

@Component({
  selector: 'app-routes-page',
  imports: [ HeaderComponent, ShowFormComponent],
  templateUrl: './routes-page.component.html',
})
export default class RoutesPageComponent {
  routeList: List[] = [
    {
      id: '1',
      name: 'B2010',
    },
    {
      id: '2',
      name: 'B2015',
    }
  ]

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
   ];



}
