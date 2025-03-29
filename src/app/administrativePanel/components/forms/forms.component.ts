import { Component, ElementRef, input, output, QueryList, signal, ViewChildren } from '@angular/core';
import type { Form, List } from '../../interfaces/models.interface';
import { ToastComponent } from "../toast/toast.component";

@Component({
  selector: 'app-forms',
  imports: [ToastComponent],
  templateUrl: './forms.component.html',
})
export class FormsComponent {

  form = input.required<Form[]>();
  title = input.required<string>();
  comeBackList = output<void>();
  createItem = output<List>();
  showToast = signal(false);

  goComeBackList() {
    this.comeBackList.emit();
  }

  // Captura todos los inputs con la referencia inputRef en el DOM
  @ViewChildren('inputRef') inputs!: QueryList<ElementRef>;
  sendForm() {
    const formValues: Record<string, any> = {};

    this.inputs.forEach((input, index) => {
      const inputElement = input.nativeElement as HTMLInputElement;
      formValues[this.form()[index].id] =
        inputElement.type === 'checkbox' ? inputElement.checked : inputElement.value;
    });

    const newList : List = {
      id:  Math.random().toString(36).substring(2, 9),
      name: formValues['name'],
      neighborhood: formValues['neighborhood'],
      description: formValues['description'],
      startTime: formValues['startTime'],
      endTime: formValues['endTime'],
      stops: formValues['stops'],
      ubicationStop: formValues['ubicationStop'],

    }


    // Emitir el evento con los valores del formulario
    this.createItem.emit(newList);
    this.showToast.set(true);
    console.log('Formulario enviado:', formValues);
    console.log('Lista creada:', newList);

    // Reiniciar el formulario
    this.inputs.forEach((input) => {
      const inputElement = input.nativeElement as HTMLInputElement;
      if (inputElement.type === 'checkbox') {
        inputElement.checked = false;
      } else {
        inputElement.value = '';
      }
    });
  }
}
