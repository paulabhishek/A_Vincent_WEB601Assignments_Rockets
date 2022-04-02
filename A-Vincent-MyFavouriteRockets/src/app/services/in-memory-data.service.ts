import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ROCKETS} from "../helper-files/contentDb";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  constructor() { }

  createDb(){
    const content: Content[] = ROCKETS;
    return {content};
  }
  genId(content: Content[]): number{
    return content.length > 0 ?
      Math.max(...content.map(c => c.id ?? 0)) +1 : 2000;
  }
}
