import { Component, ElementRef, inject, input, output, QueryList, signal, ViewChildren } from '@angular/core';
import type { Form, Stops } from '../../interfaces/models.interface';
import { ToastComponent } from "../toast/toast.component";
import { MutipleItemsListComponent} from "./multiple-items-list-form/multiple-items-list.component";
import { GtuNeighborhoodsService } from '../../services/gtu-neighborhoods.service';
import { SingleListFormComponent  } from "./single-list-form-item-selected/single-list-form-item-selected.component";
import { GtuStopsService } from '../../services/gtu-stops.service';

@Component({
  selector: 'app-forms',
  imports: [ToastComponent, SingleListFormComponent, MutipleItemsListComponent],
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  service = inject(GtuNeighborhoodsService);
  stopsService = inject(GtuStopsService);
  form = input.required<Form[]>();
  title = input.required<string>();
  comeBackList = output<void>();
  showToast = signal(false);

  goComeBackList() {
    this.comeBackList.emit();
  }

  // Captura todos los inputs con la referencia inputRef en el DOM
  @ViewChildren('inputRef') inputs!: QueryList<ElementRef>;
  sendForm() {
    const formValues: Record<string, string> = {};

    this.inputs.forEach((input, index) => {
      const inputElement = input.nativeElement as HTMLInputElement;
      formValues[this.form()[index].id] = inputElement.value;
    });

    console.log('Valores del formulario:', formValues);
    console.log('Barrios seleccionados:', this.service.neighborhoodsSelected());
    console.log('Barrio seleccionado:', this.service.neighborhoodSelected());

    this.showToast.set(true);

    const newStop : Stops = {

      name: formValues['name'],
      description: formValues['description'],
      neighborhoodId: this.service.neighborhoodSelected()!.id,
    }

    console.log('Nueva parada:', newStop);
    this.stopsService.createStop(newStop);
    this.service.clearNeighborhoodsSelected();
    this.inputs.forEach((input) => {
      const inputElement = input.nativeElement as HTMLInputElement;
     inputElement.value = '';
    });
  }
}
