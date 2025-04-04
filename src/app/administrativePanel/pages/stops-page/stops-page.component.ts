import { Component, signal, inject } from '@angular/core';
import type { Form, List } from '../../interfaces/models.interface';
import { HeaderComponent } from "../../components/header/header.component";
import { ShowFormComponent } from "../../../shared/showForm/showForm.component";
import { GtuStopsService } from '../../services/gtu-stops.service';

@Component({
  selector: 'app-stops-page',
  imports: [HeaderComponent, ShowFormComponent],
  templateUrl: './stops-page.component.html',
})
export default class StopsPageComponent {

  service = inject(GtuStopsService);

  stopsForm: Form[] = [

    {
      title: 'Nombre de la parada',
      type: 'text',
      id: 'name'

    },
    {
      title: 'Descripción',
      type: 'text',
      id: 'description'

    },
  ]




}
