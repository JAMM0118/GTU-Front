import { WritableSignal } from "@angular/core";

export interface MenuOption {
  label: string;
  route: string;
  icon: string;
  style?: string;
}

export interface Form {
  title: string;
  id: string,
  type: 'text' | 'number' | 'checkbox' | 'email' | 'password' | 'checkbox' |
  'time' | 'tel' | 'date';
  value: WritableSignal<string>;
}

export interface Neighborhood {
  id: number;
  name: string;
}

export interface Stops {
  id?: number;
  name: string;
  description: string;
  neighborhoodId: number;

}

export interface Routes {
  id?: number;
  name: string;
  description: string;
  startTime: string,
  endTime: string,
  neighborhoods: number[];
  stops: number[];

}

export interface searchType{
  name: string;
  type: 'ruta' | 'parada';
}


export interface loginForm{
  email? : string;
  password?: string;
}




