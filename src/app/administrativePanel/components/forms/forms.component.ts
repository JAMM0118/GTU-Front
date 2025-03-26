import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Form } from '../../interfaces/modelos.interface';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {

form = input.required<Form[]>();


}
