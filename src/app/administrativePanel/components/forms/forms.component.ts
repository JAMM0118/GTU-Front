import {Component, input } from '@angular/core';
import type { Form } from '../../interfaces/models.interface';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
})
export class FormsComponent {

form = input.required<Form[]>();


}
