import { Component, input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  message= input.required<string>();
  visible = true;

  ngOnInit() {
    setTimeout(() => this.visible = false, 3000);
  }
}
