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
        error: signal(null),
        validation: (val: string) => val.trim() === '' ? 'El nombre del usuario es obligatorio' : null
      },
      {
        title: 'Correo del usuario',
        type: 'email',
        id: 'email',
        value: signal(''),
        error: signal(null),
        validation: (val: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return !emailRegex.test(val) ? 'El correo electrónico no es válido' : null;
        }
      },
      {
        title: 'Contraseña del usuario',
        type: 'password',
        id: 'password',
        value: signal(''),
        error: signal(null),
        validation: (val: string) => val.trim() === '' ? 'La contraseña es obligatoria' : null
      },
      {
        title: 'Rol del usuario',
        type: 'text',
        id: 'role',
        value: signal(''),
        error: signal(null),
        validation: (val: string) => val.trim() === '' ? 'El rol del usuario es obligatorio' : null
      }
    ];
  }); 

 }
