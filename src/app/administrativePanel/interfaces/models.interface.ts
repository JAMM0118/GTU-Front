
export interface MenuOption{
  label: string;
  subLabel?: string;
  route: string;
  icon: string;
  style?: string;
}

export interface Form{
  title: string;
  type: 'text' | 'number' |  'checkbox' | 'email' | 'password';
}






