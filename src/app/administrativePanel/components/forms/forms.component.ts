import { Component, ElementRef, input, output, signal, viewChildren } from '@angular/core';
import type { Form } from '../../interfaces/models.interface';
import { ToastComponent } from "../toast/toast.component";
import { MutipleItemsListComponent} from "./multiple-items-list-form/multiple-items-list.component";
import { SingleListFormComponent  } from "./single-list-form-item-selected/single-list-form-item-selected.component";

@Component({
  selector: 'app-forms',
  imports: [ToastComponent, SingleListFormComponent, MutipleItemsListComponent],
  templateUrl: './forms.component.html',
})
export class FormsComponent {

  editItem = output<Record<string,string>>();
  createItem = output<Record<string,string>>();
  isEditing = input.required<boolean>();
  editTitle = input.required<string>();
  banderaRouteOrStop = input<string>();
  form = input.required<Form[]>();
  title = input.required<string>();
  comeBackList = output<void>();
  showToast = signal(false);


  goComeBackList() {
    this.comeBackList.emit();
  }
  // Captura todos los inputs con la referencia inputRef en el DOM
  inputs = viewChildren<ElementRef<HTMLInputElement>>('inputRef');
  sendForm() {
    const formValues: Record<string, string> = {};
    this.inputs().forEach((input, index) => {
      const inputElement = input.nativeElement;
      formValues[this.form()[index].id] = inputElement.value;
    });
    this.showToast.set(true);
    console.log('Formulario a enviar:', formValues);

    this.isEditing() ? this.editItem.emit(formValues) :
    this.createItem.emit(formValues);

    this.inputs().forEach((input) => {

      const inputElement = input.nativeElement;
     inputElement.value = '';
    });
  }
}
