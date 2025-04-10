import {Component, inject } from '@angular/core';
import type { Form } from '../../interfaces/models.interface';
import { HeaderComponent } from "../../components/header/header.component";
import { ShowFormComponent } from "../../../shared/showForm/showForm.component";
import { GtuRoutesService } from '../../services/gtu-routes.service';

@Component({
  selector: 'app-routes-page',
  imports: [ HeaderComponent, ShowFormComponent],
  templateUrl: './routes-page.component.html',
})
export default class RoutesPageComponent {

  service = inject(GtuRoutesService);

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
