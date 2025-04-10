import { Component, ElementRef, inject, input, output, QueryList, signal, ViewChildren } from '@angular/core';
import type { Form, Stops } from '../../interfaces/models.interface';
import { ToastComponent } from "../toast/toast.component";
import { MutipleItemsListComponent} from "./multiple-items-list-form/multiple-items-list.component";
import { GtuNeighborhoodsService } from '../../services/gtu-neighborhoods.service';
import { SingleListFormComponent  } from "./single-list-form-item-selected/single-list-form-item-selected.component";
import { GtuStopsService } from '../../services/gtu-stops.service';
import { GtuRoutesService } from '../../services/gtu-routes.service';
import { Routes } from '../../interfaces/models.interface';

@Component({
  selector: 'app-forms',
  imports: [ToastComponent, SingleListFormComponent, MutipleItemsListComponent],
  templateUrl: './forms.component.html',
})
export class FormsComponent {

  neighborhoodService = inject(GtuNeighborhoodsService);
  stopsService = inject(GtuStopsService);
  routesService = inject(GtuRoutesService);
  bandera = input.required<boolean>();
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
    this.showToast.set(true);

    const newFormToSend : any = (() =>{
      if(this.bandera()){
        return {
          name: formValues['name'],
          description: formValues['description'],
          neighborhoods: this.neighborhoodService.neighborhoodsSelected().map((neighborhood) => neighborhood.id),
          stops: this.stopsService.stopsSelected().map((stop) => stop.id),
          startTime: formValues['startTime'],
          endTime: formValues['endTime'],
        } as Routes;
       }
       else{
        return {
          name: formValues['name'],
          description: formValues['description'],
          neighborhoodId: this.neighborhoodService.neighborhoodSelected()!.id,
        } as Stops;
       }
    })();

    console.log('Formulario a enviar (ruta/parada):', newFormToSend);

    this.bandera() ?
    this.routesService.createRoute(newFormToSend) :
    this.stopsService.createStop(newFormToSend);

    this.neighborhoodService.clearNeighborhoodsSelected();
    this.stopsService.clearStopsSelected();
    this.inputs.forEach((input) => {
      const inputElement = input.nativeElement as HTMLInputElement;
     inputElement.value = '';
    });
  }
}
