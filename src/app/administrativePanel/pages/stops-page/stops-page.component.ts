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
      name: 'Parada 1',
      neighborhood: 'Barrio 1',
      ubicationStop: 'Ubicación 1',
    },
    {
      id: '2',
      name: 'Parada 2',
      neighborhood: 'Barrio 2',
      ubicationStop: 'Ubicación 2',
    },
    {
      id: '3',
      name: 'Parada 3',
      neighborhood: 'Barrio 3',
      ubicationStop: 'Ubicación 3',
    },
    {
      id: '4',
      name: 'Parada 4',
      neighborhood: 'Barrio 4',
      ubicationStop: 'Ubicación 4',
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
      type: 'text',
      id: 'neighborhood'

    },
    {
      title: 'Ubicación de parada',
      type: 'text',
      id: 'ubicationStop'
    },
  ]




}
