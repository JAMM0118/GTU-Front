import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
})
export class ToLisComponent {
  @Output() createRoute = new EventEmitter<void>();

  goToCreateRoute() {
    this.createRoute.emit();
  }
}
