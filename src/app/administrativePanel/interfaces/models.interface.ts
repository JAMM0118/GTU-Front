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

export interface List {
  id: string;
  name: string;
  description?: string;
  neighborhood: string[] | number[] | string | number;
  startTime?: string;
  endTime?: string;
  latitude?: number;
  longitude?: number;
  stops?: string[] | number[];
  ubicationStop?: string;
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





