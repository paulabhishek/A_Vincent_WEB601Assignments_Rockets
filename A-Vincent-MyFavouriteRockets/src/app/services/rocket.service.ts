import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ROCKETS} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor() { }
  getContent(): Content[] {
    return ROCKETS;
  }

  getContentObs(): Observable<Content[]> { //async function
    return of(ROCKETS);
  }
}
