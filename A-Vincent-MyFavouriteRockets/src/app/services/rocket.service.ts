import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ROCKETS} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor() { }
  getContent(): Observable<Content[]> {
    const rockets = of(ROCKETS);
    return rockets;
  }

  getContentObs(): Observable<Content[]> { //async function
    return of(ROCKETS);
  }

  getIdContent(id: any): Observable<Content>{
    const message = ROCKETS[id];
    if (id < ROCKETS.length){
      console.log("Success !",ROCKETS);
    } else{
      console.log("Failed !");
      //this.DisplayError();
    }
    return of(ROCKETS[id]);
  }
}
