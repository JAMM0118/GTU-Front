import {Component, computed, inject, signal } from '@angular/core';
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
  valueEditItem = computed(() => this.service.routeToEdit());
  isEditing = computed(()=>{return this.valueEditItem() ? true : false });


  routeForm =
    computed<Form[]>(() => {
      console.log(this.isEditing());
      const route = this.valueEditItem();
      return[

    {
     title: 'Nombre de la ruta',
     type: 'text',
     id: 'name',
     value: signal(route ? route.name : ''),

    },
    {
     title: 'Descripcion',
     type: 'text',
     id: 'description',
           value: signal(route ? route.description : ''),
    },
    {
     title: 'Horario de inicio',
     type: 'time',
     id: 'startTime' ,
     value: signal(route ? route.startTime : ''),
    },
    {
      title: 'Horario de Finalización',
      type: 'time',
      id: 'endTime',
      value: signal(route ? route.endTime : ''),
     },

   ]});



}
