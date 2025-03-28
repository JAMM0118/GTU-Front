import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  itemName = input.required<string>();
  confirmDelete = output<void>();
  closeModal = output<void>();
}
