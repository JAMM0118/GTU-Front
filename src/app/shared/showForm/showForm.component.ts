import { Component, input, output, signal } from '@angular/core';
import { ToLisComponent } from "../../administrativePanel/components/toList/list-component";
import { FormsComponent } from "../../administrativePanel/components/forms/forms.component";
import type { Form, List } from '../../administrativePanel/interfaces/models.interface';

@Component({
  selector: 'app-show-form',
  imports: [ToLisComponent, FormsComponent],
  templateUrl: './showForm.component.html',
})
export class ShowFormComponent {
  titleList = input.required<string>();
  titleForm = input.required<string>();
  form = input.required<Form[]>();
  list = input.required<List[]>();
  showForm = false;

  toggleForm(){
    this.showForm = !this.showForm;

  }

  deleteItem(id: string) {
    this.list().splice(
      this.list().findIndex((item) => item.id === id),
      1
    );
  }
  createItem(newList : List) {
    this.list().push(newList);
  }

  editItem(id: string) {
   console.log('Editando item con id:', id);
    console.log('Lista antes de la edición:', this.list().filter((item) => {
      if(item.id === id) console.log(item.name);

      return item.id == id;}));

    // const itemIndex = this.list().findIndex((item) => item.id === id);
    // if (itemIndex !== -1) {
    //   const item = this.list()[itemIndex];
    //   this.list()[0].id = item.id;
    //   this.list()[0].name = item.name;
    // }
  }

 }
