export interface ListItem {
  id: string;
  title: string;
  description: string;
  heart_button: User[];
  candle_button: User[];
}

export interface User {
  id: string;
  name: string;
}

export interface OremusList {
  id: string;
  name: string;
  description: string;
  items: ListItem[];
}
