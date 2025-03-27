import { signal, WritableSignal } from '@angular/core';

export interface MenuOption{
  label: string;
  subLabel?: string;
  route: string;
  icon: string;
  style?: string;
}

export interface Form{
  title: string;
  id:  string,
  type: 'text' | 'number' |  'checkbox' | 'email' | 'password';
}






