import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Content} from "../helper-files/content-interface";


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateRocketEvent: EventEmitter<Content> = new EventEmitter<Content>();
  rocket?: Content;
  constructor() { }

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
  }

  updateRocket(title: string, description: string, creator: string, type: string, tags: string, imgURL: string){
    this.rocket ={
      title: title,
      description : description,
      creator: creator,
      type: type,
      tags: tags.split(','),
      imgURL: imgURL
    }
    this.updateRocketEvent.emit(this.rocket);
  }

}
