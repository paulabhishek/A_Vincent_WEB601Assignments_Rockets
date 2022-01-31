import {Content} from "./content-interface";

export class ContentList{
private _items: Content[];

constructor() {
  this._items = [];
}
get items(): Content[]{
  return this._items;
}

set items(newItem: Content[]){
  this._items = newItem;
}

addItem(newItem:Content){
  this._items.push(newItem);
}

itemCount(){
  return this._items.length;
}

outputRockets(id:number):string{
  if(id >= this.itemCount()){
    return `index ${id} is empty`;
  } else{
    return `<h1>Title: ${this._items[id].title}</h1>
            <h2>Creator: ${this._items[id].creator}</h2>
            <img width="500" height="600" src ='${this._items[id].imgURL}' alt='${this._items[id].title}' />
            <h2>Type: ${this._items[id].type}</h2>
            <h4>Description: ${this._items[id].description}</h4>`

  }
}
}
