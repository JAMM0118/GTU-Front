import {Component, signal } from '@angular/core';
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
      description: 'Ruta 1',
      startTime: '08:00',
      endTime: '10:00',
      neighborhood: 'Barrio 1',
      stops: ['Parada 1, Parada 2'],
    },
    {
      id: '2',
      name: 'B2015',
      description: 'Ruta 2',
      startTime: '09:00',
      endTime: '11:00',
      neighborhood: 'Barrio 2',
      stops: ['Parada 3, Parada 4'],

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
     type: 'time',
     id: 'startTime'
    },
    {
      title: 'Horario de Finalización',
      type: 'time',
      id: 'endTime'
     },

   ];



}
