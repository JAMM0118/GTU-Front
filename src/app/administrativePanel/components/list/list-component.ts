import { Component,input, output, signal } from "@angular/core";
import { List, Stops } from "../../interfaces/models.interface";
import { ConfirmModalComponent } from "../confirm-modal/confirm-modal.component";
import { ToastComponent } from "../toast/toast.component";
@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
  imports: [ConfirmModalComponent, ToastComponent],
})
export class ToLisComponent {
  openForm = output<void>();
  buttonName = input.required<string>();
  titlePage = input.required<string>();
  list = input.required< List[] | Stops[]>();

  isEdit = signal(false);
  showModal = signal(false);
  showToast = signal(false);
  itemChosen = signal<null | Stops | List>(null);

  goToCreate() {
    this.openForm.emit();
  }

  openModal(item: Stops | List) {
    this.itemChosen.set(item);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.itemChosen.set(null);
  }
}
