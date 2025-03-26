import { Component } from '@angular/core';
import type { Form } from '../../interfaces/models.interface';
import { FormsComponent } from "../../components/forms/forms.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-stops-page',
  imports: [FormsComponent, HeaderComponent],
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
