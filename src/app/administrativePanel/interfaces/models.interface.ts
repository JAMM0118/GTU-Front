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

export interface List{
  name: string;
  id: string;
}






