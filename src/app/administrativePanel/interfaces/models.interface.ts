import { signal } from "@angular/core";

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
  type: 'text' | 'number' |  'checkbox' | 'email' | 'password' |'checkbox';
  value? : string | number | boolean | '';
}

export interface List{
  name: string;
  id: string;
  neighborhood: string | string[];
  description?: string;
  startTime?: string;
  endTime?: string;
  stops?: string[] | string;
  ubicationStop?: string;
}






