import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ROCKETS} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";
import {MessagesService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private messagesService: MessagesService) { }

  // getContent(): Observable<Content[]> {
  //   const rockets = of(ROCKETS);
  //   return rockets;
  // }

  getContentObs(): Observable<Content[]> { //async function
    return of(ROCKETS);
  }

  getIdContent(id: any): Observable<Content>{
    const message = ROCKETS[id];
    if (id < ROCKETS.length ){
      this.messagesService.add("Content array loaded!");
      //this.messagesService.add('Content item at ID: ' + (message.id-1));
      console.log(ROCKETS);
    } else{
      console.log("Failed !");
      this.messagesService.add('Content not available');
    }
    return of(ROCKETS[id]);
  }
}
