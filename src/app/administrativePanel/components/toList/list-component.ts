import { Component, EventEmitter, Input, input, output, Output, signal } from "@angular/core";
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
  editItem = output<string>();
  Bconfirm = input.required<string>();
  titlePage = input.required<string>();
  list = input.required<List[]>();
  itemName = input<string>();
  showModal = false;
  toastMessage = signal('');
  isEdit = true;
  showToast = false;
  itemChosen: List | null = null;
  messageModal = signal<string>('');
  titleModal = signal<string>('');
  buttonMessage = signal<string>('');
  colorButton = signal<string>('');

  goToCreate() {
    this.createL.emit();
  }
  openDeleteModal(item: List) {
    this.titleModal.set('Confirmar Eliminación');
    this.buttonMessage.set('Eliminar');
    this.messageModal.set('¿Está seguro de que desea eliminar el elemento');
    this.colorButton.set('red');
    this.itemChosen = item;
    this.toastMessage.set('Elemento eliminado con éxito');

    this.showModal = true;
    this.isEdit = false;
  }
  openEditModal(item: List) {
    this.titleModal.set('Confirmar Edicion');
    this.toastMessage.set('Elemento editado con éxito');
    this.buttonMessage.set('Editar');
    this.colorButton.set('blue');
    this.messageModal.set('¿Está seguro de que desea editar el elemento');
    this.itemChosen = item;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.itemChosen = null;
  }
  confirmModal() {


    if (this.itemChosen) {
      if(this.isEdit) {
        this.editItem.emit(this.itemChosen.id);
        this.goToCreate();
      }
      else{

        this.deleteItem.emit(this.itemChosen.id); // Envio del ID al padre
        this.showToast = true;
      }
    }
    this.closeModal();
  }
}
