import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { MessagesService } from "../services/messages.service";


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  rocket?: Content;
  constructor(private messageService: MessagesService) { }
  ngOnInit(): void {
  }
  addRocket(title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
    this.rocket ={
      title: title,
      description : description,
      creator: creator,
      type: type,
      tags: tags.split(','),
      imgURL: imgURL
    }
    this.newRocketEvent.emit(this.rocket);
    this.messageService.add('Added ' + this.rocket.title);
  }

  updateRocket(id: string, title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
    this.rocket ={
      id: parseInt(id),
      title: title,
      description : description,
      creator: creator,
      type: type,
      tags: tags.split(','),
      imgURL: imgURL
    }
    this.updateRocketEvent.emit(this.rocket);
    this.messageService.add('Updated ' + this.rocket.id);
  }


  // addRocket(title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
  //   this.rocket ={
  //     title: title,
  //     description : description,
  //     creator: creator,
  //     type: type,
  //     tags: tags.split(','),
  //     imgURL: imgURL
  //   }
  //   this.newRocketEvent.emit(this.rocket);
  //   this.messageService.add('Added ' + this.rocket.title);
  // }
  //
  // updateRocket(id: string, title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
  //   this.rocket ={
  //     id: parseInt(id),
  //     title: title,
  //     description : description,
  //     creator: creator,
  //     type: type,
  //     tags: tags.split(','),
  //     imgURL: imgURL
  //   }
  //   this.updateRocketEvent.emit(this.rocket);
  //   this.messageService.add('Updated ' + this.rocket.id);
  // }

}
