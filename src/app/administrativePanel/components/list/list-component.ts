import { Component,input, output, signal } from "@angular/core";
import { Routes, Stops } from "../../interfaces/models.interface";
import { ConfirmModalComponent } from "../confirm-modal/confirm-modal.component";
@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
  imports: [ConfirmModalComponent],
})
export class ToLisComponent {
  openForm = output<void>();
  editItem = output<void | number |void >();
  deleteItem = output<number>();
  buttonName = input.required<string>();
  titlePage = input.required<string>();
  list = input.required< Routes[] | Stops[]>();

  isEdit = signal(false);
  showModal = signal(false);
  itemChosen = signal<null | Stops | Routes>(null);

  goToCreate() {
    this.openForm.emit();
  }

  openModal(item: Stops | Routes) {
    this.itemChosen.set(item);
    this.showModal.set(true);
  }

  closeModal() {
    console.log(this.list());
    this.showModal.set(false);
    this.itemChosen.set(null);
  }

  confirmModal() {
      //this.isEdit() ? this.editItem.emit(this.itemChosen()!.id) : this.deleteItem.emit(this.itemChosen()!.id);
      const id = this.itemChosen()?.id;
      id != null && typeof id === 'number' && this.deleteItem.emit(id);
      this.showModal.set(false);
      this.itemChosen.set(null);

  }
}
