import { Component,input, output, signal } from "@angular/core";
import { Routes, Stops, User } from "../../interfaces/models.interface";
import { ConfirmModalComponent } from "../confirm-modal/confirm-modal.component";
import { CommonModule } from "@angular/common";
import { FiltersComponent } from "../filters/filters.component";


@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
  imports: [ConfirmModalComponent,CommonModule, FiltersComponent],
})
export class ToLisComponent {
[x: string]: any;
  reportsOpen = false;
  openForm = output<void>();
  itemToEdit = output<Stops | Routes | User>();
  deleteItem = output<number>();
  buttonName = input.required<string>();
  titlePage = input.required<string>();
  list = input.required< Routes[] | Stops[] | User[]>();

  isEdit = signal(false);
  showModal = signal(false);
  itemChosen = signal<null | Stops | Routes | User>(null);

  filter = input<boolean>(false);
  selectedFilters = signal<string[]>([]);

  filteredList() {
    // Si no hay filtros muestra toda la lista
    if (this.selectedFilters().length === 0) return this.list();
    //Filtra por rol
    return this.list().filter((item: any) =>
      this.selectedFilters().includes(item.role)
    );
  }

  onFilterChange(filters: string[]) {
    this.selectedFilters.set(filters);
  }

  goToForm() {
    this.openForm.emit();
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  openModal(item: Stops | Routes | User) {
    this.itemChosen.set(item);
    this.showModal.set(true);
  }

  closeModal() {
    console.log(this.list());
    this.showModal.set(false);
    this.itemChosen.set(null);
  }

  deleteItemList() {
    const id = this.itemChosen()?.id;
    id != null && typeof id === 'number' && this.deleteItem.emit(id);

  }

  editItemList() {
    this.goToForm();
    this.itemToEdit.emit(this.itemChosen()!);

  }

  confirmModal() {
    console.log('here',this.itemChosen());
      this.isEdit() ? this.editItemList()
      :     this.deleteItemList();
    this.showModal.set(false);
    this.itemChosen.set(null);

  }
}
