import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ShowFormComponent } from "../../../shared/showForm/showForm.component";
import { GtuUsersService } from '../../services/gtu-users.service';
import { Form } from '../../interfaces/models.interface';
import { FiltersComponent } from '../../components/filters/filters.component';

@Component({
  selector: 'app-users-page',
  imports: [HeaderComponent, ShowFormComponent],
  templateUrl: './users-page.component.html',
})
export default class UsersPageComponent {
  service = inject(GtuUsersService);

  //filters = ['ADMIN', 'DRIVER', 'MODERATOR'];

  isEditing = computed(()=>{return this.service.userToEdit() ? true : false });

  usersForm = computed<Form[]>(() => {
    console.log(this.isEditing());

    return [
      {
        title: 'Nombre del usuario',
        type: 'text',
        id: 'name',
        value: signal(''),
      },
      {
        title: 'Correo del usuario',
        type: 'email',
        id: 'email',
        value: signal(''),
      },
      {
        title: 'Contraseña del usuario',
        type: 'password',
        id: 'password',
        value: signal(''),
      },
      {
        title: 'Rol del usuario',
        type: 'text',
        id: 'role',
        value: signal(''),
      },
      {
        title: 'Estado del usuario',
        type: 'text',
        id: 'status',
        value: signal(''),
      },
    ];
  }); 

 }
