import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ROCKETS} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";
import {MessagesService} from "./messages.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private httpOptions = {
    headers: new HttpHeaders({'content-type' : 'application/json'})
  }
  constructor(private messagesService: MessagesService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  getContentObs(): Observable<Content[]> { //async function
    return of(ROCKETS);
  }

  getIdContent(id: any): Observable<Content>{
    //const message = ROCKETS[id];
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

  addContent(newContentItem: Content): Observable<Content>{
    console.log('Adding new content', newContentItem);
    //this.messagesService.add('Adding new content' + newContentItem);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);

  }

  updateContent(contentItem: Content): Observable<any>{
    console.log('Updating...', contentItem);
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}
