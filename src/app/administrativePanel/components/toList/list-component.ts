import { Component, EventEmitter, input, output, Output } from "@angular/core";
import { List } from "../../interfaces/models.interface";

@Component({
  selector: 'app-toList',
  templateUrl: './list-component.html',
})
export class ToLisComponent {
  createL = output<void>();
  Bconfirm = input.required<string>();
  titlePage = input.required<string>();

  list = input.required<List[]>();
  goToCreate() {
    this.createL.emit();
  }
}
