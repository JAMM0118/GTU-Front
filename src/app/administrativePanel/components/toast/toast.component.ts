import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  @Input() message: string = '';
  visible = true;

  ngOnInit() {
    setTimeout(() => this.visible = false, 3000);
  }
}