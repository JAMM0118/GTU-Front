import {Component } from '@angular/core';
import { FormsComponent } from "../../components/forms/forms.component";
import type { Form, List } from '../../interfaces/models.interface';
import { HeaderComponent } from "../../components/header/header.component";
import { ToLisComponent } from "../../components/toList/list-component";

@Component({
  selector: 'app-routes-page',
  imports: [FormsComponent, HeaderComponent,ToLisComponent],
  templateUrl: './routes-page.component.html',
})
export default class RoutesPageComponent {
  showForm = false;

  routeList: List[] = [
    {
      id: '1',
      name: 'B2010',
    },
    {
      id: '2',
      name: 'B2010',
    },
    {
      id: '3',
      name: 'B2010',
    },
    {
      id: '4',
      name: 'B2010',
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

   toggleForm(){
    this.showForm = !this.showForm;
   }
}
