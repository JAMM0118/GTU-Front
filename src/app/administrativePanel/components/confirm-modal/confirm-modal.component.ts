import { Component, output, input, signal } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  itemName = input.required<string>();
  colorButton = input.required<string>();
  confirm = output<void>();
  closeModal = output<void>();
  title = input.required<string>();
  message = input.required<string>();
  buttonMessage = input.required<string>();
}
