import { Component, signal } from '@angular/core';
import type { Form, List } from '../../interfaces/models.interface';
import { HeaderComponent } from "../../components/header/header.component";
import { ShowFormComponent } from "../../../shared/showForm/showForm.component";

@Component({
  selector: 'app-stops-page',
  imports: [HeaderComponent, ShowFormComponent],
  templateUrl: './stops-page.component.html',
})
export default class StopsPageComponent {


  stopsList: List[] = [
    {
      id: '1',
      name: 'Parada 1'
    },
    {
      id: '2',
      name: 'Parada 2'
    },
    {
      id: '3',
      name: 'Parada 3'
    },
    {
      id: '4',
      name: 'Parada 4'
    },
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




}
