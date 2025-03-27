import { Component, EventEmitter, input, output, Output } from "@angular/core";
import { List } from "../../interfaces/models.interface";

@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
})
export class ToLisComponent {
  createRoute = output<void>();

  list = input.required<List[]>();


  goToCreateRoute() {
    this.createRoute.emit();
  }
}
