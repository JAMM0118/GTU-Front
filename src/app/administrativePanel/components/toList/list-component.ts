import { Component, EventEmitter, Input, input, output, Output } from "@angular/core";
import { List } from "../../interfaces/models.interface";
import { ConfirmModalComponent } from "../confirm-modal/confirm-modal.component";
import { ToastComponent } from "../toast/toast.component";
@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
  imports: [ConfirmModalComponent, ToastComponent],
})
export class ToLisComponent {
  createL = output<void>();
  deleteItem = output<string>();
  Bconfirm = input.required<string>();
  titlePage = input.required<string>();
  list = input.required<List[]>();
  itemName = input<string>();
  showModal = false;
  showToast = false;
  itemToDelete: List | null = null;

  goToCreate() {
    this.createL.emit();
  }
  openDeleteModal(item: List) {
    this.itemToDelete = item;
    this.showModal = true;
  }
  closeDeleteModal() {
    this.showModal = false;
    this.itemToDelete = null;
  }
  confirmDelete() {
    if (this.itemToDelete) {
      this.deleteItem.emit(this.itemToDelete.id); // Envio del ID al padre
      this.showToast = true;
    }
    this.closeDeleteModal();
  }
}
