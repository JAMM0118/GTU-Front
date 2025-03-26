import { Component } from '@angular/core';
import { Form } from '../../interfaces/modelos.interface';
import { FormsComponent } from "../../components/forms/forms.component";

@Component({
  selector: 'app-stops-page',
  imports: [FormsComponent],
  templateUrl: './stops-page.component.html',
})
export default class StopsPageComponent {

  stopsForm: Form[] = [

      {
       title: 'Nombre de la parada',
       type: 'text',

      },
      {
       title: 'Descripcion',
       type: 'password',

      },
      {
       title: 'Horaio de parada',
       type: 'number',
      },
     ]
 }
