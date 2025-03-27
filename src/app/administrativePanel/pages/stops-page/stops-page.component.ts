import { Component } from '@angular/core';
import type { Form, List } from '../../interfaces/models.interface';
import { FormsComponent } from "../../components/forms/forms.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ToLisComponent } from '../../components/toList/list-component';

@Component({
  selector: 'app-stops-page',
  imports: [FormsComponent, HeaderComponent, ToLisComponent],
  templateUrl: './stops-page.component.html',
})
export default class StopsPageComponent {
  showForm = false;

  stopsList: List[] = [
    {
      id: '1',
      name: 'Parada 1'
    },
    {
      id: '2',
      name: 'Parada 2'
    }
  ]

  stopsForm: Form[] = [

      {
       title: 'Nombre de la parada',
       type: 'text',
       id: 'name'

      },
      {
       title: 'Barrio',
       type: 'password',
       id: 'neighborhood'

      },
      {
       title: 'Ubicación de parada',
       type: 'number',
       id: 'location'
      },
     ]

     toggleForm(){
      this.showForm = !this.showForm;
     }
 }
