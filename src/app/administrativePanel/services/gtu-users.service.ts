import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GtuMapper } from '../mapper/gtu.mapper';
import { UsersResponse } from '../interfaces/reponses.interface';
import { User } from '../interfaces/models.interface';

@Injectable({
  providedIn: 'root'
})
export class GtuUsersService {

  private http = inject(HttpClient);
  users = signal<User[]>([]);
  userToEdit = signal<User | null>(null);

  constructor() {
    this.loadUsers();
    console.log('Service initialized');
  }

  mapRecordFormToUser(formValues: Record<string, string>): User {
    return {
      name: formValues['name'],
      email: formValues['name'].toLowerCase() + '.' + formValues['lastname'].toLowerCase() + '@gtu.com',
      password: 'Passw0rd',
      role: formValues['role'],
      status: 'ACTIVE',
    };
  }

  loadUsers() {
    this.http.get<UsersResponse>(environment.backEndGTU_Users + '/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
      params: {
        role: 'ADMIN',
      }
    }).subscribe((res) => {
      console.log('response loaded:', res);
      const mapper = GtuMapper.mapDataUsersToUserArray(res.data);
      console.log('mapped response admin:', { mapper });
      this.users.update((items) =>
        [...items, ...mapper]);
    })

    this.http.get<UsersResponse>(environment.backEndGTU_Users + '/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
      params: {
        role: 'DRIVER',
      }
    }).subscribe((res) => {
      console.log('response loaded:', res);
      const mapper = GtuMapper.mapDataUsersToUserArray(res.data);
      console.log('mapped response driver:', { mapper });
      this.users.update((items) => [...items, ...mapper]);
      console.log('users:', this.users());
    })
  }

  createUser(form: Record<string, string>) {
    const user = this.mapRecordFormToUser(form);
    console.log('user to create:', user);
    this.http.post<UsersResponse>(environment.backEndGTU_Users + '/users', {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      status: user.status,
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      }
    })
      .subscribe((res) => {
        console.log('User added to backend:', res);
        if (!Array.isArray(res.data)) {
          const mapper = GtuMapper.mapDataUsersToUser(res.data);
          this.users.update((prev) => [...prev, mapper]);
        }
        console.log('All users:', this.users());
      });

  }

  deleteUser(id: number) {
    this.http.delete(environment.backEndGTU_Users + '/users/' + id,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    )
      .subscribe((res) => {
        console.log('User deleted from backend:', res);
        this.users.update((prev) => prev.filter((item) => item.id !== id));
      });
  }

  userSelectedToEdit(user: User) {
    console.log('there', user)
    this.userToEdit.set(user);
    console.log('user to edit:', this.userToEdit())
  }

  editUser(form: Record<string, string>) {
    const user = this.mapRecordFormToUser(form);
    console.log('user to edit:', user);
    alert('user to edit:');
  }
}








