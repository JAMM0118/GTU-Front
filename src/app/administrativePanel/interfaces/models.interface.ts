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
  value?: string | number | boolean | '';
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





