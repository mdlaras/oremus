import { Injectable } from '@angular/core';
import { ListItem, OremusList } from './entities/list.entity';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private unsereListe: OremusList = {
    id: 'ID001',
    name: 'Helena, Simon, Maria',
    description: 'Wir :)',
    items: [],
  };
  lists: OremusList[] = [this.unsereListe];
  constructor() {}

  updateList(listId: string, updateItem: ListItem) {
    const list: OremusList | undefined = this.getList(listId);
    if (!list) return;
    const itemIndex = list.items.findIndex((item) => item.id === updateItem.id);
    if (itemIndex != -1) {
      list.items.splice(itemIndex, 1, updateItem);
    } else {
      list.items = [...list.items, updateItem];
    }
  }

  getList(listId: string): OremusList | undefined {
    const list: OremusList | undefined = this.lists.find(
      (list) => list.id === listId
    );
    return list;
  }

  removeListItem(listId: string, itemId: string) {
    const list = this.getList(listId);
    if (!list) return -1;
    const itemIndex = list.items.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      return -1;
    }
    list.items.splice(itemIndex, 1);
    return itemIndex;
  }
}
