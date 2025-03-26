import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsComponent } from "../../components/forms/forms.component";
import { Form } from '../../interfaces/modelos.interface';

@Component({
  selector: 'app-routes-page',
  imports: [FormsComponent],
  templateUrl: './routes-page.component.html',
})
export default class RoutesPageComponent {

  routeForm: Form[] = [

    {
     title: 'Nombre de la ruta',
     type: 'text',

    },
    {
     title: 'Descripcion',
     type: 'text',

    },
    {
     title: 'Horaio de ruta',
     type: 'text',
    },
    {
     title: 'Barrios',
     type: 'text',
    },
    {
     title: 'Paradas',
     type: 'text',
    },
   ]
}
