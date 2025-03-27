import {Component, ElementRef, input, QueryList, ViewChildren } from '@angular/core';
import type { Form } from '../../interfaces/models.interface';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
})
export class FormsComponent {

  form = input.required<Form[]>();
  title = input.required<string>();



  // Captura todos los inputs con la referencia inputRef en el DOM
  @ViewChildren('inputRef') inputs!: QueryList<ElementRef>;
  sendForm(){
    const formValues: Record<string, any> = {};

    this.inputs.forEach((input, index) => {
      const inputElement = input.nativeElement as HTMLInputElement;
      formValues[this.form()[index].id] =
        inputElement.type === 'checkbox' ? inputElement.checked : inputElement.value;
    });

    console.log('Formulario enviado:', formValues);
  }
}
