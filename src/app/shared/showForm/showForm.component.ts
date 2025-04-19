import { Component, input, output } from '@angular/core';
import { ToLisComponent } from "../../administrativePanel/components/list/list-component";
import { FormsComponent } from "../../administrativePanel/components/forms/forms.component";
import type { Form, Routes, Stops } from '../../administrativePanel/interfaces/models.interface';

@Component({
  selector: 'app-show-form',
  imports: [ToLisComponent, FormsComponent],
  templateUrl: './showForm.component.html',
})
export class ShowFormComponent {
  titleList = input.required<string>();
  titleForm = input.required<string>();
  editIem = output<any>();
  editTitle = input.required<string>();
  isEditing = input.required<boolean>();
  deleteItem = output<number>();
  form = input.required<Form[]>();
  list = input.required<Stops[] | Routes[]>();
  bandera = input.required<boolean>();

  showForm = false;

  toggleForm(){
    this.showForm = !this.showForm;

  }

 }
